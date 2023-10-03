// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./MyTokenEthereum.sol"; // Import the MyTokenEthereum contract

contract EthereumBridge {
    address public owner;
    address public bscBridge;

    event TokensLocked(address indexed sender, uint256 amount);
    event TokensUnlocked(address indexed receiver, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address _bscBridge) {
        owner = msg.sender;
        bscBridge = _bscBridge;
    }

    function lockTokens(uint256 _amount) external {
        IERC20(MyTokenEthereum(bscBridge)).transferFrom(msg.sender, address(this), _amount);
        emit TokensLocked(msg.sender, _amount);
    }

    function setBSCBridge(address _bscBridge) external onlyOwner {
        bscBridge = _bscBridge;
    }
}
