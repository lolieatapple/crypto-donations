import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { toShortAddress, subgraphGet, capitalizeFirstLetter, getTokenDecimals, getTokenSymbol } from '@/app/utils';
import Paging from '@/app/components/Paging';
import CreateDonationLink from '@/app/components/CreateDonationLink';

const getData = async (address, page = '0') => {
  let data = await subgraphGet("personal", page, address);
  data = data.map(v=>{
    return {
      ...v,
      amount: v.amount / Math.pow(10, getTokenDecimals(v.token)),
      symbol: getTokenSymbol(v.token, v.network),
      blockTimestamp: new Date(v.blockTimestamp * 1000).toISOString().split('.')[0].replace('T', ' ')
    }
  });
  console.log('personal', data);
  return data;
}

export default async function Personal(props) {
  const data = await getData(props.params.address, props.searchParams.page);
  console.log('props', props);
  const currentPage = Number(props.searchParams.page ? props.searchParams.page : 0);
  return (
    <div className="bg-gradient-to-b from-[#d8f0f0] to-[#76c6cd] min-h-screen flex flex-col items-center px-4 md:px-0">
      <div className="relative overflow-hidden mb-10 w-full h-[160px]">
        <img src="/banner.png" alt="banner" className="w-full absolute bottom-0" />
        <a href="/" className="absolute top-2 left-2 text-sm text-white bg-[#76c6cd] px-2 py-1 rounded hover:bg-opacity-80">
          Back to Home
        </a>
        <a href="/" className="absolute top-2 right-2 text-sm text-black bg-[#d8f0f0] px-2 py-1 rounded hover:bg-opacity-80">
          { toShortAddress(props.params.address) }
        </a>
      </div>

      <CreateDonationLink address={props.params.address} />

      {/* Table in the center of the page */}
      <div className="bg-[#76c6cd] w-full md:w-3/4 p-4 rounded-lg mb-10 overflow-x-auto">
        <table className="w-full text-white border-collapse">
          <thead>
            <tr className="border-b-2 border-white">
              <th className="px-4 py-2 text-left">Time</th>
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
            {
              data.map((v, i) => {
                return (
                  <tr className="border-b border-white" key={v.id}>
                    <td className="px-4 py-2">{v.blockTimestamp}</td>
                    <td className="px-4 py-2">{capitalizeFirstLetter(v.network)}</td>
                    <td className="px-4 py-2">{toShortAddress(v.donator)}</td>
                    <td className="px-4 py-2">{toShortAddress(v.recipient)}</td>
                    <td className="px-4 py-2">{v.symbol}</td>
                    <td className="px-4 py-2">{v.amount}</td>
                    <td className="px-4 py-2">{v.tag}</td>
                    <td className="px-4 py-2">{v.memo}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <Paging currentPage={currentPage} data={data} params={props.params} />
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
