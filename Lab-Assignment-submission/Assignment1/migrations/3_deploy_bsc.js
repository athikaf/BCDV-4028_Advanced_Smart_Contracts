require("dotenv").config();

const MyTokenBSC = artifacts.require("MyTokenBSC");
const BSCBridge = artifacts.require("BSCBridge");

module.exports = async function (deployer) {
  // Deploy MyTokenBSC
  await deployer.deploy(MyTokenBSC);

  // Deploy BSCBridge and pass the address of MyTokenBSC
  await deployer.deploy(BSCBridge, MyTokenBSC.address);
};
