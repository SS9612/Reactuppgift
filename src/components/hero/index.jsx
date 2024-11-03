import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

import appStore from "../../assets/AppStore.svg";
import googlePlay from "../../assets/googleplay.svg";
import iPhoneBudget from "../../assets/iphone-budget_desktop.svg";
import iPhoneYourCards from "../../assets/iPhone-yourcards_desktop.svg";

const Hero = () => {
  return (
    <main>
      <section id="hero">
        <div className="container">
          <div className="headline">
            <h1>Manage All Your Money in One App</h1>
          </div>
          <div className="content">
            <p>We offer you a new generation of mobile banking. Save, spend & manage money in your pocket.</p>
            <div className="buttons">
              <Link className="btn-download-app" to="#">
                <img src={appStore} alt="Download on the App Store" />
              </Link>
              <Link className="btn-download-app" to="#">
                <img src={googlePlay} alt="Get it on Google Play" />
              </Link>
            </div>
            <Link to="#" className="discover-more">
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
              <span>Discover more</span>
            </Link>
          </div>
          <div className="images">
            <img className="img-back" src={iPhoneBudget} alt="iPhone My Budget" />
            <img className="img-front" src={iPhoneYourCards} alt="iPhone Your Cards" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
