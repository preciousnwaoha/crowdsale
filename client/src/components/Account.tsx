import React from "react"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';

type propTypes = {
  isConnected: boolean,
  signerAddress: string,
  balance: number,
onConnectWallet: () => {}
}

const Account = ({isConnected, signerAddress, balance, onConnectWallet} : propTypes) => {
    const [loadingSigner, setLoadingSigner] = React.useState(false)

    const handleConnectWallet = () => {
        onConnectWallet();
    }   

  return <>
    {isConnected ? <Box>
          
            {!loadingSigner && <>
              <Typography variant="body2" component="p" gutterBottom>
          Address: {signerAddress}
            </Typography>
            <Typography variant="body2" component="p" gutterBottom>
          You have {balance} PIN Coin
            </Typography>
            </>}
            {loadingSigner && <Typography variant="body2" component="p" gutterBottom>
          Loading Account
            </Typography>
            }
            <Button onClick={handleConnectWallet}>
            Refresh Wallet Data
          </Button>
          </Box> : <Box>
          
          <Button onClick={handleConnectWallet}>
            buy pin token
          </Button>
          </Box> }
  </>
}