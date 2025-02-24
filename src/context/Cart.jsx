import React, { createContext, useState } from 'react';
export const CartContext = createContext(null);

const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(1);

    function increment(){
      setCount(count + 1);
    }
    function decrement(){
      setCount(count > 1 ? count - 1 : 1);
    }
    function removeFromCart(id) {
      setItems((prevItems) => prevItems.filter(item => item.id !== id));
    }
  return (
    <CartContext.Provider value={{items, setItems, removeFromCart, count, setCount, increment, decrement}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;