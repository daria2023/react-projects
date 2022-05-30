import React, { useState} from 'react';
import reviews from './data';
import Review from './Review';
import {FaChevronLeft,FaChevronRight} from 'react-icons/fa'

import './index.css'

const App = () => {
  const [order,setOrder] = useState(0);

  const prevPerson = () => {
    if (order === 0) {
     setOrder(reviews.length - 1);
    } else{
    setOrder(order - 1);
  }
  }
  const nextPerson = () => {
    if (order === reviews.length - 1){
      setOrder(0);
    } else {
      setOrder(order + 1);
    }
  }
  const surpriseSb =()=>{
    let randomNum = Math.floor((Math.random() * reviews.length));
    if (randomNum === order) {
      nextPerson();
    } else {
      setOrder(randomNum);
    }
  }
  return (
    <main>
        <h2 className='header'>reviews</h2>
        <div className='container'>
        <Review review={reviews[order]} />
        <div className='buttons'>
          <button className='btn' onClick={()=>prevPerson()}><FaChevronLeft /></button>
          <button className='btn' onClick={()=>nextPerson()}><FaChevronRight /></button>
        </div>
        <button className='random-btn' onClick={()=>surpriseSb()}>surprise me</button>
        </div>
    </main>
    
  )
}

export default App