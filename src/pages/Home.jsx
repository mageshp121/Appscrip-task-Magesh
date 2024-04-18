import React, { useState } from 'react'
import './Home.css'
import Navbar from '../componets/navbar/Navbar';
import HeaderDown from '../componets/header-down/HeaderDown';
import Body from '../componets/body/Body';
function Home(){

  return (
    <>
   <Navbar/>
  <HeaderDown/>
  <Body/>
</>
  )
}

export default Home