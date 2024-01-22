import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentMME = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Metallurgical & Materials Engineering</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Presently the department of MME has seventeen faculty members working in advanced and
          diversified areas in the frontier of metallurgy and material science. The department tops
          in the number of citation and the h-index in the institute. Being a research-intensive
          department, every year many faculty members receive extra mural grants from various
          funding agencies and consultancy projects from reputed industries.The Department hosts
          state of the art research facility including sophisticated equipments like FESEM, XRD,
          Welding Robot, Optical Emission Spectra, Spark Plasma Sintering Machine, High Energy
          Planetary Ball Mill, Vacuum Induction Melting Furnace, Friction Stir Welding, Optical
          profilometer, Scratch Testing unit, Polymer and composite laboratory etc.,
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../MME-1.jpg" alt="" />
        <img className="COEPictureMain" src="../MME-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Process Metallurgy & Process Modelling (Physical & Mathematical)</li>
            <li>Extractive Metallurgy</li>
            <li>Non-destructive Evaluation</li>
            <li>Computational Materials Science</li>
            <li>Failure Analysis</li>
            <li>Metal Joining & Simulation</li>
            <li>Additive Manufacturing & Simulation</li>
            <li>Advanced Metal Forming & Simulation</li>
            <li>Corrosion Prevention and Surface Modification</li>
            <li>Energy Harvesting and Storage Material</li>
            <li>Particulate Technology</li>
            <li>Heavy & Light Alloys</li>
            <li>Super Alloys</li>
            <li>Alloy Development</li>
            <li>Sustainable Materials</li>
            <li>Electrochemistry</li>
            <li>Advanced Materials Characterization</li>
            <li>Nano-Technology</li>
            <li>Mechanical Behavior of Materials</li>
            <li>Nano-Ceramics</li>
            <li>Bio-Materials</li>
            <li>Advanced Welding</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentMME;
