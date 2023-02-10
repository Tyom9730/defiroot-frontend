import React from "react";
import "./NftGetStartedForm.scss";
import formLogo from "../../assets/images/nft-page/form-logo.png";
import Button from "../Button/Button";
import ArrowInButton from "../Icons/ArrowInButton";

const NftGetStartedForm = () => {
  return (
    <div className="get-started-form">
      <h1 className="title">Let’s Get Started</h1>
      <p className="desc">
        Just fill out the form below, and we will get back to you asap!
      </p>
      <div className="form-content-section">
        <div className="form-content">
          <div className="form-logo">
            <img src={formLogo} alt="formLogo" />
          </div>
          <div className="form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Phone*" />
            <input type="text" placeholder="Email*" />
            <input type="text" placeholder="Telegram" />
            <input
              type="text"
              placeholder="What is the ID of the NFT you want to borrow against?*"
            />
            <input
              type="text"
              placeholder="Anything else you want to tell us about your request"
            />
            <label>
              <input type="checkbox" />
              <span>Hereby I confirm I own the above NFT</span>
            </label>
          </div>
        </div>
        <Button className="apply-form-btn ">
          Apply Now <ArrowInButton />
        </Button>
      </div>
    </div>
  );
};

export default NftGetStartedForm;
