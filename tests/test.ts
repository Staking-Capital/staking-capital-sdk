import { StakingCapitalAPI, StakingCapitalAPIError } from "../src";

describe("SDK Tests", () => {

    const wallet = "8N5BUm5v8WQtQgqbXyJdhqN1VLQ3PgRNygwgU469Tx27"
    const stakepool = "BZRRY1uE24YMd5gwUbtFUR7qyLrpiTeGztsXWHygkgHu"

    const sdk = new StakingCapitalAPI()

    it("fetchNFTs works", async () => {
        const result = await sdk.fetchNFTs({
            owner: wallet,
            stakepool: stakepool,
        });
        expect(result.staked).toStrictEqual([])
        expect(result.unstaked).toStrictEqual([])
    })

    it("fetchNFTs fails with invalid addresses", async () => {
        await sdk.fetchNFTs({
            owner: "invalid",
            stakepool: "invalid",
        }).catch((e) => {
            expect(e).toBeDefined()
        });
    })
})