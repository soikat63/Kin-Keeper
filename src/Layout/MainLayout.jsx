import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/UI/Navbar/Navbar'
import Footer from '../components/UI/FooterSection/Footer'

const MainLayout = () => {
  return (
      <>
          
          <Navbar />
      <Outlet />
      <Footer/>
    </>
  )
}

export default MainLayout