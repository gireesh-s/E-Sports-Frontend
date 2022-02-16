import React from 'react'
import './SideDrawer.css'

const SideDrawer = ({ setOpenDrawer }) => {
  return (
    <div className='side-drawer'>
        <div className='header'>
            <img
             src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/header-logo.png'
             alt="logo"
             className='tsm-logo'
            />
            <img
             src='https://tsm.gg/static/icons/close@2x.png' 
             alt='close' 
             className='close-img'
             onClick={()=>{setOpenDrawer(false)}}
            />
        </div>
        <a href='https://facility.tsm.gg' className='nav-link-mobile'>
        <i class="fa-regular fa-user"
            style={{
                marginRight: "13px",
                width: "15px",
                height: "13px",
                color: "rgb(153, 169, 202)",
                opacity: "0.3"
            }}
        ></i>
            Facility
            <div className='divider' />
        </a>
        <a href='/teams' className='nav-link-mobile'>
        <i class="fa-regular fa-user"
            style={{
                marginRight: "13px",
                width: "15px",
                height: "13px",
                color: "rgb(153, 169, 202)",
                opacity: "0.3"
            }}
        ></i>
            Teams
            <div className='divider'/>
        </a>
        <a href='/careers' className='nav-link-mobile'>
        <i class="fa-regular fa-user"
            style={{
                marginRight: "13px",
                width: "15px",
                height: "13px",
                color: "rgb(153, 169, 202)",
                opacity: "0.3"
            }}
        ></i>
            Careers
            <div className='divider'/>
        </a>
        <a href='/partners' className='nav-link-mobile'>
        <i class="fa-regular fa-handshake"
            style={{
                marginRight: "13px",
                width: "15px",
                height: "13px",
                color: "rgb(153, 169, 202)",
                opacity: "0.3"
            }}
        ></i>
            Partners
            <div className='divider'/>
        </a>
        <a href='/gallery' className='nav-link-mobile'>
        <i class="far fa-image"
            style={{
                marginRight: "13px",
                width: "15px",
                height: "13px",
                color: "rgb(153, 169, 202)",
                opacity: "0.3"
            }}
        ></i>
            Branding & Gallery
            <div className='divider'/>
        </a>
        <a href='https://tsmshop.com' className='nav-link-mobile'>
        <i class="fa-regular fa-credit-card"
            style={{
                marginRight: "13px",
                width: "15px",
                height: "13px",
                color: "rgb(153, 169, 202)",
                opacity: "0.3"
            }}
        ></i>
            Store
            <div className='divider'/>
        </a>
        <a href='/contact' className='nav-link-mobile'>
        <i class="fa-regular fa-envelope"
            style={{
                marginRight: "13px",
                width: "15px",
                height: "13px",
                color: "rgb(153, 169, 202)",
                opacity: "0.3"
            }}
        ></i>
            Contact
            <div className='divider'/>
        </a>
    </div>
  )
}

export default SideDrawer