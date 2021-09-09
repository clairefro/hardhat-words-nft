const CONTRACT_FACTORY_NAME = "Words";

async function main() {
  const Words = await hre.ethers.getContractFactory(CONTRACT_FACTORY_NAME);
  const words = await Words.deploy("Words", "WORDZ");

  await words.deployed();

  console.log(`${CONTRACT_FACTORY_NAME} deployed to: `, words.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
