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
    const result = await lendingContract.deposit(depositAmount, {
      from: accounts[0],
    });

    truffleAssert.eventEmitted(result, "Deposit", (ev) => {
      return (
        ev.account === accounts[0] && ev.amount.toNumber() === depositAmount
      );
    });
  });

  it("should allow users to borrow assets with sufficient liquidity", async () => {
    const depositAmount = 200;
    const borrowAmount = 100;

    await lendingContract.deposit(depositAmount, { from: accounts[0] });
    const result = await lendingContract.borrow(borrowAmount, {
      from: accounts[0],
    });

    truffleAssert.eventEmitted(result, "Borrow", (ev) => {
      return (
        ev.account === accounts[0] && ev.amount.toNumber() === borrowAmount
      );
    });
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

  // ...

  it("should handle simulation of borrowing more than available liquidity", async () => {
    const depositAmount = 50;
    const borrowAmount = 100;

    await lendingContract.deposit(depositAmount, { from: accounts[0] });

    // Attempt to borrow more than available liquidity
    await truffleAssert.reverts(
      lendingContract.borrow(borrowAmount, { from: accounts[0] }),
      "revert Insufficient liquidity"
    );

    // Ensure 'Borrow' event was not emitted
    const result = await lendingContract.getPastEvents("Borrow");
    assert.equal(result.length, 0, "Borrow event should not be emitted");
  });
});
