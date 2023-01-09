import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home"
import Roadmap from "./pages/Roadmap"
import Whitepaper from "./pages/Whitepaper"
import ErrorPage404 from "./pages/ErrorPage404"
import {ethers} from 'ethers';

import artifact from './artifacts/contracts/Crowdsale.sol/Crowdsale.json'
import genericErc20Abi from './artifacts/@openzeppelin/contracts/token/ERC20/ERC20.sol/ERC20.json'
const CONTRACT_ADDRESS = "0x57231D23994F8D7217DC7f1F8C16C9A5Ca71fc7A"
const TOKEN_ADDRESS = "0xFA33A300fB246D4fb6CCAE507796d79639Ea28a0"


function App() {
 const [provider, setProvider] = useState<ethers.providers.Web3Provider | undefined>(undefined);
 const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | undefined>(undefined);
 const [contract, setContract] = useState<ethers.Contract | undefined>(undefined);
 const [tokenContract, setTokenContract] = useState<ethers.Contract | undefined>(undefined);
 const [signerAddress, setSignerAddress] = useState<string | undefined>(undefined)
 const [rate, setRate] = useState(0)
 const [balance, setBalance] = useState(0)
 const [totalSupply, setTotalSupply] = useState(0)
  const [ethRaised, setEthRaised] = useState(0)
 
  
  const getContracts = async (_provider: ethers.providers.Web3Provider) => {
 const crowdSaleContract = new ethers.Contract(
      CONTRACT_ADDRESS,
      artifact.abi,
      _provider
    )
    console.log("crowdSaleContract: ", crowdSaleContract)
    setContract(crowdSaleContract)

    let rate = await crowdSaleContract.rate();
    rate = parseFloat(ethers.utils.formatUnits(rate, 0))
    console.log("rate: ", rate)
    setRate(rate)

    let weiRaised = await crowdSaleContract.weiRaised();
    weiRaised = parseFloat(ethers.utils.formatUnits(weiRaised))
    console.log("ethRaised: ", weiRaised)
    setEthRaised(weiRaised)
    

    const tokenContract = new 
ethers.Contract(TOKEN_ADDRESS, genericErc20Abi.abi, _provider)
    console.log("tokenContract: ", tokenContract)
    setTokenContract(tokenContract)

    let totalSupply = await tokenContract.totalSupply()
    totalSupply =       parseFloat(ethers.utils.formatEther(totalSupply))
    console.log("totalSupply: ", totalSupply)
    setTotalSupply(totalSupply)
}

 useEffect(() => {
  const onLoad = async () => {
    // const providerAlt: ethers.providers.AlchemyProvider = await new ethers.providers.AlchemyProvider("goerli", API_KEY);
    // setProvider(providerAlt);

    const provider: ethers.providers.Web3Provider = new       ethers.providers.Web3Provider(window.ethereum!);
    setProvider(provider);
    console.log("provider: ", provider)

    if (provider !== undefined) {
      getContracts(provider)
    }
    
 
  }
  if(!window.ethereum) {
    return
  } else {
    onLoad()
  }
    
 }, [])


 

 const getBalance = async (_address :string, _signer: ethers.providers.JsonRpcSigner) => {
  let balance = await tokenContract!.connect(_signer!).balanceOf(_address)
  balance = parseFloat(ethers.utils.formatEther(balance))
  
  return balance
 }

 const getSignerData = async () => {
  provider!.send("eth_requestAccounts", [])
  const signer = provider!.getSigner()
  console.log("signer: ", signer)

   /* ------ get signer address ------ */
      const address = await signer.getAddress()
      console.log("address: ", address)
      setSignerAddress(address)

      /* ------ get signer balance ------ */
      getBalance(address, signer).then(balance => {
        setBalance(balance)
        console.log("balance: ", balance)
      })
  
  return signer
 }

 const connectWallet = () => {
    if (!window.ethereum) {
      alert("Get MetaMask!");
      return;
    }

    /* ------ get signer ------ */
    getSignerData().then(signer => {
      setSigner(signer)
    })

 }

 const toWei = (ether: string) => ethers.utils.parseEther(ether)

 const buyTokens = async (_amount: number) => {
  if (_amount === 0) return;
  const wei = toWei(`${_amount}`);
   // console.log("wei", wei)

  const response: Promise<any> = await contract!.connect(signer!).buyTokens(signerAddress, {value: wei, gasLimit: 100000})

   return response;
 }

  const isConnected = () => ((signer !== undefined) && (signerAddress !== undefined))


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home tokenAddress={TOKEN_ADDRESS} balance={balance} totalSupply={totalSupply} ethRaised={ethRaised} signerAddress={signerAddress!} rate={rate} connectWallet={connectWallet} buyTokens={buyTokens} isConnected={isConnected()} />} />
       
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/whitepaper" element={<Whitepaper />} />

        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </Router>
    
  );
}

export default App;
