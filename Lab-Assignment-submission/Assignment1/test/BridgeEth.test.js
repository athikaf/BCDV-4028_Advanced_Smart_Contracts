const { expect } = require("chai");
const Web3 = require("web3");
const { ethers } = require("hardhat");

const BridgeEth = artifacts.require("BridgeEth");
const TokenEth = artifacts.require("TokenEth");

require("dotenv").config(); // Load environment variables

contract("BridgeEth", (accounts) => {
  let bridgeEth;
  let tokenEth;

  const admin = accounts[0];
  const user = accounts[1];

  const privateKey = process.env.ADMIN_PVT_KEY; // Make sure this is set in your .env file

  beforeEach(async () => {
    tokenEth = await TokenEth.new();
    bridgeEth = await BridgeEth.new(tokenEth.address);
  });

  it("should allow burning tokens", async () => {
    const amount = 100;
    await tokenEth.mint(user, amount);

    const balanceBefore = await tokenEth.balanceOf(user);

    // Initialize web3 here
    const web3 = new Web3(web3.currentProvider); // Assuming you have web3 available

    // Use web3 to sign the transaction
    const tx = await bridgeEth.burn(admin, amount, { from: user });
    const receipt = await web3.eth.getTransactionReceipt(tx.tx);

    const balanceAfter = await tokenEth.balanceOf(user);

    expect(balanceAfter.toNumber()).to.equal(balanceBefore.toNumber() - amount);
  });

  it("should emit Transfer event when burning tokens", async () => {
    const amount = 100;

    // Sign the transaction using ethers and the admin's private key
    const { chainId } = await ethers.provider.getNetwork();
    const adminSigner = new ethers.Wallet(privateKey, ethers.provider);
    const bridgeEthWithSigner = new ethers.Contract(
      bridgeEth.address,
      BridgeEth.abi,
      adminSigner
    );

    const result = await bridgeEthWithSigner.burn(admin, amount, {
      from: user,
    });

    expect(result.logs.length).to.equal(1);
    const log = result.logs[0];
    expect(log.event).to.equal("Transfer");
    expect(log.args.from).to.equal(user);
    expect(log.args.to).to.equal(admin);
    expect(log.args.amount.toNumber()).to.equal(amount);
    expect(log.args.step).to.equal(0); // 0 corresponds to Step.Burn
  });

  it("should emit Transfer event when minting tokens", async () => {
    const amount = 100;

    // Sign the transaction using ethers and the admin's private key
    const { chainId } = await ethers.provider.getNetwork();
    const adminSigner = new ethers.Wallet(privateKey, ethers.provider);
    const bridgeEthWithSigner = new ethers.Contract(
      bridgeEth.address,
      BridgeEth.abi,
      adminSigner
    );

    const result = await bridgeEthWithSigner.mint(user, amount, 1, {
      from: admin,
    });

    expect(result.logs.length).to.equal(1);
    const log = result.logs[0];
    expect(log.event).to.equal("Transfer");
    expect(log.args.from).to.equal(admin);
    expect(log.args.to).to.equal(user);
    expect(log.args.amount.toNumber()).to.equal(amount);
    expect(log.args.step).to.equal(1); // 1 corresponds to Step.Mint
  });
});
