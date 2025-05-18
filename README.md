# 🔗 Clypto API SDK

**@clypto/api-sdk** is a lightweight TypeScript SDK for accessing the [Clypto API](https://api.clypto.com/docs), a high-performance, cross-chain aggregator supporting seamless token swaps across 16+ blockchains and 6,000+ assets.

- 📦 Get Token List by providers, chains
- 🚀 Quote & execute swaps
- 🔗 Deep multi-chain liquidity
- ⚡ Fast and efficient routing
- 💰 Built-in referral support

---

## 📦 Installation

```bash
npm install @clypto/api-sdk
```

## Usage

```
import { ClyptoApi } from '@clypto/api-sdk';

const apiKey = 'your-api-key';
const clypto = new ClyptoApi(apiKey);

// Get supported chains
const chains = await clypto.getChains();

// Get tokens for a specific provider
  const tokens = await api.getTokens({ provider: 'thorchain' });

// Get a quote

const quote = await api.getQuote({
  srcChain: 'bitcoin',
  srcToken: '', // pass empty string for native assets like bitcoin, ethereum
  destChain: '1', // ethereum
  destToken: '',
  amount: '100000000', // 1btc
  slippageBps: 150,
  referrer: 'thorname',
  referralFeeBps: 25, // 0.25%
});

// Get a swap transaction
const swap = await clypto.getSwap({
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
  });
```

## API Reference

[Official API Documentation](https://api.clypto.com/docs)

## 🧠 About Clypto

Clypto is a next-generation cross-chain DeFi aggregation protocol that enables seamless crypto swaps across 16+ blockchain ecosystems—including Bitcoin, Ethereum, Solana, and many more.

The Clypto API is a high-performance, cross-chain aggregation API that empowers developers to enable seamless crypto swaps across 16+ blockchains and over 6,000 tokens — with best-rate routing, non-custodial execution, and built-in referral monetization.

Powered by Clypto’s smart routing engine, the API dynamically sources liquidity from leading DEXs and bridges — delivering optimal swap paths with minimal effort and maximum efficiency.
