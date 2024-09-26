/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../Store/cartSlice';

function HomePage() {
    const cartedProducts = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const fetchData = () => {
        fetch("https://mocki.io/v1/a1d61e67-4049-43bf-857d-574962608711")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        });
        console.log(products);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addToCart = (item) => {
        dispatch(add(item))
    }

    const product = products.slice(0, 20).map((item)=>(
        <div className="card bg-white rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105" key={item.id}>
            <div className="image-wrapper relative">
                <img className='w-full h-48 object-cover' src={item.image} alt={item.title} />
                <button 
                    onClick={()=>addToCart(item)} 
                    className='absolute right-2 bottom-2 text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-lg text-sm font-semibold transition-colors duration-300'
                >
                    Add to cart
                </button>
            </div>
            <div className="product-info p-4 flex flex-col justify-end">
                <p className='font-semibold text-lg mb-2 line-clamp-2'>{item.title}</p>
                <span className='text-xl font-bold text-blue-600'>$ {item.price.toFixed(2)}</span>
            </div>
        </div>
    ));

  return (
    <div className="min-h-screen">
        <Navbar/>
        <div className="main-wrapper container mx-auto px-4 py-8">
            <h1 className='font-sans text-4xl font-bold text-gray-800 mb-8'>Top Picks</h1>
            <div className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {product}
            </div>
        </div>
    </div>
  )
};

export default HomePage