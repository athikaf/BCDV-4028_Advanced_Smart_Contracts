// LendingContract.test.js
const LendingContract = artifacts.require("LendingContract");
const truffleAssert = require("truffle-assertions");

contract("LendingContract", (accounts) => {
  let lendingContract;

  beforeEach(async () => {
    lendingContract = await LendingContract.new();
  });

  it("should allow users to deposit assets", async () => {
    const depositAmount = 100;
    await lendingContract.deposit(depositAmount, { from: accounts[0] });

    const balance = await lendingContract.balances(accounts[0]);
    assert.equal(
      balance,
      depositAmount,
      "Incorrect user balance after deposit"
    );
  });

  it("should allow users to borrow assets with sufficient liquidity", async () => {
    const depositAmount = 200;
    const borrowAmount = 100;

    await lendingContract.deposit(depositAmount, { from: accounts[0] });
    await lendingContract.borrow(borrowAmount, { from: accounts[0] });

    const userBalance = await lendingContract.balances(accounts[0]);
    const contractLiquidity = await lendingContract.liquidity();

    assert.equal(
      userBalance,
      depositAmount + borrowAmount,
      "Incorrect user balance after borrow"
    );
    assert.equal(
      contractLiquidity,
      depositAmount - borrowAmount,
      "Incorrect contract liquidity after borrow"
    );
  });

  it("should revert when users attempt to borrow more than available liquidity", async () => {
    const depositAmount = 50;
    const borrowAmount = 100;

    await lendingContract.deposit(depositAmount, { from: accounts[0] });

    await truffleAssert.reverts(
      lendingContract.borrow(borrowAmount, { from: accounts[0] }),
      "revert Insufficient liquidity"
    );
  });
});
