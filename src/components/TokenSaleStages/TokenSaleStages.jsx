import React from 'react'
import './TokenSaleStages.scss'
import primaryArrow from '../../assets/images/primary-arrow.png'
import Lottie from 'react-lottie';
import * as animationData from '../../utils/animations/2.json';
import WebsiteLogoBlue from '../Icons/WebsiteLogoBlue';


const TokenSaleStages = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='token-sale-stages'>
      <h1 className='token-sale-stages-title'> <WebsiteLogoBlue /> root token sale stages</h1>
      <div className='token-sale-stages-content'>
        <div>
          <div className='parameters'>
            <div className='parameter'>
              <span>target</span><hr />
            </div>
            <div className='parameter'>
              <span>Root price</span><hr />
            </div>
            <div className='parameter'>
              <span>Min</span><hr />
            </div>
            <div className='parameter'>
              <span>lockup</span><hr />
            </div>
          </div>
          <div className='pre-sale'>
            <h6 className='subtitle'>Community <br/>pre-sale</h6>
            <span className='subname'>target</span>
            <p className='price'>$100 000</p>
            <span className='subname'>Root price</span>
            <p className='price'>$0.01</p>
            <span className='subname'>Min</span>
            <p className='price'>$1000</p>
            <span className='subname'>lockup</span>
            <p className='lockup'>20% initially unlocked, the remaining 6-month lockup followed by 12-month linear release.</p>
            <div className='join-action'>
              <span>Join waitlist</span>
              <a href='https://omniform1.com/signup/v1/62a84b3f4da2b939ae5147a3_62a988fe5235111a4af057c8.html' target='_blank' rel="noreferrer">
                <img src={primaryArrow} alt='arrow' />
              </a>
            </div>
          </div>
          <div className='private-sale'>
            <h6 className='subtitle'>Community <br/>Sale</h6>
            <span className='subname'>target</span>
            <p className='price'>$300 000</p>
            <span className='subname'>Root price</span>
            <p className='price'>$0.015</p>
            <span className='subname'>Min</span>
            <p className='price'>$100</p>
            <span className='subname'>lockup</span>
            <p className='lockup'>30% initially unlocked, the remaining 6-month lockup followed by 12-month linear release.</p>
            <div className='join-action'>
              <span>Join waitlist</span>
              <a href='https://omniform1.com/signup/v1/62a84b3f4da2b939ae5147a3_62a988fe5235111a4af057c8.html' target='_blank' rel="noreferrer">
                <img src={primaryArrow} alt='arrow' />
              </a>
            </div>
          </div>
          <div className='ido-sale'>
            <h6 className='subtitle'>Ido sale</h6>
            <span className='subname'>target</span>
            <p className='price'>$400 000</p>
            <span className='subname'>Root price</span>
            <p className='price'>$0.02</p>
            <span className='subname'>Min</span>
            <p className='price depend'>Depends from Launchpad</p>
            <span className='subname'>lockup</span>
            <p className='lockup'>50% initially unlocked, the remaining 3-month lockup followed by 12-month linear release.</p>
            <div className='join-action'>
              <span>Join waitlist</span>
              <a href='https://omniform1.com/signup/v1/62a84b3f4da2b939ae5147a3_62a988fe5235111a4af057c8.html' target='_blank' rel="noreferrer">
                <img src={primaryArrow} alt='arrow' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Lottie
          options={defaultOptions}
          width={200}
          height={200}
        />
    </div>
  )
}

export default TokenSaleStages