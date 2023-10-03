// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyTokenEthereum is ERC20 {
    // Use constructor arguments to initialize the token details
    constructor(string memory name_, string memory symbol_) ERC20(name_, symbol_) {
        // Mint initial supply to the contract deployer
        _mint(msg.sender, 1000000 * 10**decimals());
    }
}
