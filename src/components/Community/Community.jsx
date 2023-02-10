import React from 'react'
import './Community.scss'
import telegram from '../../assets/images/telegram1.png'
import discord from '../../assets/images/discord1.png'
import helpful from '../../assets/images/helpful.png'
import tweeter from '../../assets/images/tweeter.png'
import BlueArrow from '../Icons/BlueArrow.jsx'
import glassFace from '../../assets/images/glass-face.png'

const Community = () => {
  return (
    <div className='community-section'>
      <div className='left-elipse' />
      <div className='right-elipse' />
      <div className='bottom-elipse' />
      {/* <img src={communityBorder} alt='border' />   */}
      <div>
        <h1 className='title'><img src={glassFace} alt='glassFace'/> Join our community</h1>
        <div className='community-areas'>
          <a className='community name' href='https://t.me/+Ta9SRQuD8BhiMmVk' target="_blank" rel="noreferrer">
            <img src={telegram} alt='icon' />
            <p className='info'>announcements and community</p>
              <div>
                <BlueArrow />
              </div>
          </a>
          <a className='community name' href='https://discord.gg/8d9TRNspct' target="_blank" rel="noreferrer">
            <img src={discord} alt='icon' />
            <p className='info'>chat with the community</p>
              <div>
                <BlueArrow />
              </div>
          </a>
          <a className='community name' href='https://www.reddit.com/r/DefiRoot/' target="_blank" rel="noreferrer" >
            <img src={helpful} alt='icon' />
            <p className='info'>Read helpful resources</p>
              <div>
                <BlueArrow />
              </div>
          </a>
          <a className='community name' href='https://twitter.com/defiroot' target="_blank" rel="noreferrer">
            <img src={tweeter} alt='icon' />
            <p className='info'>News and product updates</p>
              <div>
                <BlueArrow />
              </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Community