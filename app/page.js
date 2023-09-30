import React from 'react';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#d8f0f0] to-[#76c6cd] h-screen flex flex-col items-center">
      <div className="shadow-xl relative mb-10">
        <img src="/banner.png" alt="banner" />

        {/* Big title */}
        <h1 className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-bold text-[#000]">
          Crypto Donations
        </h1>

        {/* Subtitle */}
        <p className="absolute mt-5 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-[#000]">
          Seamless and secure way for users to donate native coins or ERC20 tokens.
        </p>

        {/* Button and its note */}
        <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <button className="bg-[#76c6cd] hover:bg-[#5ba9b5] text-white py-2 px-5 rounded-lg shadow-lg transition-colors duration-300 mb-1">
            Connect Wallet
          </button>
          <p className="mt-2 text-sm text-gray-500">
            * Connect wallet to create yourself donation links.
          </p>
        </div>

      </div>
    </div>
  )
}
