import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)

    const[latestProducts, setLatestProducts] = useState([]);
    useEffect(()=>{
        setLatestProducts(products.slice(0,10));
    },[])
   
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={"LATEST"} text2={"COLLECTIONS"} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Explore our latest collections featuring the freshest styles and must-have products. From timeless classics to trendy new arrivals, find everything you need to upgrade your wardrobe, home, or lifestyle. Shop now and stay ahead of the trends!
            </p>
        </div>
        {/* dynamicallly ading products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 space-y-6'>
            {
                latestProducts.map((item,index) => (
                    <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection