import React from 'react';
import './styles.css';
import featuresImg from '../../assets/Features2P2.svg';
import easyPaymentsIcon from '../../assets/Easy Payments Icon.svg';
import cashbackIcon from '../../assets/Cashback Icon.svg';

const Bottomfeatures = () => {
  return (
    <section id="bottomfeatures">
      <div className="container">
        <div className="bottomfeaturesIMG">
          <img src={featuresImg} alt="Features" />
        </div>
        <div className="bottomfeaturestext">
          <p className="fa-btm-TEXT">Receive payment from international bank details</p>
          <div className="iconboxes-BTM">
            <div className="iconbox-btm">
              <img src={easyPaymentsIcon} alt="Easy Payments Icon" />
              <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>
            <div className="iconbox-btm">
              <img src={cashbackIcon} alt="Regular Cashback Icon" />
              <p>A elementum, imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
            </div>
          </div>
          <a id="Learn-more" href="#" className="btn-primary">
            <span>Learn more</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Bottomfeatures;
