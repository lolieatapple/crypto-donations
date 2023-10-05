
export const SUBGRAPH_URLS = {
  'goerli': 'https://api.studio.thegraph.com/query/20058/crypto-donations/v0.0.1',
  'avalanche': 'https://api.studio.thegraph.com/query/20058/crypto-donations-avalanche/v0.0.1',
  'arbitrum': 'https://api.studio.thegraph.com/query/20058/crypto-donations-arbitrum/v0.0.1',
  'bsc': 'https://api.thegraph.com/subgraphs/name/lolieatapple/crypto-donations-bsc',
}

// address must be lower case
export const TOKENS = [
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
  {address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', symbol: 'USDT', decimals: 6, network: 'arbitrum', chainId: '0xa4b1' },
  {address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', symbol: 'USDC', decimals: 6, network: 'arbitrum', chainId: '0xa4b1' },
  {address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', symbol: 'WBTC', decimals: 8, network: 'arbitrum', chainId: '0xa4b1' },
  {address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', symbol: 'DAI', decimals: 18, network: 'arbitrum', chainId: '0xa4b1' },

  {address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee', symbol: 'BNB', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8', symbol: 'ETH', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0x55d398326f99059fF775485246999027B3197955', symbol: 'USDT', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d', symbol: 'USDC', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43', symbol: 'DOGE', decimals: 8, network: 'bsc', chainId: '0x38' },
  {address: '0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3', symbol: 'DAI', decimals: 18, network: 'bsc', chainId: '0x38' },
  {address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c', symbol: 'BTC', decimals: 18, network: 'bsc', chainId: '0x38' },
]

export const RPC_URLS = {
  'goerli': 'https://ethereum-goerli.publicnode.com',
  'avalanche': 'https://avalanche-c-chain.publicnode.com',
  'arbitrum': 'https://arbitrum-one.publicnode.com',
  'bsc': 'https://bsc.publicnode.com',
}

export const SC_ADDR = {
  'goerli': '0x9C1f271F4B0645f3e53B5BF430AF94FF6aBEe780',
  'avalanche': '0x00e5330Ece02a25bE85cfDfc1a19d5f06C8f5E28',
  'bsc': '0x5107033Dd55d70e8241534C6509697dcfB5c72F8',
  'arbitrum': '0x4f1aB74c2a9E8f591e8A80768e115C9f75935bAD',
};
