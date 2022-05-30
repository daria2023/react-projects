import React,{useState} from 'react';
// import css
import './index.css';
// import data
import text from './data';

const App = () => {
  const [inputNum,setInputNum] =  useState(0);
  const [content,setContent] = useState([])

  const onFormSubmit = e =>{
    e.preventDefault();

    let trueNum = parseInt(inputNum);
    if(inputNum < 0) {
      trueNum = 1;
    }
    if(inputNum >= text.length){
      trueNum = text.length - 1;
    }

    setContent(text.slice(0, trueNum));
  }

  return (
    <main>
      <header>
        <h3>generate random paragraph</h3>
      </header>
      <form className='form' onSubmit={onFormSubmit}>
        <label htmlFor='num' className='form-label'>paragraph:</label>
        <input className='form-input' name ='num' type='number' value={inputNum} onChange={e=>setInputNum(e.target.value)}/>
        <button className='btn' type='submit' onSubmit={onFormSubmit}>generate</button>
      </form>
      <div className='container'>
        {content && content.map((par,idx) => {
          return <p key={idx}>{par}</p>
        })
        }
      </div>
    </main>
  )
}

export default App