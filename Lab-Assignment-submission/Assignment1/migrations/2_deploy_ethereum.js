require("dotenv").config();

const MyTokenEthereum = artifacts.require("MyTokenEthereum");
const EthereumBridge = artifacts.require("EthereumBridge");

module.exports = async function (deployer) {
  // Deploy MyTokenEthereum
  console.log("Deploying MyTokenEthereum...");
  await deployer.deploy(MyTokenEthereum, { gas: 5000000 });
  console.log("MyTokenEthereum deployed successfully!");

  // Deploy EthereumBridge and pass the address of MyTokenEthereum
  await deployer.deploy(EthereumBridge, MyTokenEthereum.address);
};
