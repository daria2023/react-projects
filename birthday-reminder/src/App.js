import React, { useState } from 'react';
import data from './data';
import './index.css';
import List from './List';

const App = ()=>{
  const [list,setList] = useState(data);

  return (
    <main>
    <div className='container'>
      <h3 className='header'>{list.length} Birthdays Today</h3>
      <List list={list} />
      <button className='btn' onClick={()=>setList([])}>Clear All</button>
    </div>
    </main>
  );
}

export default App;
