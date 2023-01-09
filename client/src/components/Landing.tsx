import React, {useState} from "react"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Layout from "./Layout/Layout"
import BuyTokenModal from "./BuyTokenModal"
import PaddingContainer from './PaddingContainer';

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

const Landing = ({tokenAddress, balance, totalSupply, ethRaised, signerAddress, rate, connectWallet, buyTokens, isConnected} : propTypes) => {
  const [openBuyModal, setOpenBuyModal] = useState(false)

  const handleCloseBuyModal = () => {
    setOpenBuyModal(false)
  }
  
   const handleClickedBuy = () => {
     setOpenBuyModal(true)
     console.log("go go go")
   }

  const handleClickedHowTo = () => {
     console.log("how to")
   }
  
  return <Box component="section">
    <PaddingContainer >
         <Box component="section" sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: 1,
      borderColor: "red",
      minHeight: "calc(100vh - 3rem)",
      }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Planetary Invation Network
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
          Token Crowdsale
            </Typography>
        <Box sx={{
      display: "flex",
        }}>
          <Typography variant="body2" component="p" gutterBottom sx={{
      py: 1.5,
      mr: "4px",
      fontSize: "1.25rem",
          }}>
          Total Supply: {totalSupply}
            </Typography>
            
        <Typography variant="body2" component="p" gutterBottom sx={{
      py: 1.5,
      ml: "4px",
      fontSize: "1.25rem",
          }}>
          {ethRaised} Eth Raised
            </Typography>
        </Box>
        <Typography variant="body2" component="p" gutterBottom>
          Rate: {rate}
            </Typography>
          
          <Box>
            <Button onClick={handleClickedBuy}>
              Buy pin token
            </Button>
            <Button onClick={handleClickedHowTo}>
              hoW to buy
            </Button>
          </Box>
       
      </Box>
       <BuyTokenModal isConnected={isConnected} connectWallet={connectWallet} buyTokens={buyTokens} open={openBuyModal} onHandleClose={handleCloseBuyModal} rate={rate} signerAddress={signerAddress} balance={balance} />


      
    </PaddingContainer>  
  </Box>
}

export default Landing