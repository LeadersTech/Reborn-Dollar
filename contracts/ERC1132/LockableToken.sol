pragma solidity ^0.5.2;

import "./ERC1132.sol";

contract LockableToken is ERC1132 {
  /**
   * @dev constructor to mint initial tokens
   */
  constructor(uint256 _supply) public {
    _mint(msg.sender, _supply);
  }
}