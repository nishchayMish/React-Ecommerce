import React, { useContext, useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { CartContext } from '../context/Cart';

const Card = ({item}) => {
  const { id, title, img, reviews, newPrice, prevPrice } = item;
  const [isLiked, setIsLiked] = useState(false);

  const {items, setItems} = useContext(CartContext);
  
  function AddToCart(id) {
    const existingProduct = items.find((cartItem) => cartItem.id === id);
    
    if (!existingProduct) {
        setItems([...items, { id: id, name: title, image: img, price: newPrice }]);
    }
}

  return (
    <div key={id} className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 flex flex-col h-full border border-gray-200">
      <div className="w-full flex justify-center bg-[#ffffff] p-4">
          <img src={img} alt={title} className="w-full max-w-xs h-52 object-contain" />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>

        <div className="flex items-center mb-3">
          <span className="text-yellow-400 text-lg">★★★★☆</span>
          <span className="text-sm text-gray-600 ml-2">{reviews}</span>
        </div>

        <div className="flex items-center space-x-3 mb-4">
          <span className="text-xl font-bold text-blue-600">${newPrice}</span>
          <span className="text-sm text-gray-400 line-through">{prevPrice}</span>
        </div>
        
        <button onClick={() =>AddToCart(id)}
        className="mt-auto flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md">
          Add to Cart <span><AiOutlineShoppingCart/></span>
        </button>
      </div>

      <div className="absolute top-5 right-5 cursor-pointer"
        onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
      </div>
    </div>
  )
}

export default Card