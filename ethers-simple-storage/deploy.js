const { ethers } = require("ethers");
const fs = require("fs-extra");
//const { Z_BINARY } = require("zlib");

async function main() {
  //http://127.0.0.1:7545
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");
  const wallet = new ethers.Wallet(
    "0xed6d6737151f2411ae389a7edb3810acbd14636c8280d38da9e39f281305b036",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const bin = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
  const contractFactory = new ethers.ContractFactory(abi, bin, wallet);
  console.log("Deploying, please wait...");
  const contact = await contractFactory.deploy();
  console.log(contact);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
