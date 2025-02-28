import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products } = useContext(ShopContext);
  return (
    <div className='border-t pt-16 px-4 md:px-8 lg:px-16 bg-gray-50 min-h-screen'>
      <div className='text-center mb-8'>
        <Title text1={'YOUR'} text2={'ORDERS'} />
      </div>
      <div className='space-y-6'>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className='p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-6'
          >
            <div className='flex flex-col sm:flex-row items-center gap-6 w-full'>
              <img src={item.image[0]} className='w-20 h-20 object-cover rounded-lg' alt={item.name} />
              <div className='flex-1'>
                <p className='text-lg font-semibold'>{item.name}</p>
                <div className='flex flex-wrap gap-4 mt-2 text-gray-600 text-sm'>
                  <p className='font-medium'>{item.currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className='mt-2 text-gray-500 text-sm'>Date: <span className='text-gray-400'>25 July, 2024</span></p>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-3 h-3 rounded-full bg-green-500'></span>
                <p className='text-sm md:text-base text-green-600'>Ready To Ship</p>
              </div>
            </div>
            <div className='w-full md:w-auto flex flex-col md:flex-row md:items-center md:justify-end gap-4'>
              <button className='border border-gray-300 px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-100 transition'>Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
