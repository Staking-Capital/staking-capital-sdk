export type FetchNFTsParams = {
    owner: string;
    stakepool: string;
};
export type FetchNFTsResponse = {
    staked: Array<NFT>;
    unstaked: Array<NFT>;
};
export type NFT = {
    name: string;
    imageUrl: string;
    staked: boolean;
    tokenAccount: string;
    tokenAddress: string;
};
