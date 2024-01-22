import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentICE = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Instrumentation & Control Engineering</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Instrumentation and Control Engineering was established in the year
          1993. The department offers Undergraduate (UG) - B.Tech. in Instrumentation and Control
          Engineering (ICE) since 1993, Post Graduate (PG) - M.Tech. in Industrial Automation since
          2020, and M.Tech. in Process Control and Instrumentation (offered jointly with the dept.
          of Chemical Engineering) since 1999 and research programmes - M.S. (by Research) and Ph.D.
          programmes in various fields of Instrumentation and Control Engineering since 2003.The
          B.Tech. ICE programme is accredited by the National Board of Accreditation for six years
          since 2023. The faculty members are working intensively in development of sensors,
          actuators and controls, industrial automation, product development, soft and precision
          mechatronics, process systems engineering, biomedical instrumentation, optical
          instrumentation and microscopy, signal processing applications, instrumentation for
          nanotechnology, RF and microwave sensors, etc..
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../ICE-1.png" alt="" />
        <img className="COEPictureMain" src="../ICE-2.png" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Product Design and Development</li>
            <li>Sensor Systems Design</li>
            <li>Network Control System</li>
            <li>Sliding Mode Control</li>
            <li>Energy Harvesting</li>
            <li>Assistive Devices</li>
            <li>Cyber Physical Systems</li>
            <li>Next Generation Controllers</li>
            <li>Automation for Agriculture</li>
            <li>Electromagnetic Sensors</li>
            <li>Microelectromechanical Systems</li>
            <li>Wireless Sensor Networks</li>
            <li>Integrated Intelligent Control of Big Data Systems</li>
            <li>Industrial Process Control</li>
            <li>Mechatronics, Robotics</li>
            <li>Optical Instrumentation</li>
            <li>Artificial Intelligence</li>
            <li>Biomedical Instrumentation</li>
            <li>Smart Materials and Structures</li>
            <li>Path Planning Algorithms for Unmanned Vehicles</li>
            <li>Embedded Systems</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentICE;
