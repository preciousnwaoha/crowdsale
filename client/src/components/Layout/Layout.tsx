import React from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"

type propTypes ={
  children: React.ReactNode,
  isConnected: boolean,
}

const Layout = ({children, isConnected}: propTypes) => {
  return <>
      <Navbar isConnected={isConnected} />
    
    {children}
    
      <Footer />
      </>
}

export default Layout