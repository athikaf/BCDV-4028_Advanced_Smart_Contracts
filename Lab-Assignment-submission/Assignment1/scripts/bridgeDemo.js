const ethers = require("ethers");

async function main() {
  const [account] = await ethers.getSigners();

  // Connect to Ethereum Bridge
  const EthereumBridge = await ethers.getContractFactory("EthereumBridge");
  const ethereumBridge = await EthereumBridge.attach(
    "ETH_BRIDGE_CONTRACT_ADDRESS"
  );

  // Connect to BSC Bridge
  const BSCBridge = await ethers.getContractFactory("BSCBridge");
  const bscBridge = await BSCBridge.attach("BSC_BRIDGE_CONTRACT_ADDRESS");

  // Connect to ERC20 Tokens
  const MyTokenEthereum = await ethers.getContractFactory("MyTokenEthereum");
  const myTokenEthereum = await MyTokenEthereum.attach(
    "ETH_TOKEN_CONTRACT_ADDRESS"
  );

  const MyTokenBSC = await ethers.getContractFactory("MyTokenBSC");
  const myTokenBSC = await MyTokenBSC.attach("BSC_TOKEN_CONTRACT_ADDRESS");

  // Deposit tokens from Ethereum to BSC
  const depositAmount = 50;
  await myTokenEthereum.approve(ethereumBridge.address, depositAmount);
  await ethereumBridge.deposit(depositAmount);

  // Wait for the transaction to be mined

  // Withdraw tokens from BSC to Ethereum
  await bscBridge.withdraw(account.address, depositAmount);

  // Check balances
  const balanceEthereum = await myTokenEthereum.balanceOf(account.address);
  const balanceBSC = await myTokenBSC.balanceOf(account.address);

  console.log("Balance on Ethereum:", balanceEthereum.toString());
  console.log("Balance on BSC:", balanceBSC.toString());
}

main();
