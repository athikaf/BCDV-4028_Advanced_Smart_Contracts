// BridgeBsc.test.js
const BridgeBsc = artifacts.require("BridgeBsc");
const TokenBsc = artifacts.require("TokenBsc");
const { expectRevert } = require("@openzeppelin/test-helpers");

contract("BridgeBsc", (accounts) => {
  let bridgeInstance;
  let tokenInstance;

  const admin = accounts[0];
  const user = accounts[1];

  beforeEach(async () => {
    // Deploy TokenBsc
    tokenInstance = await TokenBsc.new();

    // Deploy BridgeBsc with the deployed TokenBsc address
    bridgeInstance = await BridgeBsc.new(tokenInstance.address);

    // Mint some tokens to the admin for testing
    await tokenInstance.mint(admin, web3.utils.toWei("1000", "ether"));
  });

  it("should allow burning tokens", async () => {
    const initialBalance = await tokenInstance.balanceOf(user);

    // Approve the BridgeBsc to spend tokens on behalf of the user
    await tokenInstance.approve(
      bridgeInstance.address,
      web3.utils.toWei("10", "ether"),
      { from: user }
    );

    // Burn tokens through the bridge
    await bridgeInstance.burn(user, web3.utils.toWei("10", "ether"), {
      from: user,
    });

    const finalBalance = await tokenInstance.balanceOf(user);

    assert.equal(
      finalBalance.toString(),
      initialBalance.sub(web3.utils.toWei("10", "ether")).toString(),
      "Invalid final balance"
    );
  });

  it("should allow minting tokens by admin", async () => {
    const initialBalance = await tokenInstance.balanceOf(user);

    // Mint tokens through the bridge (admin only)
    await bridgeInstance.mint(user, web3.utils.toWei("10", "ether"), 1, {
      from: admin,
    });

    const finalBalance = await tokenInstance.balanceOf(user);

    assert.equal(
      finalBalance.toString(),
      initialBalance.add(web3.utils.toWei("10", "ether")).toString(),
      "Invalid final balance"
    );
  });

  it("should not allow minting tokens by non-admin", async () => {
    // Attempt to mint tokens through the bridge by a non-admin
    await expectRevert(
      bridgeInstance.mint(user, web3.utils.toWei("10", "ether"), 1, {
        from: user,
      }),
      "only admin"
    );
  });

  it("should not allow minting tokens by another admin", async () => {
    const anotherAdmin = accounts[2];

    // Attempt to mint tokens through the bridge by another admin
    await expectRevert(
      bridgeInstance.mint(user, web3.utils.toWei("10", "ether"), 1, {
        from: anotherAdmin,
      }),
      "only admin"
    );
  });
});
