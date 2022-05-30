import React from 'react';
import { useGlobalContext } from '../context';
// import components
import Loading from './Loading';
import CartItem from './CartItem';

const CartArea = () => {
  const {cart,loading,total,clearCart} = useGlobalContext();

  if (loading){
    return <Loading />;
  }
  if (cart.length === 0) {
    return <section className='empty-cart section'>
      <h3> your bag is empty</h3>
    </section>
  }
  return (
    <section className='cart-area'>
      <div className='cart-area-header'>
        <h3>your bag</h3>
      </div>
      {cart.map(cartItem => {
        return <CartItem key={cartItem.id} { ...cartItem} />
      })}
      <footer className='area-footer'>
        <hr />
        <div className='total'>
          <h4>total</h4>
          <h4>${total}</h4>
        </div>
         <button className='remove-all-btn' onClick={clearCart}>claer cart</button>
      </footer>
    </section>
  )
}

export default CartArea