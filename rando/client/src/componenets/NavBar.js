import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const [cartItems, setCartItems] = useState([]);

  //on pageload
  useEffect(() => {

    const item = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(item);
    
  }, []);

  //on page update
  useEffect(() => {
    const listenStorageChange = () => {
      setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])
      
    };
    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
  }, []);

  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/items'>Items</NavLink>
      <NavLink to='/additems'>AddItems</NavLink>
      <NavLink to='/checkout'>Checkout <span className='cart-item'>{cartItems.length}</span></NavLink>
    </nav>
  )
}

export default NavBar