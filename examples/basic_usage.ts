import { StakingCapitalAPI } from "../src";

const sdk = new StakingCapitalAPI()

const main = async () => {
    const nfts = await sdk.fetchNFTs({
        owner: "INSERT_STAKER_WALLET_ADDRESS_HERE",
        stakepool: "INSERT_STAKEPOOL_ADDRESS_HERE",
    })
    console.log("Staked NFTs", nfts.staked);
    console.log("Unstaked NFTs", nfts.unstaked);
};

main();