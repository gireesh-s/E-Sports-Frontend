import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <div className='contact-banner-container'>
        <img src='https://tsm.gg/static/headers/galleryHeader.jpg' alt='banner' className='contact-banner-img'/>
        <div className='contact-title-container'>
            <span className='contact-us'>Contact Us</span>
        </div>
    </div>
  )
}

export default Banner