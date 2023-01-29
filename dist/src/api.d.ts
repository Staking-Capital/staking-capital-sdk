import { FetchNFTsParams, FetchNFTsResponse } from "./index";
export declare class StakingCapitalAPI {
    constructor();
    private baseUrl;
    fetchNFTs: ({ owner, stakepool }: FetchNFTsParams) => Promise<FetchNFTsResponse>;
}
