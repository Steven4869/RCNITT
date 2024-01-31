import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentChemistry = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Chemistry</div>
      </div>
      <div className="DepartmentPictures">
        <img className="DepartmentPicturesMain" src="../Chemistry.jpeg" alt="" />
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Chemistry was established in 1971. It is located in the OJAS building.
          The department offers research programmes for M.Sc. and Ph.D. in chemistry. The Department
          of Chemistry has been supported through DST-FIST Phase I and II and possesses excellent
          facilities and sophisticated equipment for the students during their course of study and
          also providing various consultancy services.Recent achievements include a collaborative
          investigation study with University of Melbourne, Australia, Kaohsiung Medical University,
          Taiwan towards the development of the food nutrients. The Department publishes on an
          average of 70-80 papers per year in reputed peer-reviewed international journal. The state
          of the art facilities of the department includes NMR, HR-MS, GC-MS,
          ElectrochemicalWorkstation, Solar simulator, HPLC, Ion chromatography, Fluorescence
          Spectrophotometer, BET Surface area analyzer
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Chemistry-1.png" alt="" />
        <img className="COEPictureMain" src="../Chemistry-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Solar Selective Coating</li>
            <li>Fuel Cell Catalysts</li>
            <li>Conducting Polymers</li>
            <li>Zeolite-Based Materials</li>
            <li>Dye Sensitized Solar Cells</li>
            <li>Organic Solar Cells</li>
            <li>Supercapacitors</li>
            <li>Photocatalysis</li>
            <li>Computational Model of Energy System</li>
            <li>Coordination Chemistry</li>
            <li>Bioinorganic Chemistry</li>
            <li>Microwave Mediated Synthesis</li>
            <li>Electrochemical Sensors</li>
            <li>Synthesis of Drug (-like) Molecules</li>
            <li>Heterocyclic Chemistry</li>
            <li>Physical Chemistry</li>
            <li>Spectroscopy & Chemical Dynamics</li>
            <li>Bioactive Natural Products</li>
            <li>Organic Synthesis</li>
            <li>Polymer Synthesis</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentChemistry;
