import React from 'react';
// import icon
import {MdKeyboardArrowUp,MdKeyboardArrowDown} from 'react-icons/md';
// context
import { useGlobalContext } from '../context';

const CartItem = ({id,title,price,img,amount}) => {
  
    const {removeItem,increaseAmount,decreaseAmount} = useGlobalContext();
    return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div className='item-info'>
            <h4 className='item-title'>{title}</h4>
            <h4 className='item-price'>{price}</h4>
            <button className='remove-btn' onClick={()=>removeItem(id)}>Remove</button>
        </div>
        <div className='item-amount-area'>
            <button className='add-btn amount-btn' onClick={()=>increaseAmount(id)}><MdKeyboardArrowUp /></button>
            <p className='item-amount'>{amount}</p>
            <button className='minus-btn amount-btn' onClick={()=>decreaseAmount(id)}><MdKeyboardArrowDown /></button>
        </div>
    </article>
  )
}

export default CartItem