import React, { useState } from 'react'
import SideDrawer from '../side_drawer/SideDrawer'
import './Header.css'

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

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
                <img
                 src='https://tsm.gg/static/icons/nav.svg' 
                 alt='menu'
                 className='menu-button'
                 onClick={()=>{setOpenDrawer(true)}}
                />

                {/* SideDrawer */}
                <div className={openDrawer?'open-drawer-container':'close-drawer-container'}>
                    <SideDrawer setOpenDrawer={ setOpenDrawer } />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header