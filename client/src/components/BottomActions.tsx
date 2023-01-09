import React from "react"
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Logo from "./Logo"

const BottomActions = () => {

  const handleBuyClick = () => {
    console.log("buy")
  }

  const handleHowClick = () => {
    console.log("how")
  }
  
  return <Box sx={{
    py: 4
  }}>
    <Logo />
      <Box sx={{
        display: "flex",
        justifyContent: "center",
      }}>
        <Button>
          BUY PIN TOKEN
        </Button>
        <Button>
          HOW TO BUY
        </Button>
      </Box>
  </Box>
}

export default BottomActions