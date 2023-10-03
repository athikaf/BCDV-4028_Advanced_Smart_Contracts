// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./MyTokenBSC.sol";

contract BSCBridge {
    address public owner;
    address public ethereumBridge;

    event TokensLocked(address indexed sender, uint256 amount);
    event TokensUnlocked(address indexed receiver, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address _ethereumBridge) {
        owner = msg.sender;
        ethereumBridge = _ethereumBridge;
    }

    function lockTokens(uint256 _amount) external {
        IERC20(MyTokenBSC(address(ethereumBridge))).transferFrom(msg.sender, address(this), _amount);
        emit TokensLocked(msg.sender, _amount);
    }

    function setEthereumBridge(address _ethereumBridge) external onlyOwner {
        ethereumBridge = _ethereumBridge;
    }
}
