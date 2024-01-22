import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';
import data from './projects.json';

const MOUProjects = () => {
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
    {
      sno: 7,
      title: 'Centre for Development of Advanced Computing, Thiruvananthapuram (C-DAC)',
      agency: 'Active',
    },
    { sno: 8, title: 'National Highways Authority of India (NHAI)', agency: 'Active' },
    {
      sno: 9,
      title: 'Centre for Development of Advance Computing (C-DAC), Pune  (Fast Computing)',
      agency: 'Active',
    },
    {
      sno: 10,
      title: 'National Research Development corporation(NRDC), New Delhi',
      agency: 'Active',
    },

    {
      sno: 11,
      title: 'Society for Applied Microwave Electronics Engineering & Research (SAMEER), Chennai',
      agency: 'Active',
    },
    { sno: 12, title: 'Cental Power Research Institute(CPRI)', agency: 'Active' },
    {
      sno: 13,
      title: 'Indian Space Research Organisation(STIC & ISRO), Bengaluru',
      agency: 'Active',
    },
    {
      sno: 14,
      title: 'Society for Electronic Transaction and Security (SETS),Chennai',
      agency: 'Active',
    },
    { sno: 15, title: 'Indian Institute of Technology Bombay(IITB), Bombay', agency: 'Active' },
    { sno: 16, title: 'Tamilnadu National Law University(TNLU), Trichy', agency: 'Inactive' },

    { sno: 18, title: 'Indian Institute of Delhi(IIT Delhi)', agency: 'Inactive' },
    { sno: 19, title: 'University of Kyota, Japan', agency: 'Inactive' },
    {
      sno: 20,
      title:
        'Southern Regional Load Despatch Centre (SRLDC) of Power System Operation  Corporation Limited (POSOCO)',
      agency: 'Inactive',
    },
    { sno: 21, title: 'St.Joseph,s College Autonomous, Tiruchirappalli', agency: 'Inactive' },
    { sno: 22, title: 'Vinaya Missions Research Foundation, Salem', agency: 'Inactive' },
    { sno: 23, title: 'Armoured Vehicles Nigam Limited, Chennai', agency: 'Inactive' },

    {
      sno: 24,
      title: 'Setting up workstation for Research on sample Micro Data from Census',
      agency: 'Inactive',
    },
    { sno: 25, title: 'Datanetiix Solutions India Pvt Ltd, Chennai-600 017', agency: 'Inactive' },
  ];
  const tableRows = data.map((project) => (
    <tr key={project.sno}>
      <td>{project.sno}</td>
      <td className="TitleProjects">{project.title}</td>
      <td>{project.agency}</td>
      <td>{project.fund}</td>
    </tr>
  ));
  return (
    <>
      <Header />
      <div className="Projects">
        <div className="ProjectsHeading">On-going Projects</div>
        <div className="ProjectsTable">
          <table className="ProjectTable">
            <thead className="ProjectTableHead">
              <tr className="ProjectTableRow">
                <th>S.No</th>
                <th>Title of the projects</th>
                <th>Funding Agency</th>
                <th>Sanctioned Fund</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MOUProjects;
