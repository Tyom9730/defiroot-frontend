import React from "react";
import Button from "../Button/Button";
import ArrowInButton from "../Icons/ArrowInButton";
import "./SupportedCollection.scss";
import left1 from "../../assets/images/nft-page/nft-left-1.png";
import left2 from "../../assets/images/nft-page/nft-left-2.png";
import left3 from "../../assets/images/nft-page/nft-left-3.png";
import right1 from "../../assets/images/nft-page/nft-right-1.png";
import right2 from "../../assets/images/nft-page/nft-right-2.png";
import right3 from "../../assets/images/nft-page/nft-right-3.png";
import right4 from "../../assets/images/nft-page/nft-right-4.png";

const SupportedCollection = () => {
  return (
    <div className="supported-collection-section">
      <div className="supported-collection">
        <div className="blured-bg" />
        <h3 className="title">Supported Collections</h3>
        <p className="desc">
          We announce Supported Collections soon to our early users!
        </p>
        <Button className="secondary dark">
          Apply Now <ArrowInButton />
        </Button>
      </div>
      <img className="absalute-img img-1" src={left1} alt="absalute-img" />
      <img className="absalute-img img-2" src={left2} alt="absalute-img" />
      <img className="absalute-img img-3" src={left3} alt="absalute-img" />
      <img className="absalute-img img-4" src={right1} alt="absalute-img" />
      <img className="absalute-img img-5" src={right2} alt="absalute-img" />
      <img className="absalute-img img-6" src={right3} alt="absalute-img" />
      <img className="absalute-img img-7" src={right4} alt="absalute-img" />
    </div>
  );
};

export default SupportedCollection;
