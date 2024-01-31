import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentEEE = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Electrical & Electronics Engineering</div>
      </div>
      <div className="DepartmentPictures">
        <img className="DepartmentPicturesMain" src="../EEE.jpeg" alt="" />
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Electrical and Electronics Engineering, NIT Tiruchirappalli was started
          in the year 1964. In addition to three academic programmes, the department offers research
          programmes (M.S. and Ph.D.) in Electrical and Electronics Engineering. Since its
          inception, the department has not only shown academic excellence, but also laid strong
          foundation for the research community by establishing many research laboratories. The
          Department is globally recognized for excellence in research in the field of wind and
          solar electrical energy conversion systems.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../EEE-1.jpg" alt="" />
        <img className="COEPictureMain" src="../EEE-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Renewable Energy Systems</li>
            <li>Power Electronic Converters</li>
            <li>Control and Automation</li>
            <li>Nano and Micro Grids</li>
            <li>Electric Vehicles</li>
            <li>Power Quality</li>
            <li>Robotics</li>
            <li>Solar PV Conversion Systems</li>
            <li>Smart Distribution Systems</li>
            <li>AI & Soft Computing</li>
            <li>VLSI Systems</li>
            <li>Energy Markets</li>
            <li>Wide Area Disturbance Monitoring</li>
            <li>Wireless Power Transfer</li>
            <li>Internet of Things (IoT)</li>
            <li>Battery and Energy Management Systems</li>
            <li>Development of WBG (Wide Band Gap) Devices for Electronic Circuits</li>
            <li>Wireless Sensor Network</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentEEE;
