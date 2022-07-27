const { task } = require("hardhat/config");

task("block-number", "Prints current block number").setAction(
    //const blockTask = async function() => {}
    // async function blockTask() {}
    async (taskArgs, hre) => {
        // hre has an access to the hardhat scope
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Current block number: ${blockNumber}`);

    }
);
