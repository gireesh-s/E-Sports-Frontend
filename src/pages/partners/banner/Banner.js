import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='partners-banner-container'>
        <img
         src='https://tsm.gg/static/headers/partnersHeader.jpg'
         alt='banner-logo'
         className='partners-banner-image'
        />
        <div className='partners-title-container'>
            <span className='partners-title'>Partners</span>
        </div>
    </div>
  )
}

export default Banner