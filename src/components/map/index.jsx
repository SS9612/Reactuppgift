import React from 'react';
import './styles.css';
import MapImage from '../../assets/map.svg';
import LocationIcon from '../../assets/bx-map.svg';
import PhoneIcon from '../../assets/bx-phone-call.svg';
import TimeIcon from '../../assets/bx-time-five.svg';
import SocialsIcon from '../../assets/socials.svg';

const MapSection = () => {
  return (
    <div className="map-section">
      <div className="map-image-container">
        <img src={MapImage} alt="Map" className="map-image" />
      </div>

      <div className="medical-centers">
        <div className="medical-center">
          <h3>Medical Center 1</h3>
          <p>
            <img src={LocationIcon} alt="Location" className="icon" /> 4517 Washington Ave. Manchester, Kentucky 39495
          </p>
          <p>
            <img src={PhoneIcon} alt="Phone" className="icon" /> (406) 555-0120
          </p>
          <p>
            <img src={TimeIcon} alt="Time" className="icon" /> <strong>Mon - Fri:</strong> 9:00 am – 22:00 pm
            </p>
            <p>
              <img src={TimeIcon} alt="" className="icon invisible-icon" /> <strong>Sat - Sun:</strong> 9:00 am – 20:00 pm
              </p>
              </div>

        <div className="medical-center">
          <h3>Medical Center 2</h3>
          <p>
            <img src={LocationIcon} alt="Location" className="icon" /> 2464 Royal Ln. Mesa, New Jersey 45463
          </p>
          <p>
            <img src={PhoneIcon} alt="Phone" className="icon" /> (406) 544-0123
          </p>
          <p>
             <img src={TimeIcon} alt="Time" className="icon" /> <strong>Mon - Fri:</strong> 9:00 am – 22:00 pm
             </p>
             <p>
              <img src={TimeIcon} alt="" className="icon invisible-icon" /> <strong>Sat - Sun:</strong> 9:00 am – 20:00 pm
              </p>
              </div>

        <div className="social-icons">
          <img src={SocialsIcon} alt="Social Media Icons" className="socials-icon" />
        </div>
      </div>
    </div>
  );
};

export default MapSection;
