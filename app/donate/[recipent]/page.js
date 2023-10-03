'use client';
import { SUBGRAPH_URLS, TOKENS } from '@/app/constants';
import React from 'react';

export default function Donate(props) {
  console.log('Donate', props);
  return (
    <div className="bg-gradient-to-b from-[#d8f0f0] to-[#76c6cd] min-h-screen flex flex-col items-center justify-center px-4 md:px-0">
      <div className="relative w-full max-w-md">
        <img src="/banner.png" alt="banner" className="w-full h-[120px] object-cover mb-[-10px] rounded-t-2xl" />
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-1 gap-4 mb-4 mt-4">
            <label className="block">
              <span className="text-gray-700">Network:</span>
              <select className="mt-1 p-2 border border-gray-300 rounded w-full">
                {
                  Object.keys(SUBGRAPH_URLS).map((key, i) => (
                    <option key={key}>{key}</option>
                  ))
                }
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Coin / Token:</span>
              <select className="mt-1 p-2 border border-gray-300 rounded w-full">
                {
                  Object.keys(TOKENS).map((key, i) => (
                    <option key={i}>{TOKENS[key].symbol}</option>
                  ))
                }
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Amount:</span>
              <input type="number" placeholder="Amount" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            </label>
            <label className="block">
              <span className="text-gray-700">Memo:</span>
              <input placeholder="Memo" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            </label>
          </div>
          {/* Additional content and form elements */}
          <button className="bg-blue-500 text-white rounded px-4 py-2 mt-4 w-[46%] hover:bg-green-500">Approve</button>
          <button className="bg-blue-500 text-white rounded px-4 py-2 mt-4 ml-7 w-[46%] hover:bg-red-500">Donate</button>
        </div>
      </div>
    </div>
  );
}
