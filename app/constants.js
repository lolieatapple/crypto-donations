
export const SUBGRAPH_URLS = {
  'ethereum': 'https://api.studio.thegraph.com/query/20058/crypto-donations-eth/v0.0.1',
  'goerli': 'https://api.studio.thegraph.com/query/20058/crypto-donations/v0.0.1',
  'avalanche': 'https://api.studio.thegraph.com/query/20058/crypto-donations-avalanche/v0.0.1',
  'arbitrum': 'https://api.studio.thegraph.com/query/20058/crypto-donations-arbitrum/v0.0.1',
  'bsc': 'https://api.thegraph.com/subgraphs/name/lolieatapple/crypto-donations-bsc',
}

// address must be lower case
export const TOKENS = [
  {address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', symbol: 'ETH', decimals: 18, network: 'ethereum', chainId: '0x1' },
  {address: '0xdac17f958d2ee523a2206206994597c13d831ec7', symbol: 'USDT', decimals: 6, network: 'ethereum', chainId: '0x1' },
  {address: '0xb8c77482e45f1f44de1745f52c74426c631bdd52', symbol: 'BNB', decimals: 18, network: 'ethereum', chainId: '0x1' },
  {address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', symbol: 'USDC', decimals: 6, network: 'ethereum', chainId: '0x1' },
  {address: '0x50327c6c5a14dcade707abad2e27eb517df87ab5', symbol: 'TRX', decimals: 6, network: 'ethereum', chainId: '0x1' },
  {address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', symbol: 'WBTC', decimals: 8, network: 'ethereum', chainId: '0x1' },
  {address: '0x6b175474e89094c44da98b954eedeac495271d0f', symbol: 'DAI', decimals: 18, network: 'ethereum', chainId: '0x1' },

  {address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', symbol: 'ETH', decimals: 18, network: 'goerli', chainId: '0x5' },
  {address: '0x11fe4b6ae13d2a6055c8d9cf65c55bac32b5d844', symbol: 'DAI', decimals: 18, network: 'goerli', chainId: '0x5' },

  {address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', symbol: 'AVAX', decimals: 18, network: 'avalanche', chainId: '0xa86a' },
  {address: '0xc7198437980c041c805a1edcba50c1ce5db95118', symbol: 'USDT.e', decimals: 6, network: 'avalanche', chainId: '0xa86a' },
  {address: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7', symbol: 'USDt', decimals: 6, network: 'avalanche', chainId: '0xa86a' },
  {address: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', symbol: 'USDC.e', decimals: 6, network: 'avalanche', chainId: '0xa86a' },
  {address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e', symbol: 'USDC', decimals: 6, network: 'avalanche', chainId: '0xa86a' },
  {address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', symbol: 'DAI.e', decimals: 18, network: 'avalanche', chainId: '0xa86a' },
  {address: '0x50b7545627a5162F82A992c33b87aDc75187B218', symbol: 'WBTC.e', decimals: 8, network: 'avalanche', chainId: '0xa86a' },


  {address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', symbol: 'ETH', decimals: 18, network: 'arbitrum', chainId: '0xa4b1' },
  {address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', symbol: 'USDT', decimals: 6, network: 'arbitrum', chainId: '0xa4b1' },
  {address: '0xaf88d065e77c8cc2239327c5edb3a432268e5831', symbol: 'USDC', decimals: 6, network: 'arbitrum', chainId: '0xa4b1' },
  {address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f', symbol: 'WBTC', decimals: 8, network: 'arbitrum', chainId: '0xa4b1' },
  {address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1', symbol: 'DAI', decimals: 18, network: 'arbitrum', chainId: '0xa4b1' },

  {address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', symbol: 'BNB', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8', symbol: 'ETH', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0x55d398326f99059ff775485246999027b3197955', symbol: 'USDT', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', symbol: 'USDC', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0xba2ae424d960c26247dd6c32edc70b295c744c43', symbol: 'DOGE', decimals: 8, network: 'bsc', chainId: '0x38' },
  {address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', symbol: 'DAI', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c', symbol: 'BTC', decimals: 18, network: 'bsc', chainId: '0x38' },
]

export const RPC_URLS = {
  'ethereum': 'https://ethereum.publicnode.com',
  'goerli': 'https://ethereum-goerli.publicnode.com',
  'avalanche': 'https://avalanche-c-chain.publicnode.com',
  'arbitrum': 'https://arbitrum-one.publicnode.com',
  'bsc': 'https://bsc.publicnode.com',
}

export const SC_ADDR = {
  'ethereum': '0xa63A35951DD74f6a00DfDB0A749f04aDb27b4F27',
  'goerli': '0x9C1f271F4B0645f3e53B5BF430AF94FF6aBEe780',
  'avalanche': '0x00e5330Ece02a25bE85cfDfc1a19d5f06C8f5E28',
  'bsc': '0x5107033Dd55d70e8241534C6509697dcfB5c72F8',
  'arbitrum': '0x4f1aB74c2a9E8f591e8A80768e115C9f75935bAD',
};
