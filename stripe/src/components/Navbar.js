import React from 'react';
import logo from '../images/logo.svg'
import {FaBars} from 'react-icons/fa';
// context
import { useGlobalContext } from '../context';


const Navbar = () => {
    
    const {openSidebar,data,secondaryMenu,openSecondaryMenu} = useGlobalContext()
    // logo, submenu and sidemenu
    // width>600 submenu
    //width<600 submenu
    
  return (
      <nav className='navbar'>
          <img src={logo} alt='logo' />
          <div className='sub-menu'>
              {data.map((menuItem,idx) => {
                  return  <div className='submenu-item' key={idx}>
                      <button className='menu-btn' onMouseOver={openSecondaryMenu}>{menuItem.page}</button>
                      <div className={`${secondaryMenu ? 'secondary-menu show' : 'secondary-menu'}`}>
                        {menuItem.links.map((link,index) => {
                            return <span key={index}>{link.icon}<a href={link.url}>{link.label}</a></span>
                        })}
                      </div>
                  </div>
              })}
              </div> 
          <div className='btn-area'>
              <button className='open-btn btn' onClick={openSidebar}><FaBars /></button>
              <button className='signin-btn btn'>Sign in</button>
          </div>
      </nav>
  )
}

export default Navbar