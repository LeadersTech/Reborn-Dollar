pragma solidity ^0.5.2;

import "./ERC1132/ERC1132.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";

contract RebornDollar is ERC1132, ERC20Detailed, ERC20Mintable, ERC20Burnable {
  string public constant NAME = "Reborn Dollar";
  string public constant SYMBOL = "REBD";
  uint8 public constant DECIMALS = 18;

  uint256 public constant INITIAL_SUPPLY = 10000000000 * (10 ** uint256(DECIMALS));

  constructor()
    ERC20Burnable()
    ERC20Mintable()
    ERC20Detailed(NAME, SYMBOL, DECIMALS)
    ERC20()
    public
  {
    _mint(msg.sender, INITIAL_SUPPLY);
  }
}