const Migrations = artifacts.require("Migrations");
const PancakeRouter = artifacts.require("PancakeRouter");
const PancakeRouter01 = artifacts.require("PancakeRouter01");

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

module.exports = function (deployer, network, accounts) {
  deployer.deploy(PancakeRouter, process.env.PANCAKE_FACTORY_CONTRACT, process.env.WBNB_CONTRACT);
  // deployer.deploy(PancakeRouter01, process.env.PANCAKE_FACTORY_CONTRACT, process.env.WBNB_CONTRACT);
};