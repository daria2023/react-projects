import React,{ useEffect, useState} from 'react'
// import css
import './index.css'
// import icon 
import {FaQuoteRight} from 'react-icons/fa'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'
// import data
import people from './data';

const App = () => {
  const [index,setIndex] = useState(0);

  const positionDecide = (position) =>{
    if (index === 0) {
       if (position === people.length - 1) 
       {
        return 'person prev'
      } 
    } 
    if (index === people.length - 1){
      if (position === 0) {
        return 'person next'
      }
    }
    if (position === index) {
      return 'person'
    } else if (position === index - 1){
      return 'person prev'
    } else{
      return 'person next'}
    
  }
  
  const indexNext = ()=>{
    if (index + 1 > people.length - 1){
      setIndex(0);
    } else
   { setIndex(index + 1)}
    
  }
  const indexPrev = ()=>{
    if (index - 1 < 0) {
      setIndex(people.length - 1)
    } else{setIndex(index - 1)}
  }
  
  useEffect(()=>{
      const timeInterval = setInterval(()=>{
          indexNext()
      },3000)
      return ()=> {
        clearInterval(timeInterval);
      }
  },[index])

  return (
    <main>
      <header><h2>Review</h2></header>
      <div className='container'>
        {people.map((person,idx) => {
          const {id,image,name,title,quote} = person;
          return <article className={positionDecide(idx)} key={id}>
              <div className='img-area'>
                <img src={image} alt={name} />
               </div>
               <h4 className='person-name'>{name}</h4>
               <h4 className='person-title'>{title}</h4>
               <p className='person-quote'>{quote}</p>
          </article>
        })}
        <div className='btns'>
                 <button className='btn prev-btn' onClick={indexPrev}>
                   <AiOutlineLeft className='icon'/>
                 </button>
                  <button className='btn next-btn'>
                    <AiOutlineRight className='icon' onClick={indexNext}/>
                  </button>
        </div>
      </div>
      <footer>
        <FaQuoteRight className='quote-icon'/>
      </footer>
    </main>
  )
}

export default App