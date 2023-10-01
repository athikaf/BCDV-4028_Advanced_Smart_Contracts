// LendingContract.sol
pragma solidity ^0.8.0;

contract LendingContract {
    event Deposit(address indexed account, uint256 amount);
    event Borrow(address indexed account, uint256 amount);

    mapping(address => uint256) public balances;
    uint256 public liquidity;

    function deposit(uint256 amount) external {
        balances[msg.sender] += amount;
        liquidity += amount;
        emit Deposit(msg.sender, amount);
    }

    function borrow(uint256 amount) external {
        require(amount <= liquidity, "Insufficient liquidity");
        balances[msg.sender] += amount;
        liquidity -= amount;
        emit Borrow(msg.sender, amount);
    }
}
