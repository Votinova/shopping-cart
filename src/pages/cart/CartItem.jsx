import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';




export const CartItem = (props) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
  const {id, productTitle, price, productImage} = props.data
    return (
    <div className='cartItem'>
        <br />
        <img src={productImage} />
        <div className='description'>
            <p>
               
                <b>{productTitle}</b>
            </p>
            <br />
            <p>{price}</p>
            <div className='countHandler'>
              <button onClick={() => removeFromCart(id)}> - </button>
              <input value={cartItems[id]} onChange={e => updateCartItemCount(id, Number(e.target.value))}/>
              <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  )
}
