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

// get thorchain supported chain name by id
export const tcSupportedChainById = {
  // evm chains
  [Chain.Ethereum]: 'ETH',
  [Chain.BNBChain]: 'BSC',
  [Chain.Base]: 'BASE',
  [Chain.Avalanche]: 'AVAX',
  // utxos
  [Chain.Bitcoin]: 'BTC',
  [Chain.BitcoinCash]: 'BCH',
  [Chain.Dogecoin]: 'DOGE',
  [Chain.Litecoin]: 'LTC',
  // others
  [Chain.Solana]: 'SOL',
  // cosmos
  [Chain.Cosmos]: 'GAIA',
  [Chain.THORChain]: 'THOR',
  [Chain.Maya]: 'MAYA',
};

export type TCSupportedChain =
  | Chain.THORChain
  | Chain.Bitcoin
  | Chain.Litecoin
  | Chain.Dogecoin
  | Chain.BitcoinCash
  | Chain.Cosmos
  | Chain.Ethereum
  | Chain.Avalanche
  | Chain.BNBChain
  | Chain.Base;

export type COSMOSChain = Chain.Cosmos | Chain.THORChain | Chain.Maya;
export const CosmosChains = [Chain.Cosmos, Chain.THORChain, Chain.Maya] as const;

export const blockTimes = {
  [Chain.Arbitrum]: 1,
  [Chain.Avalanche]: 3,
  [Chain.Base]: 1,
  [Chain.BNBChain]: 3,
  [Chain.Bitcoin]: 600,
  [Chain.BitcoinCash]: 600,
  [Chain.Chainflip]: 5,
  [Chain.Cosmos]: 1.5,
  [Chain.Dogecoin]: 600,
  [Chain.Ethereum]: 12.5,
  [Chain.Litecoin]: 150,
  [Chain.Maya]: 6,
  [Chain.Optimism]: 1,
  [Chain.Polkadot]: 6,
  [Chain.Polygon]: 2.1,
  [Chain.Solana]: 1,
  [Chain.THORChain]: 6,
};

export const isEVMChain = (chain: Chain) => {
  if (EVMChains.find((val) => val === chain)) return true;
  return false;
};
