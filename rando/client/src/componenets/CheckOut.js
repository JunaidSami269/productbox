import React, { useState, useEffect } from 'react'

function CheckOut({handleDeleteCartItem}) {

  const [cartItems, setCartItems] = useState([]);
  //const items = JSON.parse(localStorage.getItem('cartItems')) || [];

  const handleRemoveItem=(i)=>{
    handleDeleteCartItem(i)
    console.log("I");
    console.log("item");
  }

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (item) {
        setCartItems(item);
    }
}, []);
  
  useEffect(() => {
    console.log("useeffect called");
    const listenStorageChange = () => {
      setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])
      console.log("listner calledd");
    };
    window.addEventListener("storage", listenStorageChange);
    return () => window.removeEventListener("storage", listenStorageChange);
  }, []);


  return (<table className='styled-table'>
    <thead>
    {cartItems.length>0 &&
    <tr>
    <th>NO</th>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
    <th>Image</th>
    <th>Actions</th>
  </tr>
    }
    </thead>
    <tbody>
      {cartItems.map((item,i) => (
        <tr key={i}>
          <td>{i+1}</td>
          <td>{item.id}</td>
          <td>{item.price}</td>
          <td>{item.name}</td>
          <td><img className='img' src={item.img} alt="img" /></td>
          <td><button onClick={()=>{handleRemoveItem(i,item)}}>Remove To Cart</button></td>
        </tr>
      ))}
    </tbody>
  </table>)
}

export default CheckOut