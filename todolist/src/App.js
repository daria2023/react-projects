import React,{useState} from 'react';
import Alert from './components/Alert';
import List from './components/List';
import Form from './components/Form';

// import css
import './index.css'

const App = ()=>{
 
  return (
    <main>
      <Alert />
      <header>
        <h4>to do list</h4>
      </header>
      <Form />
      <List />
    </main>
  )
}

export default App;

