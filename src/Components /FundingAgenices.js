import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const FundingAgenices = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">FUNDING AGENCIES</div>
      </div>
      <div className="StarterHeading">
        <div className="StarterHeadingText">Major Contributors</div>
      </div>
      <div className="FundingAgenciesPics">
        <img className='FundingAgenciesPic' src="../Logos.png" alt="" />
      </div>
      <div className="FundingAgenciesPics">
        <img className='FundingAgenciesPic' src="../Funding.png" alt="" />
      </div>
      
      <Footer />
    </>
  );
};

export default FundingAgenices;
