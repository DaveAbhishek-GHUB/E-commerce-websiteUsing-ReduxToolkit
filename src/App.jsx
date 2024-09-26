/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import Cart from './components/Cart'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default App
