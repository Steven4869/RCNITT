import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import { Chart } from 'react-google-charts';
import Footer from './Footer';

import './Consultancy.css';
import Header from './Header';
const Consultancy = () => {
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
  const data = [
    {
      name: '2018',
      amount: '3.12',
    },
    {
      name: '2019',
      amount: '5.45',
    },
    {
      name: '2020',
      amount: '2.44',
    },
    {
      name: '2021',
      amount: '3.37',
    },
    {
      name: '2022',
      amount: '4.85',
    },
    {
      name: '2023',
      amount: '6.49',
    },
    {
      name: '2024',
      amount: '15',
    },
  ];

  const chartData2 = [
    ['Year', 'Consultancy Projects (INR Crore)'],
    ...data.map(({ name, amount }) => [name, parseFloat(amount)]),
  ];

  const options2 = {
    title: 'Amount Data',
    bar: { groupWidth: '30%' },
    hAxis: { title: 'Year', minValue: 0 },
    vAxis: { title: 'Amount Sanctioned in (INR Crore)', minValue: 0 },
    legend: { position: 'top' },
  };
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">CONSULTANCY</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          NIT Trichy demonstrates exceptional academic capabilities that transcend conventional
          limitations, as seen vibrant engagement of its many departments in pioneering consultancy
          initiatives. The Department of Civil Engineering has collaborated with the Airports
          Authority of India, M/s.D.P.Jain & Co Infrastructure Pvt Ltd, M/s.Arch Project Consultants
          Pvt Ltd, PWD/WRD, M/s.Electro Tech Engineers, ITD Cementation Limited, M/S. KITCO LTD.,
          and Kochin Airport Authority, making many valuable contributions. The department's
          geological investigations and design vetting for airport expansions and structural design
          evaluations for various projects have shown its versatility and proficiency.
        </div>
        <div className="ContentStarter">
          The Departments of Chemical Engineering, Chemistry, EEE, Management Studies, and MME have
          made dramatic advances in their collaborative efforts. The Department of Chemical
          Engineering and BHEL Trichy collaborated to reclaim E-Waste using a catalytic reactor. The
          Department of Chemistry and BHEL Trichy collaborated to create Nano/Cost-effective
          insulation coatings, which revolutionized high-temperature insulation.
        </div>
        <div className="ContentStarter">
          The Department of Electrical and Electronics Engineering (EEE) and BHEL Trichy
          collaborated on battery condition assessment criteria to overcome major battery
          technological challenges. The Management Studies Department regularly organizes Management
          Development Programmes (MDPs) with Neyveli Lignite Corporation Limited, using its
          expertise. This partnership bridges academia and industry.
        </div>
        <div className="ContentStarter">
          The Department of MME is working with M/s. Loesche Energy Systems India Pvt Ltd. to
          advance and impart Durni Coating on Half Shell expertise. This extensive partnership
          requires adhering to specific requirements and sharing coating system principles and
          practices.
        </div>
        <div className="ContentStarter">
          The above relationships demonstrate NIT Trichy's commitment to transdisciplinary research,
          industry partnerships, and knowledge application for real-world results. The institution's
          diverse projects, which include sustainable technical advances and effective management
          practices, demonstrate its ability to foster innovation and constructive change. There are
          different testing & characterization related services offered through different
          Departmental labs and Sophisticated Instrumentation Facility (SIF). NIT Trichy takes up
          four types of consultancy projects namely Institutional Consultancy (IC), Retainer
          Consultancy (RC), Research Based Industrial Consultancy (RBIC) and Technical Services
          (TS).
        </div>
      </div>
      <div className="StarterHeading">
        <div className="StarterHeadingText">Major Contributors</div>
      </div>
      <div className="FundingAgenciesPics">
        <img className="FundingAgenciesPic" src="../ConsultingFunding.png" alt="" />
      </div>
      <div className="FundingAgenciesPics">
        <img className="FundingAgenciesPic" src="../ConsultingFunding2.png" alt="" />
      </div>

      <div className="ResearchPlot">
        <div className="ResearchPlotHeading">
          Revenue Generated (INR Crore)
        </div>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="400px"
          data={chartData2}
          options={options2}
        />
      </div>
      <Footer />
    </>
  );
};

export default Consultancy;
