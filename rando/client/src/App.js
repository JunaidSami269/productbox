import { Routes, Route } from "react-router-dom";
import './App.css';
import AddItems from "./componenets/AddItems";
import CheckOut from "./componenets/CheckOut";
import Home from "./componenets/Home";
import Items from "./componenets/Items";
import NavBar from "./componenets/NavBar";
import NoMatchRoute from "./componenets/NoMatchRoute";

function App() {
  const handleCart = (item) => {
    try {
          //get cart item
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    //push new item to existing items
    cartItems.push(item);
    //push updatet item list
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.dispatchEvent(new Event("storage"));
    } catch (error) {
      console.log("error:",error);
    }
  }


  const handleDeleteCartItem = (i) => {
    //get cart items
    const lsItems = JSON.parse(localStorage.getItem('cartItems'));
    //remove selected item
    lsItems.splice(i, 1)
    //push updated item list
    localStorage.setItem('cartItems', JSON.stringify(lsItems));
    window.dispatchEvent(new Event("storage"));
  }


  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='checkout' element={<CheckOut handleDeleteCartItem={handleDeleteCartItem} />} />
        <Route path='items' element={<Items handleCart={handleCart} />} />
        <Route path='additems' element={<AddItems />} />
        <Route path='*' element={<NoMatchRoute />} />

      </Routes>
    </>
  );
}

export default App;
