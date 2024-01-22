import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentPhysics = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Physics</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Physics offers M.Tech in Nondestructive testing, M.Sc. in Physics, and
          Ph.D. programmes utilizing the expertise of the faculty members trained in top institutes.
          The expertise of the Department includes metal-oxide-based fiber optic gas sensors,
          perovskite oxides and their composites for energy storage applications, supercapacitors,
          band gap engineering in semiconductors, multi-ferroic nanocomposites, epoxy composites for
          battery applications, polymer hetero structures, magnetic properties of metals and alloys,
          materials for defense applications, thin film solar cells, lead zirconate titanate
          transducers, carbon nanotubes based energy devices, and flexible nano generators.
          Sponsored projects with funding from various agencies, such as DST, DRDO, NRB, and CSIR
          were undertaken in the above-mentioned research areas.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Physics-1.jpg" alt="" />
        <img className="COEPictureMain" src="../Physics-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Energy Harvesting and Storage</li>
            <li>Lasers and Photonics</li>
            <li>Gas Sensors</li>
            <li>Magnetic Materials</li>
            <li>Carbon Nanomaterials</li>
            <li>Astrophysics</li>
            <li>Photocatalysis</li>
            <li>Biomaterials</li>
            <li>Thin Film Photovoltaics</li>
            <li>Non-linear Optic Materials</li>
            <li>Ferroelectrics & Multiferroics</li>
            <li>Piezoelectric Materials</li>
            <li>Micro-Robotics</li>
            <li>Advanced Ultrasonic Non-destructive Testing</li>
            <li>Thermography</li>
            <li>Condensed Matter Theory</li>
            <li>High Energy Physics</li>
            <li>Nano Photonics</li>
            <li>Polymer Nanocomposites</li>
            <li>Smart Actuators & Sensors</li>
            <li>Spintronics</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentPhysics;
