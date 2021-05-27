const tuxedo = artifacts.require("Tuxedo.sol");

module.exports = function (deployer) {
  const _name = "Tuxedo";
  const _symbol = "TUX";
  const _decimals = 18;
  deployer.deploy(Tuxedo, _name, _symbol, _decimals);
};
