import React from 'react'
import './GetAccessLandingPage.scss'
import Lottie from 'react-lottie';
import * as animationData from '../../utils/animations/back.json';
import bigLogo from '../../assets/images/big-logo.png';

const GetAccessLandingPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='first-section'>
      <div className='info-section'>
        <h1 className='title'>DefiRoot is your secure way to Connect on <br /> Defi world</h1>
        <p className='desc'>Our suite of products will bring Millions of Users to Defi space Offering the way to earn crypto In simple terms.</p>
        {/* <div className='get-access'>
          <input type='text' placeholder='Enter your email' />
          <Button className='primary'>Get access</Button>
        </div> */}
      </div>
      <div className='section-1048'>
        <Lottie 
          options={defaultOptions}
        />
        <div>
          {/* <h1 className='number'>1048</h1> */}
          {/* <h3 className='subtitle'>Join pre sale of ROOT and unlock your crypto Power using them in Defi.</h3> */}
          <img src={bigLogo} alt={bigLogo} />
          <a className="e-widget no-button generic-loader" href='https://omniform1.com/signup/v1/62a84b3f4da2b939ae5147a3_62a988fe5235111a4af057c8.html' target="_blank" rel="noreferrer"
          > 
          <span>
            Join the Pre Sale
          </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default GetAccessLandingPage