/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

/// <reference types="truffle-typings" />
import { BigNumber } from "bignumber.js";

export interface ERC1132Contract extends Truffle.Contract<ERC1132Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC1132Instance>;
}

export interface ERC20Contract extends Truffle.Contract<ERC20Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC20Instance>;
}

export interface ERC20BurnableContract
  extends Truffle.Contract<ERC20BurnableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC20BurnableInstance>;
}

export interface ERC20DetailedContract
  extends Truffle.Contract<ERC20DetailedInstance> {
  "new"(
    name: string,
    symbol: string,
    decimals: number | BigNumber | string,
    meta?: Truffle.TransactionDetails
  ): Promise<ERC20DetailedInstance>;
}

export interface ERC20MintableContract
  extends Truffle.Contract<ERC20MintableInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<ERC20MintableInstance>;
}

export interface IERC1132Contract extends Truffle.Contract<IERC1132Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC1132Instance>;
}

export interface IERC20Contract extends Truffle.Contract<IERC20Instance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<IERC20Instance>;
}

export interface LockableTokenContract
  extends Truffle.Contract<LockableTokenInstance> {
  "new"(
    _supply: number | BigNumber | string,
    meta?: Truffle.TransactionDetails
  ): Promise<LockableTokenInstance>;
}

export interface MigrationsContract
  extends Truffle.Contract<MigrationsInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MigrationsInstance>;
}

export interface MinterRoleContract
  extends Truffle.Contract<MinterRoleInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<MinterRoleInstance>;
}

export interface RebornDollarContract
  extends Truffle.Contract<RebornDollarInstance> {
  "new"(meta?: Truffle.TransactionDetails): Promise<RebornDollarInstance>;
}

export interface ERC1132Instance extends Truffle.ContractInstance {
  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  lockReason(
    arg0: string | BigNumber,
    arg1: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  locked(
    arg0: string | BigNumber,
    arg1: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber, boolean]>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokensLocked(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokensLockedAtTime(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  totalBalanceOf(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokensUnlockable(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  getUnlockableTokens(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve(
    spender: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseAllowance(
    spender: string | BigNumber,
    addedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  decreaseAllowance(
    spender: string | BigNumber,
    subtractedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  lock(
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferWithLock(
    _to: string | BigNumber,
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  extendLock(
    _reason: string | BigNumber,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseLockAmount(
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  unlock(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface ERC20Instance extends Truffle.ContractInstance {
  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  approve(
    spender: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseAllowance(
    spender: string | BigNumber,
    addedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  decreaseAllowance(
    spender: string | BigNumber,
    subtractedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface ERC20BurnableInstance extends Truffle.ContractInstance {
  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve(
    spender: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseAllowance(
    spender: string | BigNumber,
    addedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  decreaseAllowance(
    spender: string | BigNumber,
    subtractedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  burn(
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  burnFrom(
    from: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface ERC20DetailedInstance extends Truffle.ContractInstance {
  balanceOf(
    who: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve(
    spender: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
  name(txDetails?: Truffle.TransactionDetails): Promise<string>;
  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;
  decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface ERC20MintableInstance extends Truffle.ContractInstance {
  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  isMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve(
    spender: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseAllowance(
    spender: string | BigNumber,
    addedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  addMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  renounceMinter(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  decreaseAllowance(
    spender: string | BigNumber,
    subtractedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  mint(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface IERC1132Instance extends Truffle.ContractInstance {
  tokensLocked(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokensLockedAtTime(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  totalBalanceOf(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokensUnlockable(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  getUnlockableTokens(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  lock(
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  extendLock(
    _reason: string | BigNumber,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseLockAmount(
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  unlock(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;
}

export interface IERC20Instance extends Truffle.ContractInstance {
  balanceOf(
    who: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  approve(
    spender: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface LockableTokenInstance extends Truffle.ContractInstance {
  tokensLockedAtTime(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  totalBalanceOf(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokensUnlockable(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokensLocked(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  lockReason(
    arg0: string | BigNumber,
    arg1: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  getUnlockableTokens(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  locked(
    arg0: string | BigNumber,
    arg1: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber, boolean]>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve(
    spender: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  lock(
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  unlock(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseAllowance(
    spender: string | BigNumber,
    addedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferWithLock(
    _to: string | BigNumber,
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseLockAmount(
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  decreaseAllowance(
    spender: string | BigNumber,
    subtractedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  extendLock(
    _reason: string | BigNumber,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
}

export interface MigrationsInstance extends Truffle.ContractInstance {
  setCompleted(
    completed: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  upgrade(
    new_address: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  last_completed_migration(
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;
  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;
}

export interface MinterRoleInstance extends Truffle.ContractInstance {
  isMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  addMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  renounceMinter(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;
}

export interface RebornDollarInstance extends Truffle.ContractInstance {
  tokensLockedAtTime(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  totalBalanceOf(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokensUnlockable(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  tokensLocked(
    _of: string | BigNumber,
    _reason: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  balanceOf(
    owner: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  lockReason(
    arg0: string | BigNumber,
    arg1: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<string>;

  isMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<boolean>;

  getUnlockableTokens(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  locked(
    arg0: string | BigNumber,
    arg1: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<[BigNumber, BigNumber, boolean]>;

  allowance(
    owner: string | BigNumber,
    spender: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<BigNumber>;

  approve(
    spender: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferFrom(
    from: string | BigNumber,
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  lock(
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  unlock(
    _of: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseAllowance(
    spender: string | BigNumber,
    addedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  mint(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  burn(
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transferWithLock(
    _to: string | BigNumber,
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  burnFrom(
    from: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  increaseLockAmount(
    _reason: string | BigNumber,
    _amount: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  addMinter(
    account: string | BigNumber,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  renounceMinter(
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  decreaseAllowance(
    spender: string | BigNumber,
    subtractedValue: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  transfer(
    to: string | BigNumber,
    value: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  extendLock(
    _reason: string | BigNumber,
    _time: number | BigNumber | string,
    txDetails?: Truffle.TransactionDetails
  ): Promise<Truffle.TransactionResponse>;

  name(txDetails?: Truffle.TransactionDetails): Promise<string>;
  totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
  DECIMALS(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
  INITIAL_SUPPLY(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
  decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>;
  symbol(txDetails?: Truffle.TransactionDetails): Promise<string>;
  NAME(txDetails?: Truffle.TransactionDetails): Promise<string>;
  SYMBOL(txDetails?: Truffle.TransactionDetails): Promise<string>;
}