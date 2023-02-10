import React from "react";
import "./YourDefirootCard.scss";
import cards from "../../assets/images/cards.png";
import Popup from "reactjs-popup";
import PreSalePopup from "../Popups/PreSalePopup/PreSalePopup";

const YourDefirootCard = () => {
  return (
    <div className="buy-defiroot-card-section">
      <img className="logo-mobile" src={cards} alt="cards" />
      <h1 className="title">your DefiRoot Card is one click away</h1>
      <div className="details-and-content">
        <div className="details-section">
          <Popup
            trigger={<button className="order-btn">Pre Order Now</button>}
            modal
            nested
          >
            {(close) => <PreSalePopup close={close} />}
          </Popup>
          <div className="details">
            <div>
              <div />
              <p>Physical card</p>
            </div>
            <div>
              <div />
              <p>Black card for ROOT Hodlers</p>
            </div>
            <div>
              <div />
              <p>Pay with Crypto or Fiat</p>
            </div>
            <div>
              <div />
              <p>Accepted by 40+ million merchants worldwide </p>
            </div>
            <div>
              <div />
              <p>Instant 10% cashback on all purchases</p>
            </div>
            <div>
              <div />
              <p>Free virtual cards</p>
            </div>
            <div>
              <div />
              <p>Payments in local currencies</p>
            </div>
            <div>
              <div />
              <p>No monthly/annual fees, no FX fees</p>
            </div>
            <div>
              <div />
              <p>Payments with fractions NFT’s</p>
            </div>
          </div>
        </div>
        <div className="card-image">
          <img src={cards} alt="cards" />
        </div>
      </div>
    </div>
  );
};

export default YourDefirootCard;
