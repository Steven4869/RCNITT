import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentMech = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Mechanical Engineering</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          One among the first three departments to be established in 1964 in the institute, the
          Mechanical Engineering Department of NITT has the reputation of being among the finest in
          the country and is dedicated towards the advancement of science and technology. At present
          the department offers both undergraduate and postgraduate courses in various facets of
          Mechanical Engineering. The department offers Bachelor degree in Mechanical Engineering
          and Master of Technology courses in Thermal Power Engineering and Industrial Safety
          Engineering.The Mechanical Engineering Department of NITT has the credit to have the
          subject ranking in the Mechanical Engineering stream in QS World University ranking in the
          place of 401-450. Ours is the only Department in the country among NITs to have QS world
          ranking consecutively for the last FIVE years.We are the Leading Patent Makers in the
          Institute. The Department of Mechanical Engineering have received the Institute BEST
          DEPARTMENT AWARD during 2019 and 2022 in recognition of the contribution to the growth of
          the institute through Teaching-Learning & Resources, Research & Professional practice,
          Graduation Outcome and Outreach & Inclusivity in the Engineering discipline.
        </div>
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Phase Change Materials</li>
            <li>Refrigeration and Air-conditioning</li>
            <li>Materials Testing and Characterization</li>
            <li>Advanced Welding Engineering</li>
            <li>Additive Manufacturing</li>
            <li>Combustion Engineering</li>
            <li>Industrial Safety Engineering</li>
            <li>Vibration Analysis</li>
            <li>Composite Materials/Mechanics/FEM</li>
            <li>BioFuels</li>
            <li>Thermal Management</li>
            <li>Fluid Mechanics</li>
            <li>3D Manufacturing</li>
            <li>Waste to Wealth</li>
            <li>Computational Fluid Dynamics</li>
            <li>Airbag Gas Generants Analysis</li>
            <li>Engine Performance</li>
            <li>Calibration</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentMech;
