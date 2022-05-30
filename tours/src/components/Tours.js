import React from 'react';
import Tour from './Tour';

const Tours = ( {tours,deleteItem} ) => {

  return (
    <div className='tours'>
        <h3 className='header'>tours</h3>
        {tours.map(tour => {
            const {id} = tour;
            return <Tour key={id} tour={tour} deleteItem={deleteItem} />
        })}</div>
  )
}

export default Tours