import React from 'react'
import Header from '../../../components/header/Header'
import BannerImage from './../../../assets/1f3c4837-a64e-446b-9bac-85d09ce30287.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner-container'>
      <Header/>
      <img src={BannerImage} alt="banner" className='banner-img'/>
      <div className='featured-news-container'>
        <div className='featured-news-head'>
          TSM 2021 Scouting Combine Presented by Logitech G
        </div>
        <div className='featured-news'>
        As we approach the end of the 2021 LCS season, TSM is excited to announce the return of our annual S...
        </div>
        <a 
        href="https://tsm.gg/news/tsm-2021-logitech-g-scouting-combine"
        className='read-more'
        >
          READ MORE
        </a>
      </div>
    </div>
  )
}

export default Banner