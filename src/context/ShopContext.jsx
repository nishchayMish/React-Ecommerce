import React, { createContext, useEffect, useState } from 'react'
import { products } from '../assets/frontend_assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ShopContextProvider = ({children}) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});


    const addToCart = async(itemId, size) =>{

        if(!size){
            toast.error('Please select a size');
            return;
        }

        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                // is item k count ko increase krdo
                cartData[itemId][size] += 1;
            }
            else{
                // we have product entry we dont have the product entry 
                // with the same size
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    }

    useEffect(()=>{
        // console.log("cartItems updated:", cartItems);
    },[cartItems])

    const getCartCount = () => {
        let totalCount = 0;
        for (let items in cartItems) {
            for (let item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item]; 
                }
            }
        }
        return totalCount;
    };
    
    const updateQuantity = async(itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find(product => product._id === items);
            for(const item in cartItems[items]){
                try{
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
                catch(e){
                    console.log(e);
                }
            }
        }
        return totalAmount;
    }

    const value = {
        products, currency, delivery_fee,search, 
        setSearch, showSearch, setShowSearch, cartItems,
        addToCart, getCartCount, updateQuantity, getCartAmount
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;