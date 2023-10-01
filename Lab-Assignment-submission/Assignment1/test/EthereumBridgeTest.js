const EthereumBridge = artifacts.require("EthereumBridge");
const MyTokenEthereum = artifacts.require("MyTokenEthereum");

contract("EthereumBridge", (accounts) => {
  it("should deposit and withdraw tokens", async () => {
    const bridge = await EthereumBridge.deployed();
    const token = await MyTokenEthereum.deployed();

    const depositAmount = 100;
    await token.approve(bridge.address, depositAmount, { from: accounts[0] });
    await bridge.deposit(depositAmount, { from: accounts[0] });

    const balanceBefore = await token.balanceOf(accounts[1]);
    await bridge.withdraw(accounts[1], depositAmount, { from: accounts[0] });
    const balanceAfter = await token.balanceOf(accounts[1]);

    assert.equal(
      balanceAfter - balanceBefore,
      depositAmount,
      "Incorrect withdrawal amount"
    );
  });
});
