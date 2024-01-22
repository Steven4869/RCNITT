import React, { useEffect, useState } from 'react';

import './COE.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Header from './Header';

const COE = () => {
  const [isNavSticky, setNavSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavSticky(true);
    } else {
      setNavSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const cardsData = [
    {
      picture: './CECASE.jpg',
      heading: 'Centre for Corrosion Science & Surface Engineering (CECASE)',
      link:'/coeCECASE',
    },
    {
      picture: './COEManufacture.jpg',
      heading: 'Centre for Excellence in Manufacturing',
      link:'/coeManufacturing',
    },
    {
      picture: './COEManufacturing.jpg',
      heading: 'Centre for Excellence in Advanced Manufacturing and Automation',
      link:'/coeAutomation',
    },
    {
      picture: './COETrasnportation.jpg',
      heading: 'Centre for Excellence in Transportation Engineering ',
      link:'/coeTransportation',
    },
    {
      picture: './COEHarvesting.jpg',
      heading: 'Centre for Excellence in Energy Harvesting and Storage',
      link:'/coeHarvesting',
    },
    {
      picture: './COEMachineLearning.jpg',
      heading: 'Centre for Excellence in Artificial Intelligence & Machine Learning',
      link:'/coeML',
    },
    {
      picture: './COECombustion.jpg',
      heading: 'Centre for Excellence in Combustion and Emission Studies',
      link:'/coeCombustion',
    },
    {
      picture: './COEElectronics.jpg',
      heading: 'Centre for Excellence in Electronics System Design, Calibration & Testing',
      link:'/coeElectronics',
    },
    {
      picture: './COEResponse.png',
      heading: 'Centre for Excellence in Emergency Response Support System',
      link:'/coeResponse',
    },
  ];

  const [displayedCards, setDisplayedCards] = useState(6);

  const showMoreCards = () => {
    setDisplayedCards(displayedCards + 6);
  };

  const showLessCards = () => {
    setDisplayedCards(6);
  };
  console.log(displayedCards);
  return (
    <>
      <Header />

      <div className="Heading">
        <div className="HeadingText">CENTERS OF EXCELLENCE</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Welcome to the vibrant hub of cutting-edge innovation and research initiatives at the
          National Institute of Technology, Tiruchirappalli. Our institution stands at the forefront
          of pioneering Centres of Excellence (CoEs), each dedicated to fostering advancements in
          various domains of Engineering and Science.
        </div>
        <div className="ContentStarter">
          Centres of Excellences (CoE) represent our commitment to addressing global demands by
          nurturing knowledge exchange, groundbreaking research, and state-of-the-art resources
          across a spectrum of disciplines. At NIT Trichy, we proudly host an array of specialised
          CoEs, each contributing significantly to the fields they represent. These centres are
          integral in fostering knowledge exchange, pioneering research, and utilising
          state-of-the-art resources across various disciplines.
        </div>
        <div className="ContentStarter">
          The Institute has state of the art infrastructure and research facilities in its Centres
          of Excellence in niche areas of research. Centres of Excellences (CoEs) and
          Inter-Disciplinary Laboratories (IDLs) at NIT Trichy established in different niche areas
          to create an adaptable setting conducive to both multi-disciplinary and interdisciplinary
          research for taking up societal and industrial demands. Through dedicated investments and
          collaborative partnerships, these CoEs not only serve as research hotspots but also offer
          training programs, internships, and industrial consulting services, catering to diverse
          industries and supporting numerous engineering colleges across Tamil Nadu. These Centers
          of Excellences opens up opportunity for mutually advantageous collaborations and foster
          interdisciplinary synergies to contribute towards achieving Sustainable Development Goals
          that includes but not limited to Affordable & Clean Energy, Clean Water & Sanitation,
          Industry Innovation & Infrastructure, Sustainable Cities & Development, Responsible
          Consumption & Production etc.
        </div>
        <div className="ContentStarter">
          Centres of Excellences (CoEs) and Inter-Disciplinary Laboratories (IDLs) at NIT Trichy
          established in different niche areas to create an adaptable setting conducive to both
          multi-disciplinary and interdisciplinary research for taking up societal and industrial
          demands. Through dedicated investments and collaborative partnerships, these CoEs not only
          serve as research hotspots but also offer training programs, internships, and industrial
          consulting services, catering to diverse industries and supporting numerous engineering
          colleges across Tamil Nadu. These Centers of Excellences opens up opportunity for mutually
          advantageous collaborations and foster interdisciplinary synergies to contribute towards
          achieving Sustainable Development Goals that includes but not limited to Affordable &
          Clean Energy, Clean Water & Sanitation, Industry Innovation & Infrastructure, Sustainable
          Cities & Development, Responsible Consumption & Production etc.
        </div>
      </div>
      <div className="StarterHeading">
        <div className="StarterHeadingText">Our Centers of Excellence</div>
      </div>
      <div className="CardContainer">
        {cardsData.slice(0, displayedCards).map((card, index) => (
          <div key={index} className="Card">
            <div className="CardPicture">
              <img className="CardPictures" src={card.picture} alt="" />
            </div>
            <div className="CardHeading">{card.heading}</div>
            <Link to={card.link} className="CardButton">
              KNOW MORE
            </Link>
          </div>
        ))}
      </div>
      {cardsData.length > displayedCards && (
        <div className="ViewButtons">
          <button className="ViewButtonsMore" onClick={showMoreCards}>
            View More
          </button>
          {displayedCards > 6 && <button onClick={showLessCards}>View Less</button>}
        </div>
      )}

      <Footer />
    </>
  );
};

export default COE;
