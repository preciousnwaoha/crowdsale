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
import BuyProcessing from "./BuyProcessing"

type propTypes = {
  onBuyTokens: (amount: number) => Promise<any>,
  rate: number,
  balance: number,
  signerAddress: string,
}

const BuyTokenComp = ({ onBuyTokens,  rate, signerAddress, balance}: propTypes) => {
const [amount, setAmount] = useState(0)
  const [hasError, setHasError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState("")
 const [processingBuy, setProcessingBuy] = React.useState(false)
  


  const handleBuyTokens =  (event: React.FormEvent) => {
    event.preventDefault()
    
    setProcessingBuy(true)
    onBuyTokens(amount).then((response:any) => {
      console.log("response: ", response)
      return response
    })
      .then((data: any) => {
        console.log("data: ", data)
      })
      .catch((err: any)=> {
        console.log("err.message: ", err.message)
        console.log("err.code: ", err.code)
        setHasError(true)
      setErrorMessage(err.message)
    })
    
    setAmount(0)
    setProcessingBuy(false)
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const target = e.target as HTMLInputElement;
  // console.log(target.value)
    
  setHasError(false)
      setErrorMessage("")
  setAmount(parseFloat(target.value));
 }


  

  
  
  return <>
              {processingBuy 
                ?
                <BuyProcessing />
                :
                <>
                <Typography variant="h4">{signerAddress}</Typography>
              <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              }} >
                <Typography variant="body1">
                  ETH: {balance}</Typography>
                <Typography variant="body1">
                  PIN: {balance}</Typography>
              </Box>
              <Box component="form" onSubmit={handleBuyTokens} sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              
              }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
          Eth Amount
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          type="number"
          required={false}
          value={amount}
          error={hasError}
          onChange={handleAmountChange}
          
        />
        <FormHelperText>{!!hasError ? errorMessage : `1 Eth = ${rate} PIN`}</FormHelperText>
      </FormControl>

      
            {(amount > 0) && <Typography variant="body1" component="h1" gutterBottom>
            You will receive &#8776; {(rate * amount).toFixed(18)} PIN
            </Typography>}
                        <Button type="submit">
          BUY PIN TOKEN
        </Button>
          </Box>
                </>
                }
            </>
   
      
}

export default BuyTokenComp;
