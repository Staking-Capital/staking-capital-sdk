import axios from "axios";
import { StakingCapitalAPIError, FetchNFTsParams, FetchNFTsResponse } from "./index";

export class StakingCapitalAPI {
    constructor() { }

    private baseUrl = "https://api.stakingcapital.io";

    public fetchNFTs = async (
        { owner, stakepool }: FetchNFTsParams
    ): Promise<FetchNFTsResponse> => {
        const response = await axios.get(
            `${this.baseUrl}/staking/fetch-nfts?owner=${owner}&stakepool=${stakepool}`
        ).catch((e) => {
            throw StakingCapitalAPIError.fromResponse(e.response)
        });
        return response.data;
    }
}