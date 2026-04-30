import React from 'react'
import Navbar from '../components/Navber'

export default function MainLayout({ children }) {
  return (
    <div>
        <Navbar></Navbar>
        {children}
        </div>
  )
}
