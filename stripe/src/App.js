import React from 'react'
// import components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Start from './components/Start';
// import css
import './index.css'


const App = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Start />
    </main>
  )
}

export default App