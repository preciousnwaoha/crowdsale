import React from "react"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import PaddingContainer from "./PaddingContainer"
import PlanetImg from "../../public/planet-1.png"
type propTypes = {
  tokenAddress: string,
  totalSupply: number,
}

const About = ({tokenAddress, totalSupply} : propTypes) => {
  return <Box component="section">
    <PaddingContainer>
      <Typography variant="h3" component="h2" sx={{
    textAlign: "center"
      }}>About </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h3">The road to mars</Typography>
          <Typography variant="body1">PIN Coin is coming out the gate barking, becoming one of the biggest hyped meme coins of all time and pushing the boundaries of the Play-to-Earn space, in order to provide a game that people will be climbing over each other to use.</Typography>
          <Typography variant="body1">PIN Coin is coming out the gate barking, becoming one of the biggest hyped meme coins of all time and pushing the boundaries of the Play-to-Earn space, in order to provide a game that people will be climbing over each other to use.</Typography><Typography variant="body1">PIN Coin is coming out the gate barking, becoming one of the biggest hyped meme coins of all time and pushing the boundaries of the Play-to-Earn space, in order to provide a game that people will be climbing over each other to use.</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            width: "100%",
            "& img": {
              width: "100%",
              objectFit: "contain",
            }
          }}>
            <img src={PlanetImg} alt="planet" />
          </Box>
          
        </Grid>
        <Grid item xs={12} md={6} sx={{
    display: {xs: "none", md: "flex"}
        }}>
          <Box sx={{
            width: "100%",
            "& img": {
              width: "100%",
              objectFit: "contain",
            }
          }}>
            <img src={PlanetImg} alt="planet" />
          </Box>
          
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h5">Token Address</Typography>
          <Typography variant="body1">{tokenAddress}</Typography>
          <Typography variant="h5" component="h5">Total Supply</Typography>
          <Typography variant="body1">{totalSupply}</Typography>
          
        </Grid>
        <Grid item xs={12} md={6} sx={{
    display: {xs: "flex", md: "none"}
        }}>
          
          <Box sx={{
            width: "100%",
            "& img": {
              width: "100%",
              objectFit: "contain",
            }
          }}>
            <img src={PlanetImg} alt="planet" />
          </Box>
           <Typography variant="h4" component="h4">Polygon Chain</Typography>
        </Grid>
      </Grid>
    </PaddingContainer>
  </Box>
}

export default About