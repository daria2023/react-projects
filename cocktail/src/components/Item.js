import React from 'react';
import { Link} from 'react-router-dom';

const Item = ( {drink} ) => {
        
    
    const {id,name,glass,alcoholic,image} = drink;
  

  return (
    <article className='drink'>
        <img src={image} alt={name} />
        <header className='drink-header'>
            <h3 className='drink-name'>{name}</h3>
            <h4 className='drink-glass'>{glass}</h4>
            <p className='drink-alcoholic'>{alcoholic}</p>
            <Link to={`/cocktail/${id}`}>
            <button className='btn detail-btn'>detail</button>
            </Link>
            
        </header>  
        
    </article>
  )
}

export default Item