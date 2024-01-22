import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Header from './Header';

const COECombustion = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">CENTRE FOR COMBUSTION & EMISSION STUDIES</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Centre for Combustion and Emission Studies (CCES) was inaugurated by former Director, Dr.
          Mini Shaji Thomas, on 8th November 2021. The primary focus of CCES is to understand
          fundamentals of combustion and emission formation processes for various automotive and
          industrial applications. CCES is equipped with high-end workstations for simulating
          complex combustion problems and chemical kinetics of E-fuels.
        </div>
        <div className="ContentStarter">
          Further, the feasibility and potential limitations of the high-efficiency combustion
          concepts like gasoline compression ignition (GCI), reactivity-controlled compression
          ignition (RCCI), pre-chamber ignition system (PCI), ducted fuel injection (DFI) system
          were also being explored in CCES. CCES focuses on possible collaboration with industries,
          research labs and academic institutions.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../combustion_COE.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>
              High-end work station with CFD package facility for numerical study on combustion and
              emission
            </li>
            <li>
              Engine Combustion Analysis system (AVL Indimicro pressure sensor and crank angle
              encoder)
            </li>
          </ul>
        </div>
      </div>

      <div className="COEButtons">
        <div className="COEButtonBack">
          <a href="/CenterOfExcellence">BACK TO LIST</a>
        </div>

        <div className="COEButtonNext">
          <a href="/coeElectronics">VIEW NEXT COE</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COECombustion;
