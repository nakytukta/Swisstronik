const hre = require("hardhat");

async function main() {
<<<<<<< HEAD
  const contract = await hre.ethers.deployContract("TestToken");

  await contract.waitForDeployment();

  console.log(`deployed to ${contract.target}`);
}

=======

  const contract = await hre.ethers.deployContract("Swisstronik", ["Hello Swisstronik!!"]);

  await contract.waitForDeployment();

  console.log(`Swisstronik contract deployed to ${contract.target}`);
}
>>>>>>> cb996f636e4d337380a51e66ad1891462fcf1935
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
