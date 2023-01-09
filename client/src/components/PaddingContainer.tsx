import React from "react"
import Container from '@mui/material/Container';

type propTypes = {
  children: React.ReactNode,
}

const PaddingContainer = ({children} : propTypes) => {
  
  
  return <Container maxWidth="sm" sx={{
      border: 1,
      minHeight: "calc(100vh - 4rem)",
    position: "relative",
    }}>
    {children}
    </Container> 
}

export default PaddingContainer