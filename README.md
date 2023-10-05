
# Crypto Donations

Welcome to the Crypto Donations repository! This repository contains the source code for the Crypto Donations platform. 

## Table of Contents:

- [Crypto Donations](#crypto-donations)
  - [Table of Contents:](#table-of-contents)
  - [About:](#about)
  - [Features:](#features)
    - [Smart Contract:](#smart-contract)
    - [Frontend:](#frontend)
  - [How to Use:](#how-to-use)
  - [Contribution:](#contribution)
  - [License:](#license)
  - [Contract Deployment](#contract-deployment)
  
## About:
[https://cryptodonations.xyz](https://cryptodonations.xyz)

This platform offers a seamless and secure way for users to donate using native coins or ERC20 tokens. Comprising a smart contract and frontend interface, it ensures a transparent donation process while maintaining a layer of privacy for the donor.

## Features:

### Smart Contract:

- **Donation Interface**: Provides an interface for users to donate using native coins or ERC20 tokens.
- **Memo Feature**: Users can leave a message for the recipient after specifying the donation amount and address.
- **Direct Transfer**: The smart contract directly transfers the amount to the recipient's address.
- **Event Logging**: All relevant information is recorded in an event for future reference. The recorded information includes:
  1. Donor's address.
  2. Recipient's address.
  3. Token details (address, symbol, decimals).
  4. Tag: Used to identify the source of the donation link.
  5. Memo: Message from the donor to the recipient.
  6. Block Timestamp.
  7. Transaction Hash.

- **TheGraphStudio Integration**: Uses TheGraphStudio's subgraph functionality to index events.

### Frontend:

- **Connect Wallet**: Users can connect their wallets on the main page.
- **Donation Feed**:
  - If no wallet is connected, displays the latest 20 donations.
  - If a wallet is connected, displays the donations associated with the connected wallet address (both sent and received).
- **Generate Link**: Generates a donation link with an embedded recipient address and default Memo information.
- **Donation Page**:
  - Users can select the network, coin/token, and amount for donation.
  - Provides an option for users to approve and send the donation.
  - Users can fill in the Memo field to leave a message for the recipient.

## How to Use:

1. **Main Page**: Connect your wallet and view your donation history. Generate donation links to share with others. [https://cryptodonations.xyz](https://cryptodonations.xyz)
2. **Donation Page**: Connect your wallet, choose the network and coin/token, specify the amount, and send the donation. Optionally, you can leave a message for the recipient in the Memo field.

## Contribution:

Contributions are always welcome! If you'd like to contribute to this project, please fork this repository and open a pull request.

## License:

This project is open-source and is licensed under MIT.

---
## Contract Deployment

| Network | Contract Address | Subgraph |
|----|----|-----|
| Ethereum | 0xa63A35951DD74f6a00DfDB0A749f04aDb27b4F27 | https://api.studio.thegraph.com/query/20058/crypto-donations-eth/v0.0.1 |
| Goerli | 0x9C1f271F4B0645f3e53B5BF430AF94FF6aBEe780 | https://api.studio.thegraph.com/query/20058/crypto-donations/v0.0.1 |
| Avalanche | 0x00e5330Ece02a25bE85cfDfc1a19d5f06C8f5E28 | https://api.studio.thegraph.com/query/20058/crypto-donations-avalanche/v0.0.1 |
| Binance Smart Chain | 0x5107033Dd55d70e8241534C6509697dcfB5c72F8 | https://api.thegraph.com/subgraphs/name/lolieatapple/crypto-donations-bsc |
| Arbitrum | 0x4f1aB74c2a9E8f591e8A80768e115C9f75935bAD | https://api.studio.thegraph.com/query/20058/crypto-donations-arbitrum/v0.0.1 |

