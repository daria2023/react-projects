import React from 'react';
import { useGlobalContext } from '../context';
import Item from './Item';

const List = () => {

    const {drinks,err} = useGlobalContext();

    if (err){
        return <h3 className='alert-header'>
            nothing find yet
        </h3>
    }

    

  return (
    <div className='home-drinks'>
        <h3 className='list-header'>cocktails</h3>
        {drinks.map( drink => {
            return <Item key={drink.id} drink={drink}/>
        })}
    </div>
  )
}

export default List