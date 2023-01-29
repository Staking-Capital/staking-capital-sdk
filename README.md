# Getting Started

## Note

This SDK currently only consists of a single function, `fetchNFTs`, which returns a list of NFTs staked/unstaked by a given wallet address for a specific stakepool. If you need further functionality or help, please reach out to us on [Twitter](https://twitter.com/StakingCapital_).

## Installation

```
npm install @stakingcapital/sdk
```

## Basic Usage

```typescript
import { StakingCapitalAPI } from '@stakingcapital/sdk';

const sdk = new StakingCapitalAPI();

const nfts = await sdk.fetchNFTs({
  owner: 'INSERT_STAKER_WALLET_ADDRESS_HERE',
  stakepool: 'INSERT_STAKEPOOL_ADDRESS_HERE',
});

console.log('Staked NFTs', nfts.staked);
console.log('Unstaked NFTs', nfts.unstaked);
```
