import React from 'react';

const List = ({list})=>{
    return (
        <div className='list'>
            {list.map( item => {
                const {id, name, image, age} = item;
                return <article className='list-item' key={id}>
                    <img src={image} className='photo' />
                    <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                    </div>
                </article>
            })}
        </div>
    );
}

export default List;