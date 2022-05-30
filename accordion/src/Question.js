import React,{useState} from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa';

const Question = ( {question}) => {
    const {title, info} = question;
    const [show,setShow] = useState(false);

  return (
    <div className='que'>
        <div className='q-header'>
            <h4>{title}</h4>
            <button className='btn' onClick={()=>setShow(!show)}>
               {show ? <FaMinus /> : <FaPlus />}
            </button>
        </div>
        <div className={`${show? 'q-content show':'q-content'}`}>
            <p>{info}</p>
        </div>
    </div>
  )
}

export default Question