import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import About from './pages/about/About'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin?<LoginPopup setShowLogin = {setShowLogin}/>:<></>}
    <div className='app'>
      < Navbar setShowLogin = {setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
