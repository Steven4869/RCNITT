import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentCSE = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Computer Science & Engineering</div>
      </div>
      <div className="DepartmentPictures">
        <img className="DepartmentPicturesMain" src="../CSE.jpeg" alt="" />
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Computer Science and Engineering, National Institute of Technology,
          Tiruchirappalli was started in the year 1982. With its cohesive team of 23 faculty
          members, it offers degrees at various levels, namely B.Tech., MTech., M.S. (By Research),
          and Ph.D. Being a part of premier institute, the faculty members and students of the
          department perform research in almost all the thrust areas and the department also ensures
          quality research at all the levels of the offered programmes.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../CSE-1.jpg" alt="" />
        <img className="COEPictureMain" src="../CSE-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Theoretical Computer Science</li>
            <li>Algorithms</li>
            <li>Graph Theory</li>
            <li>Game Theory</li>
            <li>Computer Architecture</li>
            <li>Embedded Systems</li>
            <li>Parallel Computing</li>
            <li>High-Performance Computing</li>
            <li>Operating Systems</li>
            <li>Computer Networks</li>
            <li>Wireless Sensor Networks</li>
            <li>Cloud, Fog/Edge & IoT</li>
            <li>Big Data Analytics</li>
            <li>Cryptography</li>
            <li>Data Science</li>
            <li>Software Engineering</li>
            <li>Information Security</li>
            <li>Hardware Security</li>
            <li>Computer Vision</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentCSE;
