import { ApiRequest } from 'utils/apiRequest';
import { Chain } from 'utils/chain';
import {
  GetQuoteParams,
  GetQuoteResponse,
  GetSwapParams,
  GetSwapResponse,
  GetTokenParam,
  Provider,
} from './types';
import { TokenList } from 'utils/token';

const BASE_URL = 'http://localhost:5000/v1';

export class ClyptoApi {
  private api: ApiRequest;
  constructor(apiKey: string, url?: string) {
    this.api = new ApiRequest(url || BASE_URL, {
      'x-api-key': apiKey,
    });
  }

  getParamUrl(paramObj: Record<string, string | number | boolean>) {
    const url = this.api.getParamUrl(paramObj);
    return url ? `?${url}` : '';
  }

  async getProviders(): Promise<Provider[]> {
    return await this.api.get<Provider[]>('/providers');
  }

  async getChains(): Promise<Chain[]> {
    return await this.api.get<Chain[]>('/chains');
  }

  async getTokens(params: GetTokenParam): Promise<TokenList> {
    return await this.api.get<TokenList>(`/tokens${this.getParamUrl(params)}`);
  }

  async getQuote(params: GetQuoteParams): Promise<GetQuoteResponse> {
    return await this.api.get<GetQuoteResponse>(`/quote${this.getParamUrl(params)}`);
  }

  async getSwap(params: GetSwapParams): Promise<GetSwapResponse> {
    return await this.api.get<GetSwapResponse>(`/swap${this.getParamUrl(params)}`);
  }
}
