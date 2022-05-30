import React from 'react';
// // import hook
import { useGlobalContext } from '../context';
// import icon
import {HiOutlineShoppingBag} from 'react-icons/hi';

const Navbar = () => {
    const {amount} = useGlobalContext();

  return (
    <nav className='navbar'>
        <div className='logo'>
            <h3 className='useReducer'>useReducer</h3>
        </div>
        <div className='bag-icon'>
            <HiOutlineShoppingBag className='bag' />
            <div className='bag-num'>{amount}</div>
        </div>
    </nav>
  )
}

export default Navbar