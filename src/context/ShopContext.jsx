import React, { createContext } from 'react'
import { products } from '../assets/frontend_assets/assets';
export const ShopContext = createContext(null);

const ShopContextProvider = ({children}) => {
    const currency = '$';
    const delivery_fee = 10;
    const value = {
        products, currency, delivery_fee
    }

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;