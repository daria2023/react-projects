import React  from 'react';
import Color from './Color';

const List = ( {colors} ) => {

       
  return (
   <div className='colors'>
     {colors.map((color,index)=>{
       return <Color key={index} color={color} index={index}/>
     })}

   </div>
  )
}

export default List