import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { teams } from '../../datas/Datas'
import './Teams.css'

const Teams = () => {

    const items = teams.gameIcons.map((teams)=>(
        <a href={teams.url}>
            <div className='icon-container'>
                <img src={teams.icon} alt={teams.alt} className="icon-img"/>
            </div>
        </a>
    ))

  return (
    <div className='teams-main-container'>
        <div className='group-game-icons-container'>
            <AliceCarousel
             disableButtonsControls
             disableDotsControls 
             items={items}
            />
        </div>
    </div>
  )
}

export default Teams