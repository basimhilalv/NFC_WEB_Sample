import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.NFC_Logo} className='logo' alt="" />
      <img src={assets.profile_pic} className='profile' alt="" />
    </div>
  )
}

export default Navbar
