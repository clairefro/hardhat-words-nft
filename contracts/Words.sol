pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Words is ERC721 {
    constructor(string memory name, string memory symbol) ERC721(name, symbol) {
        // TODO: console log giving undeclared error
        // console.log("name", name);
        // console.log("symbol", symbol);
        // console.log("msg.sender", msg.sender);
    }
}