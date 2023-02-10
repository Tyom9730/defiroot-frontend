import React from "react";
import HowItWorksNFT from "../../components/HowItWorksNFT/HowItWorksNFT";
import NftFirstSection from "../../components/NftFirstSection/NftFirstSection";
import NftGetStartedForm from "../../components/NftGetStartedForm/NftGetStartedForm";
import SupportedCollection from "../../components/SupportedCollection/SupportedCollection";
import "./NftPage.scss";
const NftPage = () => {
  return (
    <div className="nft-page-container">
      <div className="container">
        <NftFirstSection />
        <HowItWorksNFT />
        <SupportedCollection />
        <NftGetStartedForm />
      </div>
    </div>
  );
};

export default NftPage;
