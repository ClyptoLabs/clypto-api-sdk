export type TokenListVersion = {
  major: number;
  minor: number;
  patch: number;
};

export type TokenData = {
  chainId: string;
  address: string;
  decimals: number;
  symbol: string;
  name: string;
  logoURI: string;
  coingeckoId: string;
};

export type TokenList = {
  name: string;
  timestamp: string;
  version: TokenListVersion;
  counts: number;
  tokens: TokenData[];
};
