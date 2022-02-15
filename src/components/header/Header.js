import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='main-container'>
        <div className='sub-container'>
            <img
            src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/header-logo.png'
            alt='logo'
            className='logo-image'
            />
            <div className='nav-container'>
                <div className='nav-sub-container'>
                    <a href='https://facility.tsm.gg/' target="_blank" className='nav-link'>
                        Facility
                    </a>
                    <a href='/teams' className='nav-link'>
                        Teams
                    </a>
                    <a href='/careers' className='nav-link'>
                        Careers
                    </a>
                    <a href='/partners' className='nav-link'>
                        Partners
                    </a>
                    <a href='/gallery' className='nav-link'>
                        Branding & Gallery
                    </a>
                    <a href='https://tsmshop.com/' className='nav-link'>
                        Store
                    </a>
                    <a href='/contact' className='nav-link'>
                        Contact
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header