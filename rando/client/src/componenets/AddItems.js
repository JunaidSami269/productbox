import React, { useState } from 'react'

function AddItems() {

  const [name, setName] = useState('name');
  const [price, setPrice] = useState('price');
  const [img, setimg] = useState('image url');


  const url = 'http://localhost:3001/items'

  const handleUserName = (e) => {
    setName(e.target.value)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const handleImg = (e) => {
    setimg(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(url,{
      method:"post",
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name:name,
        price:price,
        img:img
      })
    })
    .then(()=>{
      setName("name")
      setPrice("price")
      setimg("image url")
      alert("Data added successfully")
    })
  }



  return (
    <>
      <form  onSubmit={handleSubmit}>
        <div className='form-element'>
          <label>Item Name </label>
          <input type="text" value={name} onChange={handleUserName} />
        </div>
        <div className='form-element'>
          <label>Price </label>
          <input type="text" value={price} onChange={handlePrice} />
        </div>
        <div className='form-element'>
          <label>Image </label>
          <input type="text" value={img} onChange={handleImg} />
        </div>
        <div className='form-element'>
          <button type='submit' >Submit</button>
        </div>
      </form>


    </>
  )
}

export default AddItems