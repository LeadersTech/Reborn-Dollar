declare module Chai {
  export interface TypeComparison {
    bignumber: Assertion;
  }

  export interface Assertion {
    bignumber: Assertion;
  }
}
