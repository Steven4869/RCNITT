import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COESIF = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">SOPHISTICATED INSTRUMENTATION FACILITY (SIF)</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Sophisticated Instrumentation Facility (SIF) of NIT Tiruchirappalli encompasses
          cutting edge resources that plays a pivotal role in advancing research and development
          across various fields of science and technology. This facility typically comprises
          state-of-the-art equipment and serves as a hub for innovation and novel research.
        </div>
        <div className="ContentStarter">
          SIF has been operating with dedicated office space and exclusive technical staffs since
          2021. SIF has completed 2000 tests from 400 internal/external users in the last 2 years.
          SIF has been working towards a Single window system for booking of the facility through
          ISTEM portal. Workshops and Hands-on training utilizing high end equipment are being
          organized by SIF regularly to develop skilled manpower and scientific temper.
        </div>
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Field Emission Scanning Electron Microscope</li>
            <li>X-Ray Diffractometer</li>
            <li>Inductively Coupled Plasma Meter</li>
            <li>Hyphenated TGA GC MS</li>
            <li>Inductively Coupled Plasma Mass Spectrometer</li>
            <li>Atomic Absorption Spectrophotometer</li>
            <li>Integrated Equipment for Dynamic Characterization of Structural Elements</li>
            <li>Laser material processing workstation</li>
            <li>Laser Micromachining WorkStation</li>
            <li>Friction Stir Welding</li>
            <li>Universal Tribometer</li>
            <li>Scratch Testing Unit</li>
            <li>Optical Profilometer</li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default COESIF;
