import React,{useState} from 'react'

const Tour = ( {tour,deleteItem} ) => {
    const {id, image, info, name, price} = tour;
    const [show,setShow] = useState(false);
  return (
    <article className='tour'>
        <img className='tour-img' src={image} />
        <header className='tour-header'>
            <h4>{name}</h4>
            <h4>${price}</h4>
        </header>
        <div className='tour-info'>
            <p>
                {show ? `${info}` : `${info.slice(0,200)}...`}
                <button className='btn' onClick={()=>setShow(!show)}>{show ? 'show less' : 'read more'}</button>
            </p>
            
        </div>
        <button className='delete-btn' onClick={()=>deleteItem(id)}>not interested</button>
    </article>
  )
}

export default Tour