import BN = require("bn.js");
const { shouldFail, time } = require("openzeppelin-test-helpers");
import { expect } from "chai";

import { RebornDollarInstance } from "../types/truffle-contracts";

const RebornDollar = artifacts.require("RebornDollar");

contract("Reborn Dollar", ([owner, user, otherUser]) => {
  const NAME = "Reborn Dollar";
  const SYMBOL = "REBD";
  const DECIMALS = 18;
  const INITIAL_SUPPLY = new BN(10 * 1000 * 1000 * 1000).imul(
    new BN(10).pow(new BN(DECIMALS))
  );

  let rebornDollar: RebornDollarInstance;

  before(async () => {
    rebornDollar = await RebornDollar.new();
  });

  it(`should describe ${NAME}`, async () => {
    const name = await rebornDollar.name();
    const symbol = await rebornDollar.symbol();

    expect(name).to.eq(NAME);
    expect(symbol).to.eq(SYMBOL);
  });

  it(`should put initial total supply ${INITIAL_SUPPLY} for owner`, async () => {
    const totalSupply = await rebornDollar.totalSupply();
    const ownerBalance = await rebornDollar.balanceOf(owner);

    expect(totalSupply).to.be.a.bignumber.that.equals(INITIAL_SUPPLY);
    expect(totalSupply).to.be.a.bignumber.that.equals(ownerBalance);
  });

  describe("ERC1132 Lockable", () => {
    const LOCK_REASON = web3.utils.asciiToHex("VESTING-1");
    const AMOUNT = new BN(1000);
    const LOCK_PERIOD = new BN(30 * 24 * 60 * 60); // 30 days
    it("can tranfer with lock", async () => {
      const blockNumber = await web3.eth.getBlockNumber();
      const originalTimestamp = new BN(
        (await web3.eth.getBlock(blockNumber)).timestamp
      );
      const originalBalance = await rebornDollar.balanceOf(owner);

      await rebornDollar.transferWithLock(
        user,
        LOCK_REASON,
        AMOUNT,
        LOCK_PERIOD
      );
      const remainingBalance = await rebornDollar.balanceOf(owner);
      expect(remainingBalance).to.be.a.bignumber.that.equals(
        originalBalance.sub(AMOUNT)
      );
      const locked = await rebornDollar.locked(user, LOCK_REASON);
      expect(locked[0]).to.be.a.bignumber.that.equals(AMOUNT);
      expect(locked[1]).to.be.a.bignumber.that.equals(
        LOCK_PERIOD.add(originalTimestamp)
      );
      expect(locked[2]).to.be.false;
    });

    it("should show correct totalBalance", async () => {
      const totalBalance = await rebornDollar.totalBalanceOf(user);
      expect(totalBalance).to.be.a.bignumber.that.equals(AMOUNT);
    });

    it("can not transfer locked balance", async () => {
      const totalBalance = await rebornDollar.totalBalanceOf(user);
      await shouldFail.reverting(
        rebornDollar.transfer(otherUser, totalBalance, {
          from: user
        })
      );
    });

    describe("after lock period", () => {
      before(async () => {
        await time.increase(LOCK_PERIOD.toNumber() + 1);
      });

      it("should be unlockable", async () => {
        const unlockable = await rebornDollar.getUnlockableTokens(user);
        expect(unlockable).to.be.a.bignumber.that.equals(AMOUNT);
      });

      it("can unlock all to balance", async () => {
        const originalBalance = await rebornDollar.balanceOf(user);
        const unlockable = await rebornDollar.getUnlockableTokens(user);
        const unlock = await rebornDollar.unlock(user);
        const finalBalance = await rebornDollar.balanceOf(user);
        const finalUnlockable = await rebornDollar.getUnlockableTokens(user);
        expect(finalBalance).to.be.a.bignumber.that.equals(
          originalBalance.add(unlockable)
        );
        expect(finalUnlockable).to.be.a.bignumber.that.equals("0");
      });

      it("unlocked should show claimed", async () => {
        const locked = await rebornDollar.locked(user, LOCK_REASON);
        expect(locked[2]).to.be.true;
      });
    });
  });
});
