import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentChemical = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Chemical Engineering</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Chemical Engineering at NIT, Tiruchirappalli established in 1967, has
          cultivated a legacy of academic distinction and research excellence. Beyond its three
          academic programs, the department boasts a robust offering of research avenues, with M.S.
          and Ph.D. programs in Chemical Engineering.From its inception, the department has not only
          demonstrated academic process but has also laid the cornerstone for a vibrant research
          community through the establishment of numerous research laboratories.Globally renowned
          for its exceptional research contributions in the realms of chemical and energy
          conservation, the department has nurtured over 125 Ph.D. graduates and established a
          remarkable twenty research laboratories.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Chemical-1.jpg" alt="" />
        <img className="COEPictureMain" src="../Chemical-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Energy & Alternate Fuels</li>
            <li>Fuel Cell Technology</li>
            <li>Bio-Energy</li>
            <li>Environmental Engineering</li>
            <li>Biochemical and Bioprocess Separations</li>
            <li>Wastewater Treatment</li>
            <li>Membrane Technology</li>
            <li>Sonochemical Processes</li>
            <li>Electrochemical Operations</li>
            <li>Process Control</li>
            <li>Linear and Non-Linear Predictive Control</li>
            <li>Modeling</li>
            <li>Advanced Materials such as Particulates and Functional Materials</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentChemical;
