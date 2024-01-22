import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COETransportation = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">CENTRE FOR EXCELLENCE IN TRANSPORTATION ENGINEERING</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Centre of Excellence in Transportation Engineering (CETransE) at NIT Tiruchirappalli
          was established in the year 2013 by the Department of Higher Education, Ministry of Human
          Resource Development, and Government of India under the scheme ‘Establishment of 50
          Centers of Excellence in frontier areas of Sciences and Technology’.
        </div>
        <div className="ContentStarter">
          It was established with a vision of creating sustainable transportation technologies and
          infrastructure for optimal national and societal impact through shaping professional
          Transportation Engineers, assisting National and State agencies, providing R&D for
          Industry and offering continuing education. It is carrying out focused research in the
          areas of Transportation Planning, Intelligent Transportation Systems and Pavement
          Engineering.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../COETrans.jpg" alt="" />
        <img className="COEPictureMain" src="../COETrans2.jpg" alt="" />
        <img className="COEPictureMain" src="../COETrans3.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Dynamic Shear Rheometer</li>
            <li>NCAT Asphalt Content Ignition Oven</li>
            <li>Rolling Thin Film Oven</li>
            <li>CoreLok</li>
            <li>Digital Marshall Stability apparatus</li>
            <li>Plate Load Test</li>
            <li>Handheld Roughometer</li>
            <li>Marshall Automatic Compactor</li>
            <li>TIRTL (Speed measurement)</li>
          </ul>
        </div>
      </div>
      <div className="COEButtons">
        <div className="COEButtonBack">
          <a href="/CenterOfExcellence">BACK TO LIST</a>
        </div>

        <div className="COEButtonNext">
          <a href="/coeHarvesting">VIEW NEXT COE</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COETransportation;
