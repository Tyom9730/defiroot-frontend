import React from 'react'
import './Roadmap.scss'
import arrow from '../../assets/images/gradient-arrow.png'
const Roadmap = () => {
  return (
    <div className='roadmap-section'>
      <h1 className='title'>Product roadmap</h1>
      <div className='roadmaps'>
        <hr className='line' />
        <div className='roadmap'>
          <img src={arrow} alt='arrow' />
          <div>
            <span>Q2 2022</span>
            <img src={arrow} alt='arrow' />
            <ul>
              <li>Mobile app (multichain)</li>
              <li>Liquidity mining</li>
            </ul>
          </div>
        </div>
        <div className='roadmap'> 
          <img src={arrow} alt='arrow' />
          <div>
            <span>Q3 2022</span>
            <img src={arrow} alt='arrow' />
            <ul>
              <li>Web app</li>
              <li>Defi Card</li>
              <li>Launchpad</li>
              <li>DAO</li>
              <li>Staking/yield farming aggregator</li>
              <li>Dual currency deposits</li>
              <li>NFT’s stake</li>
            </ul>
          </div>
        </div>
        <div className='roadmap'>
          <img src={arrow} alt='arrow' />
          <div>
            <span>Q4 2022</span>
            <img src={arrow} alt='arrow' />
            <ul>
              <li>DAO</li>
              <li>Web app</li>
              <li>Stake/yield farming</li>
              <li>Dual currencies deposits</li>
            </ul>
          </div>
        </div>
        <div className='roadmap'>
          <img src={arrow} alt='arrow' />
          <div>
            <span>Q5 2022</span>
            <img src={arrow} alt='arrow' />
            <ul>
              <li>Defi browser</li>
              <li>Margin Yield liquidity</li>
              <li>Chain bridges</li>
              <li>Defi Launchpad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap