import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COEAutomation = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">CENTRE FOR ADVANCED MANUFACTURING & AUTOMATION</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Centre for Advanced Manufacturing and Automation (CAMA), established in 2021 at the
          National Institute of Technology, Tiruchirappalli is a state of art facility in the
          southern region that provides extensive technology support to multiple industries.
        </div>
        <div className="ContentStarter">
          The 3D metal additive manufacturing facility, Femto laser micro-machining system, laser
          shock peening setup and high temperature indentation tester are unique systems available
          with the Centre.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Advanced_COE2.jpg" alt="" />
        <img className="COEPictureMain" src="../Advanced_COE3.jpg" alt="" />
        <img className="COEPictureMain" src="../Advanced_COE4.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>3D metal printing</li>
            <li>Femtosecond micromachining System</li>
            <li>Laser shock peening system</li>
            <li>High temperature indentation tester</li>
          </ul>
        </div>
      </div>
      <div className="COEButtons">
        <div className="COEButtonBack">
          <a href="/CenterOfExcellence">BACK TO LIST</a>
        </div>

        <div className="COEButtonNext">
          <a href="/coeTransportation">VIEW NEXT COE</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COEAutomation;
