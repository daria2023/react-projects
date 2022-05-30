import React from 'react'
import Item from './Item';

const Menu = ( {menu}) => {
  return (
    <div className='menu'>
        {menu.map(item => {
            const {id} = item;
            return <Item className='item' key={id} item={item} />
        })}
    </div>
  )
}

export default Menu