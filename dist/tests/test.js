"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("SDK Tests", () => {
    const wallet = "8N5BUm5v8WQtQgqbXyJdhqN1VLQ3PgRNygwgU469Tx27";
    const stakepool = "BZRRY1uE24YMd5gwUbtFUR7qyLrpiTeGztsXWHygkgHu";
    const sdk = new src_1.StakingCapitalAPI();
    it("fetchNFTs works", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield sdk.fetchNFTs({
            owner: wallet,
            stakepool: stakepool,
        });
        expect(result.staked).toStrictEqual([]);
        expect(result.unstaked).toStrictEqual([]);
    }));
    it("fetchNFTs fails with invalid addresses", () => __awaiter(void 0, void 0, void 0, function* () {
        yield sdk.fetchNFTs({
            owner: "invalid",
            stakepool: "invalid",
        }).catch((e) => {
            expect(e).toBeDefined();
        });
    }));
});
