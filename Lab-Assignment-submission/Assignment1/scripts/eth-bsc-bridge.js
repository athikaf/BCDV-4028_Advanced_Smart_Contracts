const Web3 = require("web3");
const BridgeEth = require("../build/contracts/BridgeEth.json");
const BridgeBsc = require("../build/contracts/BridgeBsc.json");
const dotenv = require("dotenv");
dotenv.config();

const web3Eth = new Web3("HTTP://127.0.0.1:7545");
const web3Bsc = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");
const adminPrivKey = process.env.ADMIN_PVT_KEY;
const { address: admin } = web3Bsc.eth.accounts.wallet.add(adminPrivKey);

const bridgeEth = new web3Eth.eth.Contract(
  BridgeEth.abi,
  BridgeEth.networks["4"].address
);

const bridgeBsc = new web3Bsc.eth.Contract(
  BridgeBsc.abi,
  BridgeBsc.networks["97"].address
);

bridgeEth.events
  .Transfer({ fromBlock: 0, step: 0 })
  .on("data", async (event) => {
    const { from, to, amount, date, nonce } = event.returnValues;

    const tx = bridgeBsc.methods.mint(to, amount, nonce);
    const [gasPrice, gasCost] = await Promise.all([
      web3Bsc.eth.getGasPrice(),
      tx.estimateGas({ from: admin }),
    ]);
    const data = tx.encodeABI();
    const txData = {
      from: admin,
      to: bridgeBsc.options.address,
      data,
      gas: gasCost,
      gasPrice,
    };
    const receipt = await web3Bsc.eth.sendTransaction(txData);
    console.log(`Transaction hash: ${receipt.transactionHash}`);
    console.log(`
    Processed transfer:
    - from ${from} 
    - to ${to} 
    - amount ${amount} tokens
    - date ${date}
  `);
  });
