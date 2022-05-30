import React from 'react';
import {FaQuoteRight} from 'react-icons/fa'

const Review = ( {review} ) => {
    const {id, name, job, image, text} = review;
  return (
    <div className='review'>
        <div className='img-container'>          
            <span className='icon-container'><FaQuoteRight className='img-icon'/></span>
            <img src={image} alt={name} className='review-img' />
        </div>
        <h4 className='review-name'>{name}</h4>
        <h4 className='review-job'>{job}</h4>
        <p className='job-text'>{text}</p>
    </div>
  )
}

export default Review