import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import { ShoppingCart } from '@phosphor-icons/react';
import './navbar.css';
import { ShopContext } from '../context/shop-context';

export const Navbar = () => {
  const { countAllItemsCart } = useContext(ShopContext);
  
  const count = countAllItemsCart();
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/shop"> Магазин </Link>
            
            <Link to="/cart">
                <ShoppingCart size={32} />({count})
            </Link>
            
        </div>
    </div>
  )
}
