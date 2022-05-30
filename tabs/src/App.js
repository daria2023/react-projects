import React, { useEffect, useState } from 'react'
import './index.css'

import {MdOutlineDoubleArrow} from 'react-icons/md'

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [list,setList] = useState([]);
  const [loading,setLoading]=useState(true);
  const [order, setOrder] = useState(0);
  const job = list[order];


  const fetchData = async ()=>{
    const response = await fetch(url);
    const data = await response.json();
    setList(data);
    setLoading(false);
  }

 
  useEffect(()=>{
    fetchData()
  },[])

 
if(loading){
  return <h1>Loading</h1>
}
  
  return (
    <main>
      <header>
        <h2>experience</h2>
      </header>

    <section>
      <ul className='btns'>
        {list.map( (item,index) => {
          return <li key={item.id}>
            <button className={`${ index === order ? 'btn show' : 'btn'}`} onClick={()=>setOrder(index)}>{item.company}</button>
          </li>
        })}
      </ul>


      <div className='container'>
        <h3 className='job-title'>{job.title}</h3>
        <h4 className='job-company'>{job.company}</h4>
        <p className='job-dates'>{job.dates}</p>
        <div className='duties'>
          {job.duties.map((duty,idx) => {
            return <div className='job-duty' key={idx}>
              <MdOutlineDoubleArrow className='icon'/>
              {duty}
            </div>
          })}
        </div>
      </div>
      </section>

      <button className='more-btn'>more info</button>
    </main>

  )
}

export default App