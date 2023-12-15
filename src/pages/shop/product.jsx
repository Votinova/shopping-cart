import React, { useContext} from 'react';
import { ShopContext } from '../../context/shop-context';


export const Product = (props) => {
 
    const {id, productTitle, price, productImage} = props.data;

 const { addToCart, cartItems } = useContext(ShopContext);
 const countItem = cartItems[id];
 
 return (
    <div className='product'>
        <img src={productImage} />
        <br />
        <div className='description'>
            <p>
                
                <b>{productTitle}</b>
            </p>
            <br />
            <p> {price}</p>
            <br />
        </div>
        <button className='btnToAddCart' onClick={() => addToCart(id)}>
            Добавить в корзину {cartItems[id] > 0 && <>({countItem}) </>}
        </button>
    </div>
  )
}
