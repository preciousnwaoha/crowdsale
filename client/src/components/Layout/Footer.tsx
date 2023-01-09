import React from "react";
import {Link as RouterLink} from "react-router-dom"
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';

const DEFAULT_LINKS = [
  {
    link: "/home",
    text: "Home",
  },
  {
    link: "/whitepaper",
    text: "Whitepaper",
  },
  {
    link: "/roadmap",
    text: "Roadmmap",
  },
]

const DEFAULT_SOCIALS = [
  {
    link: "/twitter",
    text: "Twitter",
  },
  {
    link: "/discord",
    text: "Discord",
  },
  {
    link: "/Telegram",
    text: "Telegram",
  },
]

const Footer = () => {
  return <Box component="footer" sx={{
    bgcolor: "red",
    py: 4,
  }}>
    <Container maxWidth="sm" sx={{
      border: 1,
      
    }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>  
          <Typography variant="h4">Crowdsale</Typography>
          <Typography variant="body1">Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>  
          <Typography variant="h4">Links</Typography>
          <ul style={{
    paddingLeft: 0,
    listStyle: 'none',
          }}>
            {DEFAULT_LINKS.map(page => {
              return <li key={page.link}>
                <Typography><RouterLink to={page.link}>{page.text}</RouterLink></Typography>
              </li>
            })}
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>  
          <Typography variant="h4">Community</Typography>
          <ul style={{
    paddingLeft: 0,
    listStyle: 'none',
          }}>
            {DEFAULT_SOCIALS.map(social => {
              return <li key={social.link}>
                <Typography><a href={social.link}>{social.text}</a></Typography>
              </li>
            })}
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>  
          <Typography variant="h4">Disclaimer</Typography>
          <Typography variant="body1">Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" color="text.secondary" align="center" sx={{mt: 2}}>
      {'Copyright © '}
      <Link color="inherit" href="https://preciousnwaoha.github.io/">
        Crowdsale
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
    </Container>
      
      </Box>
}

export default Footer;