// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "../node_modules/@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract BSCBridge {
    address public owner;
    IERC20 public token;

    event TokensDeposited(address indexed from, uint256 amount);
    event TokensWithdrawn(address indexed to, uint256 amount);

    constructor(address _token) {
        owner = msg.sender;
        token = IERC20(_token);
    }

    function deposit(uint256 _amount) external {
        require(token.transferFrom(msg.sender, address(this), _amount), "Transfer failed");
        emit TokensDeposited(msg.sender, _amount);
    }

    function withdraw(address _to, uint256 _amount) external {
        require(msg.sender == owner, "Not the owner");
        require(token.transfer(_to, _amount), "Transfer failed");
        emit TokensWithdrawn(_to, _amount);
    }
}
