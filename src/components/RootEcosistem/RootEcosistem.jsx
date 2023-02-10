import React from 'react';
import './RootEcosistem.scss';
import mouthFace from '../../assets/images/mouth-face.png';
import Lottie from 'react-lottie';
import * as animationData from '../../utils/animations/back.json';

const RootEcosistem = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultStyle = {
    position: 'absolute',
    top: '-110px',
    zIndex: '-1'
  };

  return (
    <div className='root-ecosistem-section container'>
        <div className='total-supply-logo-section'>
          <Lottie 
            options={defaultOptions}
            style={defaultStyle}
          />
          <div className='total-supply'>
            <h3 className='title'>500 millions total supply</h3>
          </div>
        </div>
        <div className='root-ecosistem'>
            <h1 className='title'>Building the ROOT ecosystem <img src={mouthFace} alt='mouthFace' /> </h1>
            <p className='desc'>A suite of products transforming DeFi user experience and exposing 100 million CeFi users to superior returns.</p>
            <img src={mouthFace} alt='mouthFace' className='face-mobile' />
            <span className='circle circle-1' />
            <span className='circle circle-2' />
            <span className='circle circle-3' />
        </div> 
    </div>
  )
}

export default RootEcosistem