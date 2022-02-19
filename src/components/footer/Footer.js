import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-main-container'>
      <div className='footer-sub-container'>
        <div className='footer-sup-sub-container'>
          <img
           src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/header-logo.png'
           alt="footer"
           className='footer-logo'
          />
          <div className='nav-link-container'>
            <span className='footer-link'>Home</span>
            <span className='footer-link'>Teams</span>
            <span className='footer-link'>Partners</span>
            <span className='footer-link'>Branding & Gallery</span>
            <span className='footer-link'>Contact</span>
            <a href='https://tsmshop.com/' className='footer-link-a'>Store</a>
          </div>
          <div className='footer-social-container'>
            <a href='https://www.facebook.com/SoloMidDotNet/' className='social-link'>
              <i class="fa-brands fa-facebook-square" style={{color:"rgb(122, 135, 158)",margin:"15px 10px"}}></i>
            </a>
            <a href='https://twitter.com/tsm' className='social-link'>
              <i class="fa-brands fa-twitter" style={{color:"rgb(122, 135, 158)",margin:"15px 10px"}}></i>
            </a>
            <a href='https://www.youtube.com/user/solomiddotnet' className='social-link'>
              <i class="fa-brands fa-youtube" style={{color:"rgb(122, 135, 158)",margin:"15px 10px"}}></i>
            </a>
            <a href='https://www.twitch.tv/team/tsm' className='social-link'>
              <i class="fa-brands fa-twitch" style={{color:"rgb(122, 135, 158)",margin:"15px 10px"}}></i>
            </a>
          </div>
        </div>
      </div>
      <div className='copyright'>Copyright © 2009-2021 SoloMid. All Rights Reserved.</div>
    </div>
  )
}

export default Footer