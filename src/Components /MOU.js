import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';

import './MOU.css';
import Footer from './Footer';
import PictureCarousel from './PictureCarousel';
import PictureCarouselPrivate from './PictureCarouselPrivate';
import { Link } from 'react-router-dom';
import Header from './Header';

const MOU = () => {
  const projectsData = [
    { sno: 1, title: 'Bureau of Indian Standards (BIS)', agency: 'Active' },
    { sno: 2, title: 'Micro, Small and Medium Enterprises(MSME), New Delhi', agency: 'Active' },
    { sno: 3, title: 'BRIDGE Bharat Council, Thanjavur-613 403', agency: 'Active' },
    { sno: 4, title: 'Rane India', agency: 'Active' },
    { sno: 5, title: 'TCS Foundation', agency: 'Active' },
    {
      sno: 6,
      title: 'Centre for Development of Advanced Computing, Thiruvananthapuram (C-DAC)',
      agency: 'Active',
    },
  ];
  const tableRows = projectsData.map((project) => (
    <tr key={project.sno}>
      <td>{project.sno}</td>
      <td>{project.title}</td>
      <td className="ProjectsStatus">{project.agency}</td>
    </tr>
  ));
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">MEMORANDUM OF UNDERSTANDINGS</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          National Institute of Technology, Tiruchirappalli (NIT Trichy), has strategically
          cultivated a formidable network of 37 active Memoranda of Understanding (MOUs),
          underscoring its steadfast commitment to academic collaboration, research initiatives, and
          the exchange of knowledge. These MOUs are thoughtfully categorized into three domains,
          namely Industry Collaborations, Academic Collaborations with Indian Institutes and
          Organizations, and International Academic Collaborations. The industry partnerships,
          numbering 12, include collaborations with renowned entities such as Bharat Heavy
          Electrical Limited (BHEL) Trichy, PepsiCo India Holdings Pvt Ltd. (PEPSICO), and ABB
          Global Industries and Services Pvt Ltd, fostering a diverse range of engagements across
          sectors like energy, construction, and manufacturing. Simultaneously, NIT Trichy has
          solidified 17 MOUs with Indian academic institutions, including Indian Institute of
          Technology Madras and National Institute of Design, Ahmedabad, emphasizing a commitment to
          knowledge exchange, joint research, and academic synergy. Additionally, the institute has
          extended its global footprint with collaborations across eight MOUs with international
          entities, ranging from the French Institute for Advanced Mechanics (IFMA) to Konkuk
          University in South Korea, facilitating cultural exchange and broadening research
          horizons. These collaborations collectively exemplify NIT Trichy's dedication to fostering
          partnerships that transcend industries and span academic institutions globally, enriching
          research capabilities and creating an environment of continuous learning and innovation.
        </div>
        <div className="ContentStarter">
          The Institute actively collaborates with Academia and Industry partners through active MoU
          that enables the following opportunities
          <ul>
            <li>Funding Projets</li>
            <li>CSR Grants for innovation/product development</li>
            <li>Setting up Chair Professorship</li>
            <li>Establishing Centres of Excellences</li>
            <li>Student/Faculty visits</li>
            <li>Internships</li>
            <li>Working on Industry driven worklets</li>
          </ul>
        </div>
        <div className="ContentStarter">
          To cater the need of industry driven knowledge transfer, L&T sponsored CTM course has been
          successfully launched in the Dept. of Civil Engineering since 2019 (check year). Boeing
          also recognizes students with a meritorious scholarship of 1500 USD (check amount) every
          year. Tata Steel has been sponsoring research grant for addressing their R&D problems.
          Recently, the Directorate of Census Operations (DCO) has signed MoU with NIT Trichy to
          establish workstation to promote research on census data.
        </div>
      </div>
      <div className="StarterHeading">
        <div className="StarterHeadingText">
          Active Collaboration with Government Agencies through MoUs
        </div>
      </div>
      <div className="FundingAgenciesPics">
        <img className="FundingAgenciesPic" src="../MoUlogos.png" alt="" />
      </div>
      <div className="StarterHeading">
        <div className="StarterHeadingText">
          Active Collaboration with Private Agencies through MoUs
        </div>
      </div>
      <div className="FundingAgenciesPics">
        <img className="FundingAgenciesPic" src="../MoU_logos-1.png" alt="" />
      </div>
      {/* <div className="Collaboration">
        <div className="CollaborationHeading">
          Active Collaboration with Government Agencies through MoUs
        </div>
        <PictureCarousel />
        <div className="CollaborationHeading">
          Active Collaboration with Private Agencies through MoUs
        </div>
        <PictureCarouselPrivate />
      </div> */}

      <Footer />
    </>
  );
};

export default MOU;
