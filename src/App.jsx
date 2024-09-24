import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


import Home from "./Home"
import Menu from "./Menu"
import Cart from "./Cart";
import Header from "./components/Header";

function App() {

  const [cartItems, setCartItems] = useState(() => {

  const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.id === item.id);

      if (itemExists) {
        // თუ პროდუქტი უკვე კალათაშია, მხოლოდ რაოდენობა გაიზარდოს
        const updatedCart = prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        // თუ პროდუქტი ახალია, დაამატეთ კალათაში რაოდენობით 1
        const updatedCart = [...prevItems, { ...item, quantity: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  // რაოდენობის შემცირება
  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems
        .map((item) =>
          item.id === itemId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0); // თუ რაოდენობა 0-ზე ნაკლებია, პროდუქტი ამოიშლება
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };


  const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) => {
      const updatedCart = prevItems.filter(item => item.id !== itemToRemove.id);
      localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };




  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  const clearCart = () => {
    setCartItems([]); // აქ კალათა ცარიელდება
    localStorage.removeItem('cartItems'); // ამავე დროს, კალათის მონაცემები ადგილობრივი მეხსიერებიდანაც წაიშლება
  };

  return (
    <>
      <Router>
        <Header itemCount={cartItems.length} /> 
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Menu" element={<Menu addToCart={addToCart} />} >   </Route>
          <Route path="/Cart" element={
            <Cart items={cartItems} 
                  removeFromCart={removeFromCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  clearCart={clearCart}
                  />} >  </Route>


        </Routes>
      </Router>

    </>
  )
}

export default App
