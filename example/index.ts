import 'dotenv/config';
import { ClyptoApi, QuoteRequestParams, SwapRequestParams } from '../dist';

const apiKey = process.env.API_KEY as string;
const api = new ClyptoApi(apiKey);

const getInfo = async () => {
  const chains = await api.getChains();
  const providers = await api.getProviders();
  const tokens = await api.getTokens({ provider: 'thorchain' });
  console.log(chains);
  console.log(providers);
  console.log(tokens);
};

const getQuote = async () => {
  const quoteParams: QuoteRequestParams = {
    srcChain: 'bitcoin',
    srcToken: '', // pass empty string for native assets like bitcoin, ethereum
    destChain: '1', // ethereum
    destToken: '',
    amount: '100000000', // 1btc
    slippageBps: 150,
    referrer: 'thorname',
    referralFeeBps: 25, // 0.25%
    // provider: 'thorchain,maya,chainflip',
  };

  const quoteResponse = await api.getQuote(quoteParams);
  console.log(quoteResponse);
};

const getSwap = async () => {
  const swapParams: SwapRequestParams = {
    srcChain: 'bitcoin',
    srcToken: '', // pass empty string for native assets like bitcoin, ethereum
    destChain: '1', // ethereum
    destToken: '',
    srcAddress: 'bc...', // btc wallet address
    destAddress: '0x...', // eth wallet address
    amount: '100000000', // 1btc
    slippageBps: 150,
    referrer: 'thorname',
    referralFeeBps: 25, // 0.25%
    // provider: 'thorchain,maya,chainflip',
  };

  const swapResponse = await api.getSwap(swapParams);
  console.log(swapResponse);
};

getInfo();
getQuote();
getSwap();
