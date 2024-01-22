import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentCA = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Computer Applications</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Computer Applications at National Institute of Technology,
          Tiruchirappalli is the premier academic research department in which Faculty members of
          the department have developed technology for biometric based security, Computer vision-
          based solutions for Industry problems and AI based technologies for societal related data
          challenges. We have expertise to carry out interdisciplinary and collaborative research to
          solve any societal and Industrial problems.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../CA-1.png" alt="" />
        <img className="COEPictureMain" src="../CA-2.png" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Image Processing & Computer Vision</li>
            <li>Cyber Security</li>
            <li>Big Data Analytics</li>
            <li>Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Human-Computer Interaction</li>
            <li>IoT (Internet of Things)</li>
            <li>Data Mining</li>
            <li>Nature Inspired Computing</li>
            <li>Cloud Optimization</li>
            <li>Natural Language Processing</li>
            <li>Bioinformatics</li>
            <li>Cyber Defence</li>
            <li>Vulnerability Assessment</li>
            <li>Digital Forensics</li>
            <li>Soft Computing</li>
            <li>Wireless Sensor Network</li>
            <li>Deep Learning</li>
            <li>Information Processing & Security</li>
            <li>Parallel Computing</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentCA;
