import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import { Chart } from 'react-google-charts';
import './ResearchActivities.css';
import AliceCarousel from 'react-alice-carousel';
import Header from './Header';
const ResearchActivities = () => {
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
  
  const FundingData = [
    { name: '2018', SponsoredProjects: '17.70,99,738' },
    { name: '2019', SponsoredProjects: '14,91,85,599' },
    { name: '2020', SponsoredProjects: '3,37,65,702' },
    { name: '2021', SponsoredProjects: '8,80,11,612' },
    { name: '2022', SponsoredProjects: '14,44,68,632' },
    { name: '2023', SponsoredProjects: '11,60,49,071' },
    
  ];
  const chartData2 = [
    ['Year', 'Sponsored Projects (INR Crore)'],
    ...FundingData.map(({ name, SponsoredProjects }) => [name, parseFloat(SponsoredProjects)]),
  ];
  const options2 = {
    title: 'Funding Data',
    bar: { groupWidth: '30%' },
    hAxis: { title: 'Year', minValue: 0 },
    vAxis: { title: 'Sponsored Projects Sanctioned Amount', minValue: 0 },
    legend: { position: 'top' },
  };
  const carouselItems = [
  
    <div className="ResearchPlot">
      <div className="ResearchPlotHeading">Funds Spent (INR Crore) on Research Projects</div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={chartData2}
        options={options2}
      />
    </div>,
  ];
  const carouselOptions = {
    responsive: {
      0: { items: 1 },
    },
  };
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">RESEARCH ACTIVITIES</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Office of Research & Consultancy at NIT Trichy offers administrative and managerial
          support for smooth execution of Sponsored projects, consultancy works, MoU vetting &
          execution, Patent filing, CSR projects, implementation of MSME activities, oversees
          activities of Centres of Excellences, Incubation & Start-up Activities. Over the years,
          the scope of R&D activities of the Institute has diversified into different fronts and the
          drive is towards product development, technology transfer, commercialization of innovative
          ideas through different pre-incubation and incubation facilities such as IPR cell, CEDI
          incubation cell, ISRO Space Technology Incubation Cell, NRDC Innovation Facilitation
          Centre, Institute Innovation Council etc. Towards this front, Institute has also been
          successful in grabbing CSR grants of Industry R&D players such as Siemens India, TCS, Tata
          Steel.
        </div>
        <div className="ContentStarter">
          The Office of R&C at NIT Trichy has been routinely facilitating support for execution of
          DST SRG, DST CRG, Indo-bi lateral calls such as Indo-Russia, Indo-Egypt grants. Our
          faculty also works closely with ISRO, DRDO, BHEL, GAIL, NRB, NLC, HAPP, OFC etc in
          addressing some of the societally relevant R&D problems of the nation. NIT Trichy takes
          pride in its contribution in designing the test bed for the Chandrayan Satellite Mission
          [reference]. Our faculty also collaborate actively with national labs such as VSSC, SAC,
          SCL through collaborative projects offered through research basket of ISRO and work on
          product/prototype development. This office also facilitates the seed grant of Rs. 5 lakhs
          for young faculty in catalyzing the research labs and infrastructure at the beginning of
          their tenure in the campus.
        </div>
        <div className="ContentStarter">
          MSME design calls, awareness programmes on schemes and opportunities, Executive Skill
          development programmes has been undertaken by NIT Trichy as part of MSME Design
          Implementation Agency. This office has also been actively working with MSME in all its
          initiatives including the grant support for setting up of Centres of Excellences in thrust
          areas and MSME Chair professorship call.
        </div>
      </div>
      <AliceCarousel  items={carouselItems}  />
      <Footer />
    </>
  );
};

export default ResearchActivities;
