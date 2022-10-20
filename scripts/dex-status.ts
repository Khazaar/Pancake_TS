import { ethers } from "hardhat";
import { PancakeERC20__factory, PancakeFactory__factory, PancakePair__factory, PancakePair, ERC20Apple__factory, ERC20Potato__factory, ERC20LSR__factory } from "../typechain-types"
import { ContractAddress } from "./local-chain-data"
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { deployPankaceFixture } from "./deploy-fixture";

async function main() {

    const [owner, user1, user2, user3, user4] = await ethers.getSigners();
    const users = [owner, user1, user2, user3, user4];
    const contractApple = await new ERC20Apple__factory(owner).attach(ContractAddress.ERC20Apple);
    const contractPotato = await new ERC20Potato__factory(owner).attach(ContractAddress.ERC20Potato);
    const contractLSRERC20 = await new ERC20LSR__factory(owner).attach(ContractAddress.ERC20LSR);
    const pancakeERC20 = await new PancakeERC20__factory(owner).attach(ContractAddress.PancakePair);
    const pancakeFactory = await new PancakeFactory__factory(owner).attach(ContractAddress.PancakeFactory);


    let i = 0;
    console.log(`Balances:`);
    console.log(`User\tAPL\tPPT\tLSR\tPancakeERC20`);

    for (const usr of users) {
        console.log(`${i} \t${await contractApple.balanceOf(usr.address)}\t${await contractPotato.balanceOf(usr.address)}\t${await contractLSRERC20.balanceOf(usr.address)}\t${await contractPancakeERC20.balanceOf(usr.address)}`);
        i++;
    }

    console.log(`Pairs:`);
    const nPairs = await pancakeFactory.allPairsLength();

    console.log(`Factory contains ${nPairs.toString()} pair(s)`);


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
