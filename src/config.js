const nftMintContract = {
  mainnet: 'nft_minting.chaitunear.testnet',
  testnet: 'nft_minting.chaitunear.testnet',
};
const marketplaceContract = {
  mainnet: 'marketplace.chaitunear.testnet',
  testnet: 'marketplace.chaitunear.testnet',
};

export const NetworkId = 'testnet';
export const MintContract = nftMintContract[NetworkId];
export const MarketplaceContract = marketplaceContract[NetworkId];