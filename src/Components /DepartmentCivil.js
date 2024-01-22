import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentCivil = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Civil Engineering</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Department of Civil Engineering is one of the founding departments of National Institute
          of Technology, Tiruchirappalli since 1964, over the years, has grown tremendously, and is
          now recognized as one of the best and major Engineering Departments among NITs. With its
          multifaceted faculty, it provides high quality teaching and research. Department offers
          academic programs including B.Tech. (Civil Engineering), M.Tech. in Transportation
          Engineering and Management, Structural Engineering, Environmental Engineering,
          Construction Technology and Management, Geotechnical Engineering, M.S. (By Research), and
          Ph.D. The state-of-the-art facility of the department includes : Roughometer, Marshall
          Stability Testing Apparatus, Dynamic Shear Rheometer, NCAT Asphalt Content Ignite,
          Variable Message sign board (VMS), Moisture Induced Sensitivity Tester, Column Testing
          Frame (100 T), Lateral Load Testing Frame (20 T), Computerized UTM, Data Acquisition
          system, Thermal Loading Industrial Furnace, ICPMS, FTIR, AAS, GC, IC, TOC Analyzer, Cyclic
          Triaxial Apparatus, Ground Penetration Radar, Hydraulic Actuator – Dynamic loading
          Apparatus, Geotextiles Testing Machine, Pile Integrity Test Apparatus, Signal Conditioning
          DAQ system, GIS based Surveying system.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Civil-1.jpg" alt="" />
        <img className="COEPictureMain" src="../Civil-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Transportation Engineering</li>
            <li>Pavement Management System (PMS)</li>
            <li>Statistical Modeling</li>
            <li>Road Construction Materials</li>
            <li>Structural Engineering</li>
            <li>Steel-High Strength Steel Members</li>
            <li>Stability of Steel Structures</li>
            <li>Mechanical Characteristics of Construction Materials</li>
            <li>Durability of Concrete Structures</li>
            <li>Environmental Engineering</li>
            <li>Water and Wastewater Treatment</li>
            <li>Solid Waste Management</li>
            <li>Water & Air Quality</li>
            <li>Geotechnical Engineering</li>
            <li>Soil Structure Interaction</li>
            <li>Geothermal Energy</li>
            <li>Hydraulics and Water Resources Engineering</li>
            <li>Watershed Management</li>
            <li>Water Resources Engineering</li>
            <li>Flood Routing</li>
            <li>GIS and Remote Sensing</li>
            <li>Surveying</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentCivil;
