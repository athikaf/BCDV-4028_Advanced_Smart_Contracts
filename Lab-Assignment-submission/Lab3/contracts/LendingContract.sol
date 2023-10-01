// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LendingContract {
    mapping(address => uint256) public balances;
    uint256 public liquidity;

    function deposit(uint256 amount) external {
        balances[msg.sender] += amount;
        liquidity += amount;
    }

    function borrow(uint256 amount) external {
        require(amount <= liquidity, "Insufficient liquidity");
        balances[msg.sender] += amount;
        liquidity -= amount;
    }
}
