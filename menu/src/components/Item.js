import React from 'react'

const Item = ( {item} ) => {
    const {id, title, category, price,img, desc} = item;
  return (
    <article className='item'>
        <img src={img} alt={title} />
        <div className='item-desc'>
        <header>
            <h4>{title}</h4>
            <h4 className='price'>${price}</h4>
        </header>
        <div className='info'>
            <p>{desc}</p>
        </div>
        </div>
    </article>
  )
}

export default Item