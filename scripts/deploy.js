async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Megalis = await ethers.getContractFactory("megalisV1");

    const megalisContract = await Megalis.deploy();
    console.log("Contract address:", megalisContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });