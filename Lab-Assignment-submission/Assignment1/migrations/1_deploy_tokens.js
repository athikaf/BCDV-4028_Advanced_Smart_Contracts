const MyTokenEthereum = artifacts.require("MyTokenEthereum");
const MyTokenBSC = artifacts.require("MyTokenBSC");

module.exports = async function (deployer, network) {
  if (network === "development") {
    await deployer.deploy(MyTokenEthereum);
  } else if (network === "bscTestnet") {
    await deployer.deploy(MyTokenBSC);
  }
  //   const myTokenEthereum = await MyTokenEthereum.deployed();

  //   const myTokenBSC = await MyTokenBSC.deployed();
};
