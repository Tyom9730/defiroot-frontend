import React from 'react'
import './LandingPage.scss'
import bg from '../../assets/images/bg.png';
import GetAccessLandingPage from '../../components/GetAccessLandingPage/GetAccessLandingPage';
import DailyEarnings from '../../components/DailyEarnings/DailyEarnings';
import TokenSaleStages from '../../components/TokenSaleStages/TokenSaleStages';
import LoansAll from '../../components/LoansAll/LoansAll';
import TokenDistribution from '../../components/TokenDistribution/TokenDistribution';
import Community from '../../components/Community/Community';
import Roadmap from '../../components/Roadmap/Roadmap';
import YourDefirootCard from '../../components/YourDefirootCard/YourDefirootCard';
import RootEcosistem from '../../components/RootEcosistem/RootEcosistem';

const LandingPage = () => {
  // useEffect(()=> {
  //   window.omnisend = window.omnisend || [];
  //   omnisend.push(["accountID", "62a84b3f4da2b939ae5147a3"]);
  //   omnisend.push(["track", "$pageViewed"]);
  //   !function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://omnisnippet1.com/inshop/launcher-v2.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();
  // },[])
  return (
    <div className='lending-page-container'>
      <div className='container'>
        <GetAccessLandingPage />
        <DailyEarnings />
        <TokenSaleStages />
        <YourDefirootCard />
      </div>
      <LoansAll />
      <RootEcosistem />
      <TokenDistribution />
      <Community />
      <div className='container'>
        <Roadmap />
      </div>
      <img src={bg} alt='bg' />
    </div>
  )
}

export default LandingPage