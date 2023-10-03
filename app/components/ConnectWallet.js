'use client';

import { useRouter } from 'next/navigation';


export default function ConnectWallet() {
  const router = useRouter();

  return <button className="xl:mt-5 bg-[#76c6cd] hover:bg-[#5ba9b5] text-white py-2 px-5 rounded-lg shadow-xl transition-colors duration-300 mb-1" onClick={async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask first.');
      return;
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    router.push('/personal/' + accounts[0] + '?page=0');
  }}>
    Connect Wallet
  </button>
}
