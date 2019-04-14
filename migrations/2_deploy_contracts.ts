const RebornDollar = artifacts.require("RebornDollar");

module.exports = function(deployer) {
  deployer.deploy(RebornDollar);
} as Truffle.Migration;

export {};
