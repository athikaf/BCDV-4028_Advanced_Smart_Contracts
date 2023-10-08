const BridgeBsc = artifacts.require("BridgeBsc");
const TokenBase = artifacts.require("TokenBase");
require("dotenv").config();
contract("BridgeBsc", (accounts) => {
  let bridgeBsc;
  let token;

  before(async () => {
    token = await TokenBase.new("BSC Token", "BTK");
    bridgeBsc = await BridgeBsc.new(token.address);
  });

  it("should allow burning tokens", async () => {
    const recipient = accounts[1];
    const amount = 100;

    // Mint some tokens to the deployer account
    await token.mint(accounts[0], amount);

    // Approve the BridgeBsc contract to spend tokens on behalf of the deployer
    await token.approve(bridgeBsc.address, amount, { from: accounts[0] });

    // Deployer burns tokens using the bridge
    await bridgeBsc.burn(recipient, amount, { from: accounts[0] });

    // Add assertions here to check the state of your contracts after the transaction
  });

  it("should allow minting tokens by admin", async () => {
    const recipient = accounts[2];
    const amount = 100;

    // Mint tokens on the other chain
    await token.mint(recipient, amount);

    // Admin mints tokens on BSC chain using the bridge
    const otherChainNonce = 1;
    await bridgeBsc.mint(recipient, amount, otherChainNonce, {
      from: process.env.ADMIN_PVT_KEY,
    });

    // Add assertions here to check the state of your contracts after the transaction
  });
});
