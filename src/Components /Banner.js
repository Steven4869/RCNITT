import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <div className="Box">
        <div className="Rectangle">
          <div className="logo">
            <div className="logoContainer">
              <img src="/logo.png" alt="logo" className="logoSize" />
            </div>
          </div>
          <div className="text">
            <Link to={'/'}>
              <div className="eng-text">
                <div>NATIONAL INSTITUTE OF TECHNOLOGY</div>
                <div> TIRUCHIRAPPALLI</div>
              </div>
            </Link>
            <div className="tamil-text">
              <div>राष्ट्रीय प्रौद्योगिकी संस्थान </div>
              <div>तिरुचिरापल्ली</div>
            </div>
            <div className="tamil-text">
              <div>தேசிய தொழில்நுட்பக் கழகம்</div>
              <div>திருச்சிராப்பள்ளி</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
