import React, { useState } from 'react'
import './Home.css'
import Banner from './banner/Banner'
import { ourTeams } from '../../datas/Datas'
import Footer from '../../components/footer/Footer'

const Home = () => {

  const [buttonValue, setButtonValue] = useState("all")

  return (
    <div className='home-container'>
      <Banner/>
      <div className='home-sub-container-1'>
        <div className='home-sub-container-2'>
          <div className='group-btn-container'>
            <div className='group-btn-sub-container'>
              <div
               className={buttonValue==="all"? 'selected-btn-container' : 'btn-container'} 
               onClick={()=>(setButtonValue("all"))}
              >
                <div className={buttonValue==="all"? 'selected-btn' : 'btn'}>
                  <span className='label'>All</span>
                </div>
                <div className='highlight'/>
              </div>
              <div
               className={buttonValue==="articles"? 'selected-btn-container' : 'btn-container'} 
               onClick={()=>(setButtonValue("articles"))}
              >
                <div className={buttonValue==="articles"? 'selected-btn' : 'btn'}>
                  <span className='label'>Articles</span>
                </div>
                <div className='highlight'/>
              </div>
              <div
               className={buttonValue==="media"? 'selected-btn-container' : 'btn-container'} 
               onClick={()=>(setButtonValue("media"))}
              >
                <div className={buttonValue==="media"? 'selected-btn' : 'btn'}>
                  <span className='label'>Media</span>
                </div>
                <div className='highlight'/>
              </div>
              <div
               className={buttonValue==="highlights"? 'selected-btn-container' : 'btn-container'} 
               onClick={()=>(setButtonValue("highlights"))}
              >
                <div className={buttonValue==="highlights"? 'selected-btn' : 'btn'}>
                  <span className='label'>Highlights</span>
                </div>
                <div className='highlight'/>
              </div>
            </div>
            <div className='game-icons-container'>
              <span className='all-games'>All</span>
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/lol.svg' 
               alt='lol'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/pubg.svg' 
               alt='pubg'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/fn.svg' 
               alt='fortnite'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/hs.svg' 
               alt='hearthstone'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/sb.svg' 
               alt='smashbros'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/ow.svg' 
               alt='overwatch'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/rl.svg' 
               alt='rocketleague'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/apex.svg' 
               alt='apexlegends'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/mtg.svg' 
               alt='magic'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/rnbw.svg' 
               alt='r6'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/tft.svg' 
               alt='tft'
               className='game-icon'
              />
              <img
               src='https://s3.amazonaws.com/solomid-resources/tsm-gg/newtsmgg/gameicons/tw.svg' 
               alt='twitch'
               className='game-icon'
              />
            </div>
          </div>
          <div className='contents-container'></div>
          <div className='contents-sub-container'></div>
        </div>
        <div className='home-sub-container-3'>
          <div className='our-teams'>Our Teams</div>
          <div className='team-posters-container'>
            {
              ourTeams.gamePosters.map((gamePoster)=>(
                <a href={gamePoster.url} className="team-link">
                  <div className='poster-container'>
                    <div className='poster-sub-container'>
                      <img src={gamePoster.image} alt={gamePoster.alt} className="poster"/>
                    </div>
                  </div>
                </a>
              ))
            }
          </div>
          <a href='/teams' className='load-more-link'>
            <div className='load-more-container'>
              <div className='load-more-sub-container'>
                <div className='load-more'>LOAD MORE</div>
                <div className='underline'/>
              </div>
            </div>
          </a>
        </div>
        <div className='blogs-container'>
          <div className='insta-container'>
            <div className='insta-head-container'>
              <span className='instagram'>Instagram</span>
              <span className='by'>by</span>
              <a href='https://www.instagram.com/TSM/' className='insta-link'>@TSM</a>
            </div>
            <div className='insta-content'></div>
          </div>
          <div className='twitter-container'>
            <div className='twitter-head-container'>
              <span className='twitter'>tweets</span>
              <span className='by'>by</span>
              <a href='https://twitter.com/TSM' className='twitter-link'>@TSM</a>
            </div>
            <div className='twitter-content'></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home