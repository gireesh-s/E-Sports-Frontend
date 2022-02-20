import React from 'react'
import './Success.css'

const Success = () => {
  return (
    <div className='contact-success-container'>
        <div className='contact-success-sub-container'>
            <div className='contact-success-title'>Thanks for contacting us!</div>
            <p>You'll receive a response soon</p>
            <button href="/" className='back-button'>Back to News</button>
        </div>
    </div>
  )
}

export default Success