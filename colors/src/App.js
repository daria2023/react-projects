import React, {useState,useEffect} from 'react';
import Values from 'values.js';
// import component
import List from './components/List';
// import css
import './index.css'


const App = () => {
  const [color,setColor] = useState('');
  const [colors,setColors] = useState(new Values('#187498').all(10));
  const [error,setError] = useState(false)

  const onFormSubmit = (e)=> {
    
    e.preventDefault();
    try {
    setColors(new Values(color).all(10));
    setColor('');} catch (error) {
      setError(true)
    }
  }

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setError(false);
    },2000)
  },[error])
  

  return (
    <main>
      <form className='form' onSubmit={onFormSubmit}>
          <h4>color generator</h4>
        <div className='input-btn'>
          <input type='text' className={`${error ? 'input input-error' : 'input'}`} value={color} 
            onChange={e=>setColor(e.target.value)} placeholder='#187498'/>
          <button className='btn' type='submit' onSubmit={onFormSubmit}>submit</button>
        </div>
      </form>
      <List colors={colors} />
    </main>
  )
}

export default App