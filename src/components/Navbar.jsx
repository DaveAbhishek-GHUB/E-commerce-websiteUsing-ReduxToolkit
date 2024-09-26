/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Navbar() {
  const products = useSelector((state) => state.cart.items);

  return (
    <>
        <div className="main-header-wrapper w-full h-[5vw] border-2 flex justify-between items-center px-5">
            <div className="Logo-wrapper">
              <Link to="/">
                <h1 className='text-[2vw] font-bold'>Logo</h1>
              </Link>
            </div>
            <div className="NavLinks-wrapper flex gap-10">
                <Link to="/">🏠 Home</Link>
                <Link to="/cart">🛒 Cart<sup className='bg-green-400 text-white text-[0.8vw] p-1 rounded-full'>{products.length}</sup></Link>
            </div>
        </div>
    </>
  )
}

export default Navbar