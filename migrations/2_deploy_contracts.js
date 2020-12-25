var WRBMarketplace = artifacts.require("./WRBMarketplace.sol");

module.exports = function (deployer) {
  deployer.deploy(WRBMarketplace);
};
