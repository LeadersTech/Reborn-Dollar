import { LockableTokenInstance } from "../types/truffle-contracts";
const { BN, shouldFail, time } = require("openzeppelin-test-helpers");
import { expect } from "chai";

const LockableToken = artifacts.require("LockableToken");

const supply = 1000;
const lockReason = "GOV";
const lockReason2 = "CLAIM";
const lockReason3 = "VESTED";
const lockReason4 = "GB";
const lockReason5 = "MG";
const lockReason6 = "OZ";
const lockedAmount = new BN(200);
const lockPeriod = 1000;
let blockNumber: number;
let lockTimestamp: number;
let token: LockableTokenInstance;

contract("LockableToken", ([owner, receiver, spender]) => {
  before(async () => {
    token = await LockableToken.new(supply);
    blockNumber = await web3.eth.getBlockNumber();
    lockTimestamp = (await web3.eth.getBlock(blockNumber)).timestamp;
  });

  it("can be created", () => {
    assert.ok(token);
  });

  it("has the right balance for the contract owner", async () => {
    const balance = await token.balanceOf(owner);
    const totalBalance = await token.totalBalanceOf(owner);
    const totalSupply = await token.totalSupply();
    assert.equal(balance.toNumber(), supply);
    assert.equal(totalBalance.toNumber(), supply);
    assert.equal(totalSupply.toNumber(), supply);
  });

  it("has the right total balance for the contract owner", async () => {
    const balance = await token.totalBalanceOf(owner);
    assert.equal(balance.toNumber(), supply);
  });

  it("reduces locked tokens from transferable balance", async () => {
    const origBalance = await token.balanceOf(owner);
    const hexedLockReason = web3.utils.asciiToHex(lockReason);
    blockNumber = await web3.eth.getBlockNumber();
    const newLockTimestamp = (await web3.eth.getBlock(blockNumber)).timestamp;
    await token.lock(hexedLockReason, lockedAmount, lockPeriod);
    const balance = await token.balanceOf(owner);
    const totalBalance = await token.totalBalanceOf(owner);
    expect(balance).to.be.a.bignumber.that.equals(
      origBalance.sub(lockedAmount)
    );
    expect(totalBalance).to.be.a.bignumber.that.equals(origBalance);

    const actualLockedAmount = await token.tokensLocked(owner, hexedLockReason);
    expect(actualLockedAmount).to.be.a.bignumber.that.equals(lockedAmount);
    const futureLockedAmount = await token.tokensLockedAtTime(
      owner,
      hexedLockReason,
      newLockTimestamp + lockPeriod + 1
    );
    expect(futureLockedAmount).to.be.a.bignumber.that.equals("0");

    const transferAmount = new BN(1);
    const { logs } = await token.transfer(receiver, transferAmount);
    const newSenderBalance = await token.balanceOf(owner);
    const newReceiverBalance = await token.balanceOf(receiver);
    expect(newReceiverBalance).to.be.a.bignumber.that.equals(transferAmount);
    expect(newSenderBalance).to.be.a.bignumber.that.equals(
      balance.sub(transferAmount)
    );
    expect(logs.length).to.equal(1);
    expect(logs[0].event).to.equal("Transfer");
    expect(logs[0].args.from).to.equal(owner);
    expect(logs[0].args.to).to.equal(receiver);
    expect(logs[0].args.value).to.be.a.bignumber.that.equals(transferAmount);
  });

  it("reverts locking more tokens via lock function", async () => {
    const hexedLockReason = web3.utils.asciiToHex(lockReason);
    const balance = await token.balanceOf(owner);
    await shouldFail.reverting(
      token.lock(hexedLockReason, balance, lockPeriod)
    );
  });

  it("can extend lock period for an existing lock", async () => {
    const hexedLockReason = web3.utils.asciiToHex(lockReason);
    const lockedAmount = await token.tokensLocked(owner, hexedLockReason);
    const lockValidityOrig = await token.locked(owner, hexedLockReason);
    await token.extendLock(hexedLockReason, lockPeriod);
    const lockValidityExtended = await token.locked(owner, hexedLockReason);

    expect(lockValidityExtended[0]).to.be.a.bignumber.that.equals(
      lockValidityOrig[0]
    );

    expect(lockValidityExtended[1]).to.be.a.bignumber.that.equals(
      lockValidityOrig[1].addn(lockPeriod)
    );
  });

  it("can increase the number of tokens locked", async () => {
    const hexedLockReason = web3.utils.asciiToHex(lockReason);
    const actualLockedAmount = await token.tokensLocked(owner, hexedLockReason);
    await token.increaseLockAmount(hexedLockReason, lockedAmount);
    const increasedLockAmount = await token.tokensLocked(
      owner,
      hexedLockReason
    );
    expect(increasedLockAmount).to.be.a.bignumber.that.equals(
      actualLockedAmount.add(lockedAmount)
    );
  });

  it("should fail changing non existance lock", async () => {
    const hexedLockReason2 = web3.utils.asciiToHex(lockReason2);
    await shouldFail.reverting(token.extendLock(hexedLockReason2, lockPeriod));
    await shouldFail.reverting(
      token.increaseLockAmount(hexedLockReason2, lockPeriod)
    );
  });

  it("can unLockTokens", async () => {
    const hexedLockReason = web3.utils.asciiToHex(lockReason);
    const lockValidityExtended = await token.locked(owner, hexedLockReason);
    const originalBalance = await token.balanceOf(owner);
    const tokensLocked = await token.tokensLockedAtTime(
      owner,
      hexedLockReason,
      lockTimestamp
    );
    const unlockableTokenBefore = await token.getUnlockableTokens(owner);
    await time.increase(
      lockValidityExtended[1].toNumber() + 60 - lockTimestamp
    );
    const unlockableToken = await token.getUnlockableTokens(owner);
    assert.equal(unlockableToken.toNumber(), tokensLocked.toNumber());
    await token.unlock(owner);
    const unlockableTokenAfterUnlock = await token.getUnlockableTokens(owner);
    assert.equal(unlockableTokenAfterUnlock.toNumber(), 0);
    const finalBalance = await token.balanceOf(owner);
    assert.equal(
      finalBalance.toNumber(),
      originalBalance.toNumber() + tokensLocked.toNumber()
    );
    await token.unlock(owner);
    const overUnlockedfinalBalance = await token.balanceOf(owner);
    assert.equal(finalBalance.toNumber(), overUnlockedfinalBalance.toNumber());
  });

  it("should allow to lock token again", async () => {
    const hexedLockReason4 = web3.utils.asciiToHex(lockReason4);
    const amountToLock = new BN(1);
    await token.lock(hexedLockReason4, amountToLock, 0);
    await token.unlock(owner);
    await token.lock(hexedLockReason4, amountToLock, 100000);
    const actualLockedAmount = await token.tokensLocked(
      owner,
      hexedLockReason4
    );
    expect(actualLockedAmount).to.be.a.bignumber.that.equals(amountToLock);
  });

  it("can transferWithLock", async () => {
    const hexedLockReason3 = web3.utils.asciiToHex(lockReason3);

    const originalOwnerBalance = await token.balanceOf(owner);
    const originalReceiverBalance = await token.balanceOf(receiver);
    const amountToSend = originalOwnerBalance.subn(1);
    await token.transferWithLock(receiver, hexedLockReason3, amountToSend, 0);
    const locked = await token.locked(receiver, hexedLockReason3);

    const remainingOwnerBalance = await token.balanceOf(owner);
    const receiverTotalBalance = await token.totalBalanceOf(receiver);
    expect(remainingOwnerBalance).to.be.a.bignumber.that.equals(
      originalOwnerBalance.sub(amountToSend)
    );
    expect(receiverTotalBalance).to.be.a.bignumber.that.equals(
      originalReceiverBalance.add(amountToSend)
    );
    expect(locked[0]).to.be.a.bignumber.that.equals(amountToSend);
  });

  it("should not allow 0 lock amount", async () => {
    const hexedLockReason5 = web3.utils.asciiToHex(lockReason5);
    await shouldFail.reverting(token.lock(hexedLockReason5, 0, lockTimestamp));
    await shouldFail.reverting(
      token.transferWithLock(receiver, hexedLockReason5, 0, lockPeriod)
    );
  });

  it("should show 0 lock amount for unknown reasons", async () => {
    const hexedLockReason6 = web3.utils.asciiToHex(lockReason6);
    const actualLockedAmount = await token.tokensLocked(
      owner,
      hexedLockReason6
    );
    assert.equal(actualLockedAmount.toNumber(), 0);
  });

  it("should not allow to increase lock amount by more than balance", async () => {
    const hexedLockReason3 = web3.utils.asciiToHex(lockReason3);
    const receiverBalance = await token.balanceOf(receiver);
    await shouldFail.reverting(
      token.increaseLockAmount(hexedLockReason3, receiverBalance.addn(1))
    );
  });

  it("should not allow to transfer and lock more than balance", async () => {
    const hexedLockReason = web3.utils.asciiToHex(lockReason);
    const ownerBalance = await token.balanceOf(owner);
    await shouldFail.reverting(
      token.transferWithLock(
        receiver,
        hexedLockReason,
        ownerBalance.addn(1),
        lockPeriod
      )
    );
  });

  it("should allow transfer with lock again after claiming", async () => {
    const hexedLockReason3 = web3.utils.asciiToHex(lockReason3);

    await token.unlock(receiver);
    const oldlLockedAmount = await token.tokensLocked(
      receiver,
      hexedLockReason3
    );
    await token.transferWithLock(receiver, hexedLockReason3, 1, 10000);
    const newLockedAmount = await token.tokensLocked(
      receiver,
      hexedLockReason3
    );
    expect(newLockedAmount).to.be.a.bignumber.that.equals(
      oldlLockedAmount.addn(1)
    );
  });
});
