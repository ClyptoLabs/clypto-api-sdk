import { ApiRequest } from './utils/apiRequest';
import { Chain } from './utils/chain';
import {
  QuoteRequestParams,
  GetQuoteResponse,
  SwapRequestParams,
  GetSwapResponse,
  GetTokenParam,
  Provider,
} from './types';
import { TokenList } from './utils/token';

const BASE_URL = 'https://api.clypto.com/v1';

export class ClyptoApi {
  private api: ApiRequest;
  constructor(apiKey: string, url?: string) {
    this.api = new ApiRequest(url || BASE_URL, {
      'x-api-key': apiKey,
    });
  }

  getParamUrl = (paramObj: Record<string, string | number | boolean | undefined | null>) => {
    const cleanObj: Record<string, string | number | boolean> = {};
    Object.entries(paramObj).map(([key, val]) => {
      if (val || val === '') cleanObj[key] = val;
    });

    const params = Object.fromEntries(
      Object.entries(cleanObj).map(([key, value]) => [key, String(value)]),
    );
    const url = new URLSearchParams(params).toString();
    return url ? `?${url}` : '';
  };

  async getProviders(): Promise<Provider[]> {
    return await this.api.get<Provider[]>('/providers');
  }

  async getChains(): Promise<Chain[]> {
    return await this.api.get<Chain[]>('/chains');
  }

  async getTokens(params: GetTokenParam): Promise<TokenList> {
    return await this.api.get<TokenList>(`/tokens${this.getParamUrl(params)}`);
  }

  async getQuote(params: QuoteRequestParams): Promise<GetQuoteResponse> {
    return await this.api.get<GetQuoteResponse>(`/quote${this.getParamUrl(params)}`);
  }

  async getSwap(params: SwapRequestParams): Promise<GetSwapResponse> {
    return await this.api.get<GetSwapResponse>(`/swap${this.getParamUrl(params)}`);
  }
}
