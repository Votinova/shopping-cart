import React, { createContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../product';


export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
   
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: prev[itemId] + 1
        }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev, [itemId] : prev[itemId] - 1
        }))
    };
    const updateCartItemCount = (itemId, newAmount) => {
        setCartItems((prev) => ({
            ...prev, [itemId]: newAmount
        }))
    }
    const countAllItemsCart = () => {
        let totalCount = 0;
        for (const item in cartItems) {
            totalCount += cartItems[item]
        }
        
        return totalCount;
        
    } 
  
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, countAllItemsCart};    
    return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
};
