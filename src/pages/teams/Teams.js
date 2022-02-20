import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import Header from '../../components/header/Header'
import { teams } from '../../datas/Datas'
import './Teams.css'

const Teams = () => {

    const items = teams.map((teams)=>(
        <a href={teams.url}>
            <div className='icon-container'>
                <img src={teams.icon} alt={teams.alt} className="icon-img"/>
            </div>
        </a>
    ))

  return (
    <div className='teams-main-container'>
        <div className='group-game-icons-container'>
            <Header/>
        </div>
    </div>
  )
}

export default Teams