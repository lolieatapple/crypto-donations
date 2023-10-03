'use client';

import React, { useEffect, useMemo, useState } from 'react';

export default function CreateDonationLink(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectTag, setProjectTag] = useState('default');
  const [recipent, setRecipent] = useState(props.address);
  const donationUrl = useMemo(()=>{
    return `https://cryptodonations.xyz/donate/${recipent}?tag=${projectTag}`;
  }, [projectTag, recipent]);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className='bg-gradient-to-b from-[#76c6cd] to-[#9feeee] p-2 pl-5 pr-5 m-5 mt-0 border-collapse shadow rounded-2xl hover:text-white'
      >
        Create Donation Link →
      </button>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md shadow-xl w-[500px]">
            <h2 className="text-2xl mb-4">Create Donation Link</h2>
            <label htmlFor="projectTag" className="block mb-2">Project Tag:</label>
            <input
              type="text"
              id="projectTag"
              value={projectTag}
              onChange={e => setProjectTag(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />
            <label htmlFor="recipent" className="block mb-2">Recipent:</label>
            <input
              type="text"
              id="recipent"
              value={recipent}
              onChange={e => setRecipent(e.target.value)}
              className="w-full p-2 border rounded-md mb-4"
            />
            <label htmlFor="donationUrl" className="block mb-2">Donation URL:</label>
            <input
              type="text"
              id="donationUrl"
              value={donationUrl}
              readOnly
              className="w-full p-2 border rounded-md mb-4"
            />
            <button
              onClick={async () => {
                await navigator.clipboard.writeText(donationUrl);
                setIsModalOpen(false);
              }}
              className='bg-gradient-to-b from-[#76c6cd] to-[#9feeee] p-2 w-full border-collapse shadow rounded-md hover:text-white'
            >
              Copy & Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
