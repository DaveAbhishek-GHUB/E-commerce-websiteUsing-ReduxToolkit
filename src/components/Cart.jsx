/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../Store/cartSlice';

function Cart() {
  const products = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const product = products.slice(0, 20).map((item) => (
    <div className="card w-full bg-white rounded-lg overflow-hidden flex my-4" key={item.id}>
      <div className="image-wrapper w-1/4 p-4">
        <img className='rounded-lg w-full h-40 object-cover' src={item.image} alt={item.title} />
      </div>
      <div className="product-info w-3/4 flex flex-col sm:flex-row justify-between items-center p-4">
        <div className="name_and_price flex-grow">
          <h2 className='font-semibold text-lg mb-2'>{item.title}</h2>
          <span className='text-xl font-bold text-blue-600'>$ {item.price.toFixed(2)}</span>
        </div>
        <button 
          onClick={() => removeToCart(item.id)} 
          className='mt-4 px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition-colors duration-300 flex items-center'
        >
          Remove item
        </button>
      </div>
    </div>
  ));

  const removeToCart = (id) => {
    dispatch(remove(id))
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      {product.length > 0 ? (
        <div className="main-wrapper container mx-auto px-4 py-8">
          <h1 className='font-sans text-3xl md:text-4xl font-bold text-gray-800 mb-6'>Your Cart</h1>
          <div className="cards-wrapper">
            {product}
          </div>
          <div className="Total-wrapper">
            <span></span>
          </div>
        </div>
      ) : (
        <div className="empty-cart-wrapper flex items-center justify-center">
          <p className="text-xl text-gray-600">Your cart is empty. Start shopping to add items!</p>
        </div>
      )}
    </div>
  )
}

export default Cart