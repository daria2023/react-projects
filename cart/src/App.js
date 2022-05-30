import React from 'react';
import CartArea from './components/CartArea';
import Navbar from './components/Navbar';

// import style
import './index.css'

const App = () => {
  return (
    <main>
      <Navbar />
      <CartArea />
    </main>
  )
}

export default App