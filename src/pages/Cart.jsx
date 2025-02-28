import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { cartItems, products, currency, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14 px-4 md:px-8'>
      <div className='text-2xl mb-5 text-gray-800 font-semibold'>
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div className='mt-6 border border-gray-300 rounded-lg shadow-sm bg-white p-4 md:p-6'>
        {cartData.length > 0 ? (
          cartData.map((item, index) => {
            const productsData = products.find((product) => product._id === item._id);
            return (
              <div
                key={index}
                className='flex flex-wrap sm:flex-nowrap items-center justify-between border-b py-4 last:border-b-0'
              >
                {/* Product Image & Info */}
                <div className='flex items-center gap-4 sm:gap-6 w-full sm:w-auto'>
                  <img className='w-16 sm:w-24 rounded-md' src={productsData.image[0]} alt={productsData.name} />
                  <div>
                    <p className='text-sm sm:text-lg font-semibold text-gray-700'>{productsData.name}</p>
                    <div className='flex items-center gap-3 mt-2 text-gray-600 text-sm'>
                      <p className='font-medium text-gray-800'>{currency}{productsData.price}</p>
                      <p className='px-3 py-1 border rounded-md shadow-sm bg-gray-50'>{item.size}</p>
                    </div>
                  </div>
                </div>

                {/* Quantity Input */}
                <input onChange={(e)=>e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                  className='mt-2 border rounded-md w-12 sm:w-16 px-2 py-1 text-center text-gray-700 outline-none focus:ring focus:ring-indigo-200 transition'
                  type='number'
                  min={1}
                  defaultValue={item.quantity}
                />

                {/* Delete Button */}
                <button
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className='w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 transition text-white rounded-full shadow-md cursor-pointer'
                >
                  <img className='w-4' src={assets.bin_icon} alt="Remove" />
                </button>
              </div>
            );
          })
        ) : (
          <p className='text-gray-500 text-center py-6'>Your cart is empty.</p>
        )}
      </div>

      <div className='flex justify-end my-10'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal/>
        </div>
      </div>
      <button onClick={()=>navigate('/place-order')} 
        className="mt-6 w-full bg-black text-white py-3 rounded-md text-sm font-medium hover:bg-gray-900 transition cursor-pointer">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
