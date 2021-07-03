const Migrations = artifacts.require("Migrations");
const PancakeFactory = artifacts.require("PancakeFactory");

require('dotenv').config();

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

module.exports = function (deployer, network, accounts) {
  deployer.deploy(PancakeFactory, process.env.FEE_TO_SETTER);
};