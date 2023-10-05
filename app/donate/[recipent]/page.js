'use client';
import { RPC_URLS, SC_ADDR, SUBGRAPH_URLS, TOKENS } from '@/app/constants';
import { toShortAddress, capitalizeFirstLetter, ERC20_ABI, getTokenSymbol, getTokenDecimals, SC_ABI } from '@/app/utils';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ethers } from 'ethers';

const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';

export default function Donate(props) {
  const [from, setFrom] = useState('');
  const [loadingApprove, setLoadingApprove] = useState(false);
  const [loadingDonate, setLoadingDonate] = useState(false);
  const [network, setNetwork] = useState('goerli');
  const [token, setToken] = useState({address: ETH, symbol: 'ETH', decimals: 18, network: 'goerli', chainId: '0x5'});
  const [amount, setAmount] = useState('');
  const [memo, setMemo] = useState('');
  const [balance, setBalance] = useState('loading');
  const [allowance, setAllowance] = useState(0);
  const [updater, setUpdater] = useState(0);


  const symbol = token.symbol;

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('Please install MetaMask first');
      return;
    }
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setFrom(accounts[0]);
  }
  console.log('token', token);
  const approveDisabled = useMemo(()=>(token.address.toLocaleLowerCase() === ETH || Number(allowance) >= Number(amount)), [token, allowance, amount]);
  const donateDiabled = useMemo(()=>(Number(allowance) < Number(amount) || Number(amount) === 0), [allowance, amount]);

  useEffect(()=>{
    if (!from) {
      connectWallet();
      return;
    };
    if (!network) return;
    if (!token) return;
    console.log('loading', from, network, token);
    setLoadingApprove(true);
    setLoadingDonate(true);
    const rpcUrl = RPC_URLS[network];
    const provider = new ethers.JsonRpcProvider(rpcUrl);
    
    if (token.address.toLocaleLowerCase() === ETH) {
      setLoadingApprove(false);
      console.log('from', from);
      provider.getBalance(from).then((balance)=>{
        console.log('balance', balance);
        setBalance(ethers.formatEther(balance));
        setAllowance(ethers.formatEther(balance));
        setLoadingDonate(false);
      });
    } else {
      let contract = new ethers.Contract(token.address, ERC20_ABI, provider);
      contract.balanceOf(from).then((balance)=>{
        console.log('balance', balance);
        setBalance(ethers.formatEther(balance));
        setLoadingDonate(false);
      });
      contract.allowance(from, SC_ADDR[network]).then((_allowance)=>{
        console.log('allowance', _allowance);
        setAllowance(ethers.formatUnits(_allowance, token.decimals));
        setLoadingApprove(false);
      });
    }

  }, [token, network, amount, from, updater]);

  const approve = useCallback(async () => {
    if (!from) {
      connectWallet();
      return;
    };
    if (!network) return;
    if (!token.address) return;
    setLoadingApprove(true);
    try {
      // switch metamask network
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: token.chainId }],
      });
      // get metamask provider
      const provider = new ethers.BrowserProvider(window.ethereum);
      // get signer
      const signer = await provider.getSigner();
      let contract = new ethers.Contract(token.address, ERC20_ABI, signer);
      let tx = await contract.getFunction('approve').send(SC_ADDR[network], ethers.parseUnits(amount, token.decimals));
      console.log('tx', tx);
      await tx.wait();
      setUpdater(updater + 1);
    } catch (error) {
      alert('Approve failed');
      console.error('approve error', error);
    }
    setLoadingApprove(false);
  }, [token, network, amount, from]);

  const recipent = props.params.recipent;
  const tag = props.searchParams.tag;
  // console.log('Donate', props, recipent, tag);
  

  const donate = useCallback(async () => {
    if (!from) {
      connectWallet();
      return;
    };
    console.log('donate', recipent, token, ethers.parseUnits(amount, token.decimals), tag, memo);

    if (!network) return;
    if (!token.address) return;
    if (!recipent) return;
    setLoadingDonate(true);
    try {
      let chainId = token.chainId;
      console.log('chainId', chainId);
      // switch metamask network
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId }],
      });
      // get metamask provider
      const provider = new ethers.BrowserProvider(window.ethereum);
      // get signer
      const signer = await provider.getSigner();
      let contract = new ethers.Contract(SC_ADDR[network], SC_ABI, signer);
      let tx;
      if (token.address.toLocaleLowerCase() !== ETH) {
        tx = await contract.getFunction('donate').send(recipent, token.address, ethers.parseUnits(amount, token.decimals), tag, memo);
      } else {
        tx = await contract.getFunction('donate').send(recipent, token.address, ethers.parseUnits(amount, token.decimals), tag, memo, { value: ethers.parseUnits(amount, token.decimals)});
      }
      console.log('tx', tx);
      await tx.wait();
      setUpdater(updater + 1);
      alert('Donate success');
    } catch (error) {
      alert('Donate failed');
      console.error('donate error', error);
    }
    setLoadingDonate(false);
  }, [token, network, amount, from, memo, recipent, tag]);

  return (
    <div className="bg-gradient-to-b from-[#d8f0f0] to-[#76c6cd] min-h-screen flex flex-col items-center justify-center px-4 md:px-0">
      <div className="relative w-full max-w-md">
        <img src="/banner.png" alt="banner" className="w-full h-[120px] object-cover mb-[-10px] rounded-t-2xl" />
        <button className="absolute top-2 right-2 text-sm text-black bg-[#d8f0f0] px-2 py-1 rounded hover:bg-opacity-80"
          onClick={connectWallet}
        >
          {
            from ? toShortAddress(from) : 'Connect Wallet'
          }
        </button>
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="grid grid-cols-1 gap-4 mb-4 mt-4">
            <label className="block">
              <span className="text-gray-700">Network:</span>
              <select onChange={e=>{
                setNetwork(e.target.value);
                let _token = TOKENS.find(v=>v.network === e.target.value);
                console.log('_token', _token);
                setToken(_token);
              }} className="mt-1 p-2 border border-gray-300 rounded w-full">
                {
                  Object.keys(SUBGRAPH_URLS).map((key, i) => (
                    <option key={key} value={key}>{capitalizeFirstLetter(key)}</option>
                  ))
                }
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Coin / Token:</span>
              <select
                value={token.address+'_'+token.network}
                onChange={e=>{
                console.log('e.target.value', e.target.value);
                let _token = TOKENS.find(v=>v.address+'_'+v.network === e.target.value);
                setToken(_token);
                }} className="mt-1 p-2 border border-gray-300 rounded w-full">
                {
                  TOKENS.filter(v=>v.network === network).map((v, i) => (
                    <option key={i} value={v.address+'_'+v.network}>{v.symbol}</option>
                  ))
                }
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Amount: </span>
              <span className="text-gray-400 text-sm">Balance: {balance} {symbol}</span>
              <input value={amount} onChange={e=>setAmount(e.target.value)} type="number" placeholder="Fill amount you want to donate" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            </label>
            <label className="block">
              <span className="text-gray-700">Memo:</span>
              <input value={memo} onChange={e=>setMemo(e.target.value)} placeholder="Fill memo for what you want to say" className="mt-1 p-2 border border-gray-300 rounded w-full" />
            </label>
          </div>
          {/* Additional content and form elements */}
          <button 
            disabled={approveDisabled} 
            className={`bg-blue-500 text-white rounded px-4 py-2 mt-4 w-[48%] 
              ${approveDisabled ? 'hover:bg-blue-500 cursor-not-allowed opacity-60' : 'hover:bg-green-500'}`}
            onClick={approve}
          >
            {
              loadingApprove ? <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> : 'Approve'
            }
          </button>
          <button 
            disabled={donateDiabled} 
            className={`bg-blue-500 text-white rounded px-4 py-2 mt-4 w-[48%] ml-[4%]
              ${donateDiabled ? 'hover:bg-blue-500 cursor-not-allowed opacity-60' : 'hover:bg-green-500'}`}
            onClick={donate}
          >
            {
              loadingDonate ? <FontAwesomeIcon icon={faSpinner} className="animate-spin" /> : 'Donate'
            }
          </button>
        </div>
      </div>
    </div>
  );
}
