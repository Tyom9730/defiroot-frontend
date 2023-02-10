import React from "react";
import "./PreSalePopup.scss";
import preSaleBg from "../../../assets/images/popup-bg.png";
import closeIcon from "../../../assets/images/close.png";

const PreSalePopup = ({ close }) => {
  return (
    <div className="pre-sale-popup">
      <div className="close-popup" onClick={close}>
        <img src={closeIcon} alt="close" />
      </div>
      <div className="pre-sale-popup-bg">
        <img src={preSaleBg} alt="preSaleBg" />
      </div>
      <div className="pre-sale-popup-content">
        <h1 className="title">Pre order now</h1>
        <p className="desc">
          Earn up to 10% in Crypto Rewards when you paying with ROOT card
        </p>
        <div className="pre-sale-register">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <button className="join-pre-sale-btn" type="button">
          Join the Pre Sale
        </button>
      </div>
    </div>
  );
};

export default PreSalePopup;
