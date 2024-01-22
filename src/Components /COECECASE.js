import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COECECASE = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">
          CENTRE FOR EXCELLENCE IN CORROSION AND SURFACE ENGINEERING
        </div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Centre of excellence in corrosion and surface engineering was established in 2012 and
          dedicated to advancing knowledge and innovations in the fields of corrosion science and
          surface engineering. Received patronage from NIT Tiruchirappalli, DST, Ministry of Coals,
          NLCIL, Railways and Corporate sectors such as RANE.
        </div>
        <div className="ContentStarter">
          The Centre is poised for excellence in research and consultancy with many objectives
          including effective collaboration with small, medium and large scale industries. This
          Centre play a crucial role in addressing the challenges related to the degradation and
          protection of materials and surfaces in industries such as manufacturing, infrastructure,
          energy and transportation.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../CECASE_1.jpg" alt="" />
        <img className="COEPictureMain" src="../CECASE_2.jpg" alt="" />
        <img className="COEPictureMain" src="../CECASE_3.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>High Temperature Hot Corrosion Furnace</li>
            <li>High Temperature Impedance Analyser</li>
            <li>High Temperature Oxidation Furnace</li>
            <li>Hot Air Jet Erosion Equipment</li>
            <li>Laser Materials Processing Workstation</li>
            <li>Multichannel Potentiostat</li>
            <li>Optical Microscopy with Image Analyser</li>
            <li>Pulse Rectifier</li>
            <li>Reciprocating Wear Testing Unit</li>
            <li>High Temperature Vacuum Tribometer</li>
            <li>Two body and Three body Abrasion Equipment</li>
          </ul>
        </div>
      </div>
      <div className="COEButtons">
        <div className="COEButtonBack">
          <a href="/CenterOfExcellence">BACK TO LIST</a>
        </div>

        <div className="COEButtonNext">
          <a href="/coeManufacturing">VIEW NEXT COE</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COECECASE;
