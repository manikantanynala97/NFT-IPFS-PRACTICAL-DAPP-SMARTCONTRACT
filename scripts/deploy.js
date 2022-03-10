const {ethers} = require("hardhat");
require("dotenv").config({path:".env"});

 async function main()
 {
   // URL for the metadata we can extract the metadata from LW3Punks
   const metadataURL = "ipfs://QmUmoPvsxSjySMkZTQdUHJdkrEKZzXfMhMCGBFGzcdvdhB"

   const lw3PunksContract = await ethers.getContractFactory("LW3Punks");
   const deployedLW3PunksContract = await lw3PunksContract.deploy(metadataURL);
   await deployedLW3PunksContract.deployed();

   console.log("Contract address is",deployedLW3PunksContract.address);
 }



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => process.exit(0)).catch((error) => { console.error(error);process.exit(1);});
  

