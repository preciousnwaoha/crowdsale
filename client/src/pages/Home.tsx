import React from "react"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from "../components/Layout/Layout"
import Landing from "../components/Landing"
import About from "../components/About"
import BottomActions from "../components/BottomActions"

type propTypes = {
  tokenAddress: string;
  balance: number;
  totalSupply: number;
  ethRaised: number;
  signerAddress: string;
  rate: number;
  connectWallet: () => void;
  buyTokens : (amount: number) => Promise<any>;
  isConnected: boolean;
}


const Home = ({tokenAddress, balance, totalSupply, ethRaised, signerAddress, rate, connectWallet, buyTokens, isConnected} : propTypes) => {
  
  return (
    <Layout isConnected={isConnected}>
      <Landing tokenAddress={tokenAddress} balance={balance} totalSupply={totalSupply} ethRaised={ethRaised} signerAddress={signerAddress} rate={rate} connectWallet={connectWallet} buyTokens={buyTokens} isConnected={isConnected} />
        <About totalSupply={totalSupply} tokenAddress={tokenAddress} />
      <BottomActions  />
      </Layout>
    
  )
    
}

export default Home;