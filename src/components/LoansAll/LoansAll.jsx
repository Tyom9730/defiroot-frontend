import React from 'react'
import './LoansAll.scss'
import mobiles from '../../assets/images/mobiles.png'

const LoansAll = () => {
  return (
    <div className='loans-all-section'>
      <h1 className='title'>yield, Loans all in one single APP.</h1>
      <p className='desc'>it is easier to have a single entry app with a single balance, easy cross-trade and online access with multiple blockchains</p>
      <div className='image-section'>
        <div className='image-container'>
          <img className='mobiles' src={mobiles} alt='mobiles' />
          {/* <img className='visa' src={visa} alt='visa' /> */}
          <div className='tags-section'>
            <span className='tag'><span>#buy</span></span>
            <span className='tag'> <span>#sell</span></span>
            <span className='tag'><span>#LP tokens</span></span>
            <span className='tag'><span>#Dual tokens</span></span>
            <span className='tag'><span>#launchpads</span></span>
            <span className='tag'><span>#cryptocard</span></span>
            <span className='tag'><span>#NFT’s</span></span>
            <span className='tag'><span>#mint Nft’s</span></span>
            <span className='tag'><span>#Fractional NFT’s</span></span>
            <span className='tag'><span>#Farming</span></span> 
            <span className='tag'><span>#Multichain</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoansAll