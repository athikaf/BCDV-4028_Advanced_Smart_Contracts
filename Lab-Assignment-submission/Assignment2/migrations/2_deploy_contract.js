// 2_deploy_contract.js
const MyNFT = artifacts.require("MyNFT");

module.exports = function (deployer) {
  deployer.deploy(MyNFT);
};
