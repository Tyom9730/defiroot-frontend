import React from 'react'
import './DailyEarnings.scss'
import { v4 as uuidv4 } from 'uuid';
import bitcoin from '../../assets/images/bitcoin.png'
import eth from '../../assets/images/eth.png'
import avax from '../../assets/images/avax.png'
import usdt from '../../assets/images/usdt.png'
import usdc from '../../assets/images/usdc.png'
import dai from '../../assets/images/dai.png'
import root from '../../assets/images/website-logo.svg'
import nft from '../../assets/images/nft.png'

const DailyEarnings = () => {

  const coins = [
    {
      id: uuidv4(),
      name: 'Bitcoin',
      percent:'7%',
      image: bitcoin
    },
    {
      id: uuidv4(),
      name: 'ETH',
      percent:'7%',
      image: eth
    },
    {
      id: uuidv4(),
      name: 'AVAX',
      percent:'11%',
      image: avax
    },
    {
      id: uuidv4(),
      name: 'USDT',
      percent:'17%',
      image: usdt
    },
    {
      id: uuidv4(),
      name: 'USDC',
      percent:'16%',
      image: usdc
    },
    {
      id: uuidv4(),
      name: 'DAI',
      percent:'15%',
      image: dai
    },
    {
      id: uuidv4(),
      name: 'ROOT',
      percent:'22%',
      image: root
    },
    {
      id: uuidv4(),
      name: 'NFT',
      percent:'7%',
      image: nft
    },
  ]

  return (
    <div className='daily-earnings-section'>
      <h1 className='title'>DefiRoot is the <br /> all-in-one platform</h1>
      <p className='desc'>that lets you generate high returns on your crypto and manage your funds in a fully transparent environment in 1 single App.</p>
      <h3 className='subtitle'>Stake your Crypto and get paid Daily not weekly</h3>
      <div className='coins'>
        {
          coins.map((coin) => {
            return (
              <div key={coin.id} className='coin'>
                <img src={coin.image} alt={coin.name} />
                <h6 className='name'>{coin.name}</h6>
                <p className='percent'>{coin.percent}</p>
              </div>
            )
          })
        }
        <p className='based'>Based on APY %</p>
      </div>
      <span className='circle circle-1' />
      <span className='circle circle-2' />
      <span className='circle circle-3' />
      <span className='circle circle-4' />
      <span className='circle circle-5' />
      <span className='circle circle-6' />
    </div>
  )
}

export default DailyEarnings