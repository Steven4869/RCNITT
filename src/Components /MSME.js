import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MSME = () => {
  const data = [
    {
      sno: 1,
      date: '04/02/2023',
      title: 'Design and Fabrication',
      participants: 33,
      venue: 'TIDISSIA, SIDCO Industrial Estate, Ariyamangalam, Tiruchirappalli',
    },
    {
      sno: 2,
      date: '08/02/2023',
      title: 'Engineering Work Design',
      participants: 43,
      venue: 'District Industries Centre, Industrial Estate, Thattanchavady, Puducherry',
    },
    {
      sno: 3,
      date: '23/02/2023',
      title: 'Indigenous Toy Design And Manufacturing',
      participants: 61,
      venue: 'Venkatesa Perumal Complex, Velar street, Vilachery',
    },
    {
      sno: 4,
      date: '28/02/2023',
      title: 'Composite Materials, Machine Design and Demonstration of 3D printing and Drone',
      participants: 110,
      venue: 'NADISSTIA Building, SIDCO Industrial Estate Nagore Road, Nagapattinam.',
    },
    {
      sno: 5,
      date: '06/03/2023',
      title: 'Design and Fabrication',
      participants: 51,
      venue: 'Indra Ganesan College NH45B, Madurai Main Road, Manikandam, Tiruchirappalli',
    },
    {
      sno: 6,
      date: '09/03/2023',
      title: 'Design Techniques for Industries',
      participants: 20,
      venue: 'Athur SIDCO Industrial Estate, Karur.',
    },
    {
      sno: 7,
      date: '11/03/2023',
      title: 'Advanced Design Techniques for Food Industries',
      participants: 128,
      venue: 'Theosophical Society, Tanjore',
    },
    {
      sno: 8,
      date: '14/03/2023',
      title: 'Design for Handcraft and food Industries',
      participants: 92,
      venue: 'K.M Mahal Near by Thandayuthapani Temple, Pudukkottai.',
    },
    {
      sno: 9,
      date: '15/03/2023',
      title: 'Design Component under MSME Innovative Scheme',
      participants: 45,
      venue: 'Gudiyatham Match Consortium Pvt.Ltd. Melmuttukur village, Gudiyatham',
    },
  ];
  const tableRows = data.map((project) => (
    <tr key={project.sno}>
      <td>{project.sno}</td>
      <td>{project.date}</td>

      <td className="TitleProjects">{project.title}</td>
      <td>{project.participants}</td>
      <td className='Venue'>{project.venue}</td>
    </tr>
  ));
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">MSME</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          MSME design calls, awareness programmes on schemes and opportunities, Executive Skill
          development programmes has been undertaken by NIT Trichy as part of MSME Design
          Implementation Agency. This office has also been actively working with MSME in all its
          initiatives including the grant support for setting up of Centres of Excellences in thrust
          areas and MSME Chair professorship call.
        </div>
      </div>
      <div className="Infrastructure">
        <div className="CenterHeading">
          Details of the activities approved under MSME- Design scheme since appointment as IA:
        </div>
        <div className="InfrastructurePointsBullet">
          <ul>
            <li>Three students’ projects</li>
            <li>One design project</li>
            <li>10 Nos of Awareness programmes</li>
            <li>Design funding under RAMP scheme</li>
            <li>Advanced ESDP</li>
            <li>Nominated for MSME Chair Professorship</li>
            <li>Submitted proposals for CoE’s</li>
          </ul>
        </div>
      </div>
      <div className="Infrastructure">
        <div className="CenterHeading">MSME Design Project 2021-22 - Student Projects </div>
        <div className="InfrastructurePointsBullet">
          <ul>
            <li>
              Identification & Analysis of raw materials to improve the traditional toy quality
            </li>
            <li>Optimization of sintering process parameters of Kiln for traditional mud toys </li>
            <li>Traffic rules and traffic sign-based toy </li>
          </ul>
        </div>
      </div>
      <div className="Infrastructure">
        <div className="CenterHeading">
          MSME Advanced Executive Skill Development Programs (AESDP 2023-24){' '}
        </div>
        <div className="InfrastructurePointsBullet">
          <ul>
            <li>
              NIT Trichy is awarded with Rs. 8 lakhs for the Advanced ESDP on ‘Solar Photovoltaics
              Design & Industrial Applications’
            </li>
          </ul>
        </div>
      </div>
      <div className="StarterHeading">
        <div className="StarterHeadingText">Details of 10 Awareness Programme</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Ten Awareness programs were conducted for different MSME sectors to promote the existing
          infrastructure at NIT Trichy and interacted about the requirements of the technical
          support from the Institute:
        </div>
      </div>
      <div className="ProjectsTable">
        <table className="ProjectTable">
          <thead className="ProjectTableHead">
            <tr className="ProjectTableRow">
              <th>S.No</th>
              <th>Date</th>
              <th>Title of the Program</th>
              <th>No. of Participants</th>
              <th>Venue</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default MSME;
