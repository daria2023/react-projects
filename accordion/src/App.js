import React from 'react'
import './index.css'
import questions from './data'
import Question from './Question'

const App = () => {
  
  return (
    <main>
      <header>
        <h3>Questions And answers about login</h3>
      </header>
      <div className='questions'>
      {questions.map(question => {
        const {id } = question;
        return (
          <Question key={id} question={question}/>
        )
      })}
      </div>
    </main>
  )
}

export default App