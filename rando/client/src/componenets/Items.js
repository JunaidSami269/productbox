import React, { useEffect, useState } from 'react'
import Search from './Search';

function Items({ handleCart }) {

  const [data, setdata] = useState([]);
  const url = 'http://localhost:3001/items';

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      }).then((data) => {
        setdata(data);
      })

  }, [])


  const handleCartButton = (item) => {

    handleCart(item)

  }

  const handleSearch = (searchInput) => {
    //search item

    if (searchInput.length > 0) {
      const newdata = data.filter((item) => {
        return item.name.toLowerCase().match(searchInput.toLowerCase());
      });
      if (newdata.length !== 0) {
        setdata(newdata);
      }
    } else if (searchInput.length === 0) {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        }).then((data) => {
          setdata(data);
        })
    }

  }

  return (<>
    <Search searchItem={handleSearch} />
    <table className='styled-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.price}</td>
            <td>{item.name}</td>
            <td><img className='img' src={item.img} alt="img" /></td>
            <td><button onClick={() => { handleCartButton(item) }} >Add To Cart</button></td>
          </tr>
        ))}
      </tbody>
    </table></>)
}



export default Items