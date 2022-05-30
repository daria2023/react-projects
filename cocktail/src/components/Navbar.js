import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../logo.png'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className='logo-container'>
            <Link to='/'><img src={logo} alt='logo' /></Link>
        </div>
        <ul className='nav-items'>
            <li className='nav-item'>
                <Link to='/'>Home</Link>
            </li>
            <li className='nav-item'>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar