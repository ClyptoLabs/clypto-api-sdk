// chain id
export enum Chain {
  // EVM Chains
  Ethereum = '1',
  Optimism = '10',
  BNBChain = '56',
  Polygon = '137',
  Base = '8453',
  Arbitrum = '42161',
  Avalanche = '43114',
  // UTXOs
  Bitcoin = 'bitcoin',
  BitcoinCash = 'bitcoincash',
  Dogecoin = 'dogecoin',
  Litecoin = 'litecoin',
  // Others
  Solana = 'solana',
  Chainflip = 'chainflip',
  Polkadot = 'polkadot',
  // Cosmos
  Cosmos = 'cosmos',
  THORChain = 'thorchain',
  Maya = 'maya',
}

// get chain name by id
export const chainNameById = {
  // evm chains
  [Chain.Ethereum]: 'Ethereum',
  [Chain.Optimism]: 'Optimism',
  [Chain.BNBChain]: 'BNBChain',
  [Chain.Polygon]: 'Polygon',
  [Chain.Base]: 'Base',
  [Chain.Arbitrum]: 'Arbitrum',
  [Chain.Avalanche]: 'Avalanche',
  // utxos
  [Chain.Bitcoin]: 'Bitcoin',
  [Chain.BitcoinCash]: 'BitcoinCash',
  [Chain.Dogecoin]: 'Dogecoin',
  [Chain.Litecoin]: 'Litecoin',
  // others
  [Chain.Solana]: 'Solana',
  [Chain.Chainflip]: 'Chainflip',
  [Chain.Polkadot]: 'Polkadot',
  // cosmos
  [Chain.Cosmos]: 'Cosmos',
  [Chain.THORChain]: 'THORChain',
  [Chain.Maya]: 'Maya',
};

// get chain id by name
export const ChainByName = {
  // evm chains
  Ethereum: Chain.Ethereum,
  Optimism: Chain.Optimism,
  BNBChain: Chain.BNBChain,
  Polygon: Chain.Polygon,
  Base: Chain.Base,
  Arbitrum: Chain.Arbitrum,
  Avalanche: Chain.Avalanche,
  // utxos
  Bitcoin: Chain.Bitcoin,
  BitcoinCash: Chain.BitcoinCash,
  Dogecoin: Chain.Dogecoin,
  Litecoin: Chain.Litecoin,
  // others
  Solana: Chain.Solana,
  Chainflip: Chain.Chainflip,
  Polkadot: Chain.Polkadot,
  // cosmos
  Cosmos: Chain.Cosmos,
  THORChain: Chain.THORChain,
  Maya: Chain.Maya,
};

export const supportedChains = [
  // evm chains
  Chain.Ethereum,
  Chain.Optimism,
  Chain.BNBChain,
  Chain.Polygon,
  Chain.Base,
  Chain.Arbitrum,
  Chain.Avalanche,
  // utxos
  Chain.Bitcoin,
  Chain.BitcoinCash,
  Chain.Dogecoin,
  Chain.Litecoin,
  // others
  Chain.Solana,
  Chain.Chainflip,
  Chain.Polkadot,
  // cosmos
  Chain.Cosmos,
  Chain.THORChain,
  Chain.Maya,
];

export type UTXOChain = Chain.Bitcoin | Chain.BitcoinCash | Chain.Dogecoin | Chain.Litecoin;

export const UTXOChains = [
  Chain.Bitcoin,
  Chain.BitcoinCash,
  Chain.Dogecoin,
  Chain.Litecoin,
] as const;

export type EVMChain =
  | Chain.Ethereum
  | Chain.Optimism
  | Chain.BNBChain
  | Chain.Polygon
  | Chain.Base
  | Chain.Arbitrum
  | Chain.Avalanche;

export const EVMChains = [
  Chain.Ethereum,
  Chain.Optimism,
  Chain.BNBChain,
  Chain.Polygon,
  Chain.Base,
  Chain.Arbitrum,
  Chain.Avalanche,
] as const;
