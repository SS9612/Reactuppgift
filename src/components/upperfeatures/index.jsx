import React from 'react';
import './styles.css';
import featuresImg from '../../assets/Features2P1.svg';

const Upperfeatures = () => {
  return (
    <section id="upperfeatures">
      <div className="container">
        <div className="upperfeaturestext">
          <p className="faTEXT">Make your money transfer simple and clear</p>
          <div className="TextLines">
            <div className="TextLine">
              <i className="fa-sharp fa-regular fa-circle-check"></i>
              <p>Banking transactions are free for you</p>
            </div>
            <div className="TextLine">
              <i className="fa-sharp fa-regular fa-circle-check"></i>
              <p>No monthly cash commission</p>
            </div>
            <div className="TextLine">
              <i className="fa-sharp fa-regular fa-circle-check"></i>
              <p>Manage payments and transactions online</p>
            </div>
          </div>
          <a id="Learn-more" href="#" className="btn-primary">
            <span>Learn more</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="UpperfeaturesIMG">
          <img src={featuresImg} alt="Features" />
        </div>
      </div>
    </section>
  );
};

export default Upperfeatures;
