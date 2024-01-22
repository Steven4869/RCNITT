import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COEElectronics = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">
          CENTRE FOR ELECTRONICS SYSTEM DESIGN, CALIBRATION AND TESTING
        </div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Inaugurated on November 24, 2021, the Centre for Electronics System Design, Calibration
          and Testing (CESDeCT) emerges as a pivotal hub driving the forefront of technological
          evolution. As the digital era unfolds, CESDeCT assumes a critical role in shaping the
          trajectory of electronics innovation. Its comprehensive scope, covering vital domains such
          as semiconductor device characterization, VLSI circuits, MICs, RF antennas, MEMS devices,
          power electronics, and embedded IoT systems, positions it as a catalyst for
          multidisciplinary breakthroughs.
        </div>
        <div className="ContentStarter">
          With its 726-square-foot expanse and a significant fund of 145 lakhs, CESDeCT not only
          offers cutting-edge infrastructure but also embodies the spirit of precision and
          excellence through meticulous testing and calibration methodologies. Its impact extends
          beyond technology, nurturing a generation of skilled engineers and researchers who will
          pave the way for a smarter and interconnected world.
        </div>
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Vector Network Analyzer (6GHz)</li>
            <li>
              Parametric Analyzer -Advanced measurement hardware for DC I-V, C-V, and pulsed I-V
              measurement
            </li>
            <li>Real-Time Spectrum Analyzer (18GHz)</li>
            <li>Vector Signal Generator (6GHz)</li>
            <li>Arbitrary Signal Generator (250MHz)</li>
            <li>
              RF Probe station - DC and RF measurements of Mini and Micro electronic devices and
              system
            </li>
            <li>RF Antenna measurement system Frequency Range 600MHz-18GHz</li>
            <li>Precision Triple output DC power supply</li>
            <li>Higher power DC supply</li>
          </ul>
        </div>
      </div>
      <div className="COEButtons">
        <div className="COEButtonBack">
          <a href="/CenterOfExcellence">BACK TO LIST</a>
        </div>

        <div className="COEButtonNext">
          <a href="/coeResponse">VIEW NEXT COE</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COEElectronics;
