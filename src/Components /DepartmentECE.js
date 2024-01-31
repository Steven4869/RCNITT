import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentECE = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Electronics & Communications Engineering</div>
      </div>
      <div className="DepartmentPictures">
        <img className="DepartmentPicturesMain" src="../ECE.jpeg" alt="" />
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Electronics and Communication Engineering (ECE) was started in the year
          1968. The department offers one B.Tech. Programme and two M.Tech. Programmes, namely
          Communications Systems and VLSI Systems, and all programmes are NBA Accredited. The
          department has 29 dedicated and research-focused faculty members and well-equipped 18
          research laboratories. The ECE department offers research programmes (M.S. and Ph.D.) in
          leading areas of Electronics and Communication Engineering and produced 114 PhD graduates.
          The faculty of ECE has contributed 16 textbooks and 53 book chapters.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../ECE-1.jpg" alt="" />
        <img className="COEPictureMain" src="../ECE-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>
              Wireless System Design/Physical Layer Design and Algorithms & Techniques for Cognitive
              Radio
            </li>
            <li>Free Space Optical Communication</li>
            <li>On-chip Antenna Design</li>
            <li>Microwave Integrated Circuits</li>
            <li>Optical Networks</li>
            <li>Smart Antennas</li>
            <li>Detection and Bearing Estimation</li>
            <li>Frequency Estimation</li>
            <li>Medical Image Analysis</li>
            <li>Bio Medical Application</li>
            <li>Energy Efficiency in Heterogeneous Networks</li>
            <li>Artificial Intelligence for Wireless Communication Networks</li>
            <li>Multicarrier Wireless Systems</li>
            <li>RIS-based Wireless Communication MIMO Systems</li>
            <li>OFDM, GFDM, and OTFS</li>
            <li>Vehicular Communication</li>
            <li>Microwave Antenna Design for 5G mm-wave Applications</li>
            <li>Microwave Photonics</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentECE;
