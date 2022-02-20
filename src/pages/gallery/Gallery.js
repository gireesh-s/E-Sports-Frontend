import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { brands } from '../../datas/Datas';
import Banner from './banner/Banner';
import './Gallery.css'

const Gallery = () => {
  return (
    <div className='gallery-container'>
        <div className='gallery-sub-container'>
            <Header/>
            <Banner/>
        </div>
        <div className='brands-container'>
            <div className='branding-title-container'>
                <div className='branding'>Branding</div>
                <div className='brands-sub-container'>
                    {
                        brands.map((brand)=>(
                            <div className='single-brand-container'>
                                <img src={brand.logo} alt={brand.alt} className="brand-logo"/>
                                <div className='brand-title-container'>
                                    <div className='brand'>{brand.title}</div>
                                    <a href={brand.url} className="download-link">
                                        <img
                                         src='https://tsm.gg/static/download@2x.png'
                                         alt='download'
                                         className="download-img"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Gallery