const EthereumBridge = artifacts.require("EthereumBridge");
const BSCBridge = artifacts.require("BSCBridge");

module.exports = async function (deployer) {
  // Deploy EthereumBridge
  await deployer.deploy(EthereumBridge, "0xAddressOfYourBSCBridge"); // Replace with the actual address of your BSCBridge
  const ethereumBridge = await EthereumBridge.deployed();

  // Deploy BSCBridge
  await deployer.deploy(BSCBridge, "0xAddressOfYourEthereumBridge"); // Replace with the actual address of your EthereumBridge
  const bscBridge = await BSCBridge.deployed();

  // Set bridge addresses in each bridge contract
  await ethereumBridge.setBSCBridge(bscBridge.address);
  await bscBridge.setEthereumBridge(ethereumBridge.address);
};
