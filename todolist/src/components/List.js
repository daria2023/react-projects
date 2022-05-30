import React from 'react';
import { useGlobalContext } from '../context';
import {FiEdit} from 'react-icons/fi';
import {FiCheckSquare} from 'react-icons/fi'



export default function List() {
    const {list,deleteItem,editItem} = useGlobalContext();
    
    return (
    <div className='list'>{list && list.map(listItem => {
        const {id,itemContent} = listItem
        return( 
            <div className='list-item' key={id}>
                  <p>{itemContent}</p>
                   <button className='btn edit-btn' onClick={()=>editItem(id)}>
                       <FiEdit />
                     </button>
                    <button className='btn check-btn' onClick={()=>deleteItem(id)}>
                        <FiCheckSquare />
                   </button>
                  
            </div>)
    })}</div>
  )
}
