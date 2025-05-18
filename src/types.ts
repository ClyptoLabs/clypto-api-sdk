import { TokenData } from './utils/token';

export type Provider = {
  provider: string;
  logoURI: string;
};

export type GetTokenParam = {
  chain?: string;
  provider?: string;
};

export type QuoteRequestParams = {
  srcChain: string;
  srcToken: string;
  destChain: string;
  destToken: string;
  amount: string;
  slippageBps?: number;
  referrer?: string;
  referralFeeBps?: number;
  provider?: string;
  excludeProvider?: string;
};

export type SwapRequestParams = {
  srcChain: string;
  srcToken: string;
  destChain: string;
  destToken: string;
  amount: string;
  srcAddress: string;
  destAddress: string;
  slippageBps?: number;
  referrer?: string;
  referralFeeBps?: number;
  provider?: string;
  excludeProvider?: string;
};

export type SolTxParam = {
  data: string;
  gasRate?: string;
};

export type EvmTxParam = {
  from: string;
  to: string;
  data: string;
  value: string;
  gasPrice: string;
  gasLimit?: string;
};

export type DefaultTxParam = {
  from: string;
  to: string;
  data: string;
  value: string;
  gasRate?: string;
};

export type TxParam = EvmTxParam | SolTxParam | DefaultTxParam;

export type ProviderMeta = {
  providerLogoURI: string;
  explorerUrl: string;
  notes?: string;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  extra?: any;
};

export type TokenMeta = {
  srcToken: TokenData;
  destToken: TokenData;
};

type ArrayToMap<T extends readonly string[]> = {
  [K in T[number]]: K;
};

const arrayToMap = <const T extends readonly string[]>(array: T): ArrayToMap<T> =>
  Object.fromEntries(array.map((key) => [key, key])) as ArrayToMap<T>;

export const RouteTags = arrayToMap(['Fastest', 'Best']);
export type RouteTag = (typeof RouteTags)[keyof typeof RouteTags];

export type QuoteRouteData = {
  provider: string;
  destAmount: string;
  minDestAmount?: string;
  eta: number;
  meta: ProviderMeta;
  tags: RouteTag[];
};

export type GetQuoteResponse = {
  srcChain: string;
  srcToken: string;
  destChain: string;
  destToken: string;
  srcAmount: string;
  tokenMeta: TokenMeta;
  slippageBps?: number;
  referrer?: string;
  referralFeeBps?: number;
  provider?: string[];
  excludeProvider?: string[];
  bestRoute: QuoteRouteData;
  routes: QuoteRouteData[];
};

export type SwapRouteData = {
  provider: string;
  destAmount: string;
  minDestAmount?: string;
  eta: number;
  tx: TxParam;
  meta: ProviderMeta;
  tags: RouteTag[];
};

export type GetSwapResponse = {
  srcChain: string;
  srcToken: string;
  destChain: string;
  destToken: string;
  slippageBps: number;
  srcAmount: string;
  srcAddress: string;
  destAddress: string;
  referrer?: string;
  referralFeeBps?: number;
  provider?: string[];
  excludeProvider?: string[];
  tokenMeta: TokenMeta;
  bestRoute: SwapRouteData;
  routes: SwapRouteData[];
};
