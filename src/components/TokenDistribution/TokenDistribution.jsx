import React, { useState } from 'react'
import './TokenDistribution.scss'
import ArrowLeft from '../Icons/ArrowLeft'
import ArrowRight from '../Icons/ArrowRight';
import WebsiteLogoBlue from '../Icons/WebsiteLogoBlue';

const TokenDistribution = () => {
  const [selected, setSelected] = useState(1)
  const [recentSelected, setRecentSelected] = useState(selected)
  
  const prevDestribution = () => {
    if( selected > 1 ) {
      setSelected(selected-1)
    } else if ( selected === 1 ) {
      setSelected(5)
    }
  }

  const nextDestribution = () => {
    if( selected < 5 ) {
      setSelected(selected+1)
    } else if ( selected === 5 ) {
      setSelected(1)
    }
  }

  const handleMouseOver = (val) => {
    setRecentSelected(selected)
    setSelected(val)
  }

  return (
    <div className='token-destribution'>
      <div className='container'>
        <div className='header'>
          <h1 className='title'> <span><WebsiteLogoBlue />  Token </span> <span> distribution</span></h1>
          <div className='details'>
            <div className='supply'>
              <h6 className='subtitle'>Total supply of ROOT</h6>
              <p className='total-supports'>500 000 000</p>
            </div>
            <div className='token-standard'>
              <h6 className='subtitle'>Token standard</h6>
              <p className='total-supports'>ERC-20 initially</p>
            </div>
          </div>
        </div>
        <div className='content'>
          <div className='destributions'>
            <div 
              className={`destribution ${selected === 1 ? 'active' : ''}` } 
              onMouseOver={(e)=> handleMouseOver(1)} 
              onMouseOut={()=> setSelected(recentSelected)}
            >
              <p>50%</p>
              <div className='line line-1'><div/></div>
            </div>
            <div className=
              {`destribution ${selected === 2 ? 'active' : ''}` } 
              onMouseOver={(e)=>  handleMouseOver(2)} 
              onMouseOut={()=> setSelected(recentSelected)}
            >
              <p>20%</p>
              <div className='line line-2'><div/></div>
            </div>
            <div className=
              {`destribution ${selected === 3 ? 'active' : ''}` } 
              onMouseOver={(e)=>  handleMouseOver(3)} 
              onMouseOut={()=> setSelected(recentSelected)}
            >
              <p>10%</p>
              <div className='line line-3'><div/></div>
            </div>
            <div 
              className={`destribution ${selected === 4 ? 'active' : ''}` } 
              onMouseOver={(e)=>  handleMouseOver(4)} 
              onMouseOut={()=> setSelected(recentSelected)}
            >
              <p>6%</p>
              <div className='line line-4'><div/></div>
            </div>
            <div 
              className={`destribution ${selected === 5 ? 'active' : ''}` } 
              onMouseOver={(e)=>  handleMouseOver(5)} 
              onMouseOut={()=> setSelected(recentSelected)}
            >
              <p>5%</p>
              <div className='line line-5'><div/></div>
            </div>
            <div className='destribution'>
              <p className='other'>And 4% other</p>
            </div>
          </div>
          <div className='destribution-details'>
            <div className='arrows'>
              <span onClick={prevDestribution}>
                <ArrowLeft />
              </span>
              <span onClick={nextDestribution} >
                <ArrowRight />
              </span>
            </div>
            <h3 className='title'>
              {selected === 1 ?
                '55% Rewards ecosystem'
              : selected === 2 ?
                '20% Foundation'
              : selected === 3 ?
                '10% Sales'
              : selected === 4 ?
                '6% Team'
              :
                '5% Seed'
              }
            </h3>
            <p className='desc'>
            {selected === 1 ?
                'The ecosystem rewards, DEX rewards, NFT’s rewards, Staking, Yield farming, Tokens burning.'
              : selected === 2 ?
                'the way of promotion and support of our project'
              : selected === 3 ?
                'Root sales in 3 steps with lockup period check our tokenomics'
              : 
                'Lockup 12 months'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenDistribution