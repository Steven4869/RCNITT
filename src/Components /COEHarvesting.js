import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COEHarvesting = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">CENTRE FOR EXCELLENCE IN ENERGY HARVESTING & STORAGE</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          This Center was established under the HEFA scheme, and it was inaugurated in 2021. Centre
          is located in the Old library building, CEDI. COEHST has a state-of-the-art facility to
          study, innovate, develop, and characterize materials that can harness energy and storage
          through technological advancements.
        </div>
        <div className="ContentStarter">
          The Centre has facilities to study the physical and thermal properties of nanoparticles,
          nano fluids, phase change materials, metals and alloys, foams, insulation materials,
          surface, and thin films, biomaterials, etc. COEHST will be highly useful for industrial
          scale parametric testing of material to process/fabrication industries, bio-medical
          products, solar sector, green buildings, automotive, waste heat recovery possibilities,
          thermal management of electronic circuits, food processing/storage and space avionics
          thermal control.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../energy_COE.jpg" alt="" />
        <img className="COEPictureMain" src="../energy_COE2.jpg" alt="" />
        <img className="COEPictureMain" src="../energy_COE3.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Trident C-Therm Thermal Conductivity Analyzer</li>
            <li>Rheometer</li>
            <li>Differential Scanning Calorimetry</li>
            <li>Thermogravimetric Analyzer</li>
            <li>Force Tensiometer</li>
            <li>FTIR Spectrometer</li>
            <li>UV-Visible Spectrometer</li>
            <li>Thermal Cycling Chamber</li>
          </ul>
        </div>
      </div>
      <div className="COEButtons">
        <div className="COEButtonBack">
          <a href="/CenterOfExcellence">BACK TO LIST</a>
        </div>

        <div className="COEButtonNext">
          <a href="/coeML">VIEW NEXT COE</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COEHarvesting;
