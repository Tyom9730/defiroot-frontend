import React from "react";
import "./NftFirstSection.scss";
import Button from "./../Button/Button";
import ArrowInButton from "../Icons/ArrowInButton";
import girl from "../../assets/images/nft-page/girl.png";
import lights from "../../assets/images/nft-page/lights.png";

const NftFirstSection = () => {
  return (
    <div className="nft-first-section">
      <div className="nft-first-section-information">
        <div>
          <h1 className="title">
            Stake your NFT’s and earn % Or get loan on Stablecoin
          </h1>
          <p className="desc">
            Earn up to 7% on APY Or borrow up to 50% of your NFT value
          </p>
          <Button className="secondary dark">
            Apply Now <ArrowInButton />
          </Button>
        </div>
        <div>
          <ArrowInButton />
        </div>
      </div>
      <div className="nft-first-section-image">
        <div>
          <img src={girl} alt="girl" />
          <img src={lights} alt="lights" />
        </div>
      </div>
    </div>
  );
};

export default NftFirstSection;
