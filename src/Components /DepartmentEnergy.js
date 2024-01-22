import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentEnergy = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Energy & Environment</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Energy and Environment (DEE) formerly, Centre for Energy and
          Environmental Science and Technology (CEESAT) was established at Regional Engineering
          College (present-day NITT) in 1995, under the auspices of UK – India RECs Project: Energy
          Theme. CEESAT was renamed as Department of Energy and Environment in 2012.The mission of
          DEE is to develop solutions for a better energy and environmental future, through
          high-quality research and consultancy services in the areas of sustainable energy
          technologies, environmental pollution control, and energy and environmental audit. DEE
          harbours an NABL accredited calibration lab and ISO 9001:2008 certified state-of-the-art
          laboratories equipped with sophisticated instruments and software, with the objective of
          catering to academic and industrial research needs.The department is committed to convert
          its research outcomes into a real time technology transfer to the society and industry
          where it meets out its ultimate objective.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Energy-1.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Thermal Energy Storage Systems</li>
            <li>Bio-products and Biofuels from Algae</li>
            <li>Wastewater Treatment</li>
            <li>Waste to Wealth</li>
            <li>Life-cycle Analysis of Energy and Environmental Systems</li>
            <li>Environmental Geo-technique</li>
            <li>Air Pollution and Solid Waste Management</li>
            <li>Carbon Capture Technologies</li>
            <li>Green Hydrogen</li>
            <li>Thermal Chemical Conversion of Biomass and Coal</li>
            <li>Solar Thermal Energy Storage</li>
            <li>Industrial Energy Conservation, Audit, and Management</li>
            <li>Coal & Steel Technology Value-added Products from Biomass</li>
            <li>Thermal Management of Futuristic Flexible Electronic Devices</li>
            <li>Sustainable Sanitation</li>
            <li>Smart Grid Technologies</li>
            <li>Solar PV Power Generation</li>
            <li>Microalgal and Cyanobacterial Biotechnology</li>
            <li>AI/ML Applications to Energy Systems</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentEnergy;
