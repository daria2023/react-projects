import React from 'react'

const Navbar = ( {items,changeMenu}) => {

  
   
   
  return (
    <nav className='navbar'>
        <ul className='nav-items'>
        {items.map((item,idx) => {
            return <li className='nav-item' key={idx}>
                <button className='btn' onClick={(e)=>changeMenu(e)}>{item}</button>
            </li>
        })}
        </ul>
    </nav>
  )
}

export default Navbar