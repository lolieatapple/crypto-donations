import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#d8f0f0] to-[#76c6cd] min-h-screen flex flex-col items-center px-4 md:px-0">
      <div className="shadow-xl relative mb-10 w-full">
        <img src="/banner.png" alt="banner" className="w-full" />

        {/* Big title */}
        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-2xl lg:text-4xl xl:text-5xl font-bold text-[#000]">
          Crypto Donations
        </h1>

        {/* Subtitle */}
        <p className="absolute mt-10 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-lg text-[#000] hidden md:block">
          Seamless and secure way for users to donate native coins or ERC20 tokens.
        </p>

        {/* Button and its note */}
        <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <button className="xl:mt-5 bg-[#76c6cd] hover:bg-[#5ba9b5] text-white py-2 px-5 rounded-lg shadow-xl transition-colors duration-300 mb-1">
            Connect Wallet
          </button>
          <p className="xl:mt-2 text-sm text-gray-500 hidden md:block">
            * Connect wallet to view & create yourself donation links.
          </p>
        </div>
      </div>

      {/* Table in the center of the page */}
      <div className="bg-[#76c6cd] w-full md:w-3/4 p-4 rounded-lg mb-10 overflow-x-auto">
        <table className="w-full text-white border-collapse">
          <thead>
            <tr className="border-b-2 border-white">
              <th className="px-4 py-2 text-left">Network</th>
              <th className="px-4 py-2 text-left">Donator</th>
              <th className="px-4 py-2 text-left">Recipient</th>
              <th className="px-4 py-2 text-left">Token</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Tag</th>
              <th className="px-4 py-2 text-left">Memo</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white">
              <td className="px-4 py-2">Ethereum</td>
              <td className="px-4 py-2">0x1234...6789</td>
              <td className="px-4 py-2">0x1234...6789</td>
              <td className="px-4 py-2">ETH</td>
              <td className="px-4 py-2">1.5</td>
              <td className="px-4 py-2">***1234</td>
              <td className="px-4 py-2">***Thanks!</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer with copyright and icons */}
      <div className="mt-auto flex items-center mb-4">
          <span className="mr-4 text-gray-700">Copy right 2023 @lolieatapple</span>
          <a href="https://twitter.com/lolieatapple" target="_blank" rel="noopener noreferrer" className="mr-2">
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6 text-gray-700" />
          </a>
          <a href="https://github.com/lolieatapple/crypto-donations" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6 text-gray-700" />
          </a>
      </div>
    </div>
  )
}
