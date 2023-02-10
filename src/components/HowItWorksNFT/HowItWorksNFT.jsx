import React from "react";
import "./HowItWorksNFT.scss";

const HowItWorksNFT = () => {
  return (
    <div className="how-it-works-section">
      <h1 className="title">How it works:</h1>
      <div className="work-variants">
        <div className="variant">
          <p className="variant-index">01.</p>
          <h3 className="name">Apply</h3>
          <p className="desc">Apply now and unlock the value of your NFT</p>
        </div>
        <div className="variant">
          <p className="variant-index">02.</p>
          <h3 className="name">Get a Quote</h3>
          <p className="desc">
            Your account manager will proceed with your application
          </p>
        </div>
        <div className="variant">
          <p className="variant-index">03.</p>
          <h3 className="name">Start Earning!</h3>
          <p className="desc">Start Earning or get your loan in 24h!</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksNFT;
