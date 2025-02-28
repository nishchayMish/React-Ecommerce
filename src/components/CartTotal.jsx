import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

  return (
    <div className="w-full bg-white shadow-lg rounded-lg p-6 border border-gray-200">
      {/* Cart Total Title */}
      <div className="text-2xl text-gray-800 font-semibold mb-4">
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      {/* Pricing Details */}
      <div className="flex flex-col gap-3 text-gray-600 text-sm">
        <div className="flex justify-between">
          <p>Subtotal:</p>
          <p className="font-medium text-gray-800">{currency}{subtotal}.00</p>
        </div>
        <hr />

        <div className="flex justify-between">
          <p>Shipping Fee:</p>
          <p className="font-medium text-gray-800">{currency}{delivery_fee}.00</p>
        </div>
        <hr />

        <div className="flex justify-between text-lg font-semibold text-gray-900 mt-2">
          <b>Total:</b>
          <p>{currency}{total}.00</p>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default CartTotal;
