import React, { useContext } from 'react';
import { PRODUCTS } from '../../product';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './CartItem';
import './Cart.css';
import {Link} from 'react-router-dom';


export const Cart = () => {
  
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalSum = getTotalCartAmount();  
  console.log(totalSum)
  return (
    <div className='cart'>
        <div>
            <h1 className='ShopTitle'>
                Товары в корзине
            </h1>
        </div>
        <div className="cartItems">
        {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
                return <CartItem data={product}/>
            }
        })}

        </div>
        <div className='checkout'>
           {getTotalCartAmount() === 0 ? 
              <>
              <div> <b>Ваша корзина пуста </b> </div>
              <Link to="/shop">
                  <button className='btnCart'> Продолжить покупки</button>
              </Link>
              </> :
           <>
            <p>
             <b>Итоговая сумма: {getTotalCartAmount()} </b>   
            </p>
            <div className='buttons'>
            <Link to="/shop">
                <button className='btnCart'> Продолжить покупки</button>
            </Link>
           
            <button className='btnCart'> Оформить заказ</button> 
            </div>
            </> 
            }
         
      
        
            
        </div>

    </div>
  )
}
