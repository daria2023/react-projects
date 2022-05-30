import React from 'react'
import { useGlobalContext } from '../context';

export default function Form() {

    const {item,setItem,onFormSubmit} = useGlobalContext();
    
  return (
    <div className='form'>
        <form className='form-control' onSubmit={onFormSubmit}>
            <input className='form-input' value={item} onChange={(e=>setItem(e.target.value))} />
            <button type="submit-btn" onClick={onFormSubmit} className="submit-btn">Submit</button>
        </form>
    </div>
  )
}
