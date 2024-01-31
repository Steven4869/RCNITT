import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';
import SIFCarousel from './SIFCarousel';

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
      {/* <div className="Content">
        <div className="ContentStarter">
          <strong>Vision:</strong> To enable cutting edge research, innovation, discovery through
          the provision of state-of-the-art instrumentation, expertise and support service
        </div>
        <div className="ContentStarter">
          <strong>Mission:</strong> To empower researchers, scientists, innovators across diverse
          fields with the necessary research infrastructure necessary to drive impactful research,
          innovation and education.
        </div>
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Objectives:</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>
              To cater to the needs of researchers, students and faculty by offering convenient,
              cost-effective, potential characterization and testing resources under one roof
            </li>
            <li>
              To conduct regular hands-on training programs, nurturing a skilled workforce capable
              of effectively utilizing advanced research equipment
            </li>
            <li>
              To ensure the effective utilization of sophisticated equipment by facilitating ease of
              access and encouraging collaborative sharing of the facility
            </li>
          </ul>
        </div>
      </div> */}
      {/* <div className="ProjectsHeading">
        {' '}
        SIF has consistently drawn users from various Institutions and colleges across South India.
      </div> */}
      <SIFCarousel />
      <Footer />
    </>
  );
};

export default COESIF;
