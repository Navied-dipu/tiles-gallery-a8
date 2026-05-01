import React from 'react'
import Navbar from '../components/Navber'
import Footer from '../components/Footer'

export default function MainLayout({ children }) {
  return (
    <div>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </div>
  )
}
