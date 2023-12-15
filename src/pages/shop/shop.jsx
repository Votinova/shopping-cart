import React, { useEffect } from 'react'
import {PRODUCTS} from '../../product.js';
import { Product } from './product.jsx';
import './shop.css';
import { ShopContext } from '../../context/shop-context.jsx';
import { useContext } from 'react';

export const Shop = () => {
  const { cartItems } = useContext(ShopContext)
    

  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Магазин</h1>
        </div>
        <div className='products'>
            {PRODUCTS.map((product) => {
                return <Product data={product} />
            } )}
        </div>
    </div>
  )
}
