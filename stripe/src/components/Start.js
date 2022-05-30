import React from 'react'
import phone from '../images/phone.svg'

const Start = () => {
    // hero text and phone
    // width<600 only text
  return (
    <div className='start'>
      <div className='start-info'>
        <h1>payments infrastructure for the internet</h1>
        <p>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online. </p>
        <button className='btn start-btn'>start now</button>
        </div>
        <div className='start-img'>
          <img src={phone} alt='phone' />
        </div>
    </div>
  )
}

export default Start