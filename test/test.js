const { expect } = require("chai");
const { ethers } = require("hardhat");

const CONTRACT_FACTORY_NAME = "Words";

describe("Words", function () {
  it("Should return the right name and symbol", async function () {
    const NAME = "Words";
    const SYMBOL = "WORDZ";

    const Words = await ethers.getContractFactory(CONTRACT_FACTORY_NAME);
    const myWords = await Words.deploy(NAME, SYMBOL);

    await myWords.deployed();
    expect(await myWords.name()).to.equal(NAME);
    expect(await myWords.symbol()).to.equal(SYMBOL);
  });
});
