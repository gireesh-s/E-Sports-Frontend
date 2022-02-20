import React from 'react';
import './Banner.css'

const Banner = () => {
  return (
    <div className='gallery-banner-container'>
        <img src='https://tsm.gg/static/headers/galleryHeader.jpg' alt='banner' className='gallery-banner-img'/>
        <div className='gallery-title-container'>
            <span className='branding-gallery'>Branding & Gallery</span>
        </div>
    </div>
  )
}

export default Banner