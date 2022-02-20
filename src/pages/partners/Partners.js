import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import { partners } from '../../datas/Datas'
import Banner from './banner/Banner'
import './Partners.css'

const Partners = () => {
  return (
    <div className='partners-container'>
        <div className='partners-sub-container'>
            <Header/>
            <Banner/>
        </div>
        <div className='partners-companies-container'>
            {
                partners.map((partners)=>(
                    <div className='partner-grid-container'>
                        <div className='partner-grid-sub-container'>
                            <img src={partners.logo} alt="logo" className='partner-company-logo'/>
                            <div className='partner-description'>
                                {partners.description}
                            </div>
                            <div className='partners-links-container'>
                                <a href={partners.url} className='visit-site-link'>
                                    <div className='visit-site-container'>
                                        <i
                                         class="fa-regular fa-link"
                                         style={{
                                             fontFamily: "Font Awesome 5 Pro, Font Awesome 5 Regular",
                                             fontSize: "10px",
                                             color: "rgb(164, 213, 248)",
                                             letterSpacing: "0px",
                                             marginRight: "5px"
                                         }}></i>
                                        <span className='visit-site'>VISIT SITE</span>
                                    </div>
                                </a>
                                <div className='partner-social-container'>
                                    {
                                        partners.social.map((social)=>(
                                            <a href={social.url} className="partner-social-url">
                                                <i
                                                 class={social.icon}
                                                 style={{
                                                    fontFamily: "Font Awesome 5 Brands, Font Awesome 5 Regular",
                                                    fontSize: "18px",
                                                    color: "rgb(122, 135, 158)",
                                                    letterSpacing: "0px",
                                                    lineHeight: "18px",
                                                    backgroundColor: "rgb(24, 31, 44)",
                                                    marginLeft: "10px",
                                                    padding: "12px",
                                                    "&:hover":{
                                                        color: "rgb(255, 255, 255)",
                                                        textShadow: "rgb(24 161 248) 0px 1px 5px",
                                                        cursor: "pointer",
                                                    }
                                                 }}
                                                ></i>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className='partners-sub-container-2'>
                <div className='partners-sup-sub-container'>
                    <h3 className='partners-email-us-head'>
                        If you are interested in partnering with TSM
                        <br/>
                        please email us at <t/>
                        <a href='mailto:partnerships@tsm.gg'>partnerships@tsm.gg</a>
                        .
                    </h3>
                    <img
                     src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/partnersbg.png'
                     alt='bg'
                     className='partners-email-us-bg'
                    />
                </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Partners