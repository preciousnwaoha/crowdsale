import React, {useState} from "react";
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
import Layout from "../components/Layout/Layout"
import MetamaskImg from "../../public/MetaMask.png"
import BuyTokenComp from "./BuyTokenComp"

const ConnectWalletComp = ({onConnectWallet}: {onConnectWallet: () => void}) => {
  return <Box sx={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p:2,

    "& img": {
      objectFit: "contain",
      maxWidth: "40%",
    }
    
  }}>

  <Typography variant="h4">Connect Wallet</Typography>
    <img src={MetamaskImg} alt="Metamask Logo" />
    <Button onClick={() => {onConnectWallet()}}>Connect Wallet</Button>
  </Box>
}

type propTypes = {
  connectWallet: () => void,
  isConnected: boolean,
  buyTokens: (amount: number) => Promise<any>,
  open: boolean,
  onHandleClose: () => void,
  rate: number,
  balance: number,
  signerAddress: string,
}

const BuyTokenModal = ({connectWallet, isConnected, buyTokens, open, onHandleClose, rate, signerAddress, balance}: propTypes) => {
 const [loadingSigner, setLoadingSigner] = React.useState(false)

  const handleClose = () => {
    onHandleClose()
  }
  

  const handleConnectWallet = () => {
    setLoadingSigner(true)
      connectWallet()
    setLoadingSigner(false)
  }
  
  return <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
}}>
          {!isConnected 
            ? 
            <ConnectWalletComp onConnectWallet={handleConnectWallet} /> 
            :
            
              
              <BuyTokenComp onBuyTokens={buyTokens} rate={rate} balance={balance} signerAddress={signerAddress} />
                      
          }

        

        </Box>
      </Modal>
   
      
}

export default BuyTokenModal;
