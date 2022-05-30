import React from 'react';
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <section className='section err-section'>
      <h2 className='section-header'>Oops</h2>
      <h4>you've come to the end of the world.</h4>
      <div className='error-btn'>
        <Link to='/'><button className='btn home-btn'>Home</button></Link>
      </div>
    </section>
  )
}

export default Error