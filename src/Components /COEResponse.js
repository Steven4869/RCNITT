import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COEResponse = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">
          CENTRE FOR EXCELLENCE IN EMERGENCY RESPONSE SUPPORT SYSTEM
        </div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Emergency Response Support System (ERSS) is an indigenous integrated platform developed
          for intelligent emergency response. It is accessible through the pan-India number 112 and
          an app called '112 India’.
        </div>
        <div className="ContentStarter">
          With the incorporation of technologies such as Artificial Intelligence, Machine learning,
          Internet of Things and drones, the response time for any emergency is reduced which
          results in saving countless lives. The ERSS is implemented in India to improve the safety
          and security of Indians.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../COESS-1.jpg" alt="" />
        <img className="COEPictureMain" src="../COESS-2.jpg" alt="" />
        <img className="COEPictureMain" src="../COESS-3.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>
              Server with 20TB storage, Two PCs with dual screens, Two IP Phones, Two electronic
              Tablets
            </li>
            <li>Installation of Servers and Clients</li>
            <li>Setting up and configuring the basic digital maps</li>
            <li>PRI / Analog connectivity for routing of voice calls</li>
            <li>Configuring voice, SMS, eMail gateways</li>
            <li>Porting of operational data and System administration</li>
            <li>Setting up a ‘Panic’ signal receiving gateway</li>
            <li>
              Provisioning of necessary data / libraries / COTS software for the research works
            </li>
          </ul>
        </div>
      </div>
      <div className="COEButtons">
        <div className="COEButtonBack">
          <a href="/CenterOfExcellence">BACK TO LIST</a>
        </div>

        <div className="COEButtonNext">
          <a href="/coeCECASE">VIEW NEXT COE</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COEResponse;
