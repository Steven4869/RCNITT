import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';
import Header from './Header';

const SPARC = () => {
  
  const projectsData = [
    {
      sno: 1,
      title:
        'Digital Health Records Storage and Analysis for Healthcare Provisioning of Global Patients  an India  Australia Initiative',
      IndianProfessor: 'Dr. Rajeswari Sridhar',
      IndianInstitute: 'National Institute of Technology Tiruchirappalli',
      ForeignProfessor: 'Dr. Michael Sheng',
      ForeignInstitute: 'MACQUARIE UNIVERSITY',
    },
    {
      sno: 2,
      title:
        'Environmental and Energy Impacts of Higher Alcohol and Biofuel Synthesis by Thermochemical Process',
      IndianProfessor: 'Dr. Anand Ramanathan',
      IndianInstitute: 'National Institute of Technology Tiruchirappalli',
      ForeignProfessor: 'Prof. Amaro Olimpio Pereira',
      ForeignInstitute: 'UNIVERSIDADE FEDERAL DO RIO DE JANEIRO',
    },
    {
      sno: 3,
      title: 'Metamaterial-Based Low Profile LTCC Balanced Antipodal Vivaldi Antenna for 5G eMBB',
      IndianProfessor: 'Dr. Pandeeswari R',
      IndianInstitute: 'National Institute of Technology Tiruchirappalli',
      ForeignProfessor: 'Dr. Dinh Anh',
      ForeignInstitute: 'UNIVERSITY OF SASKATCHEWAN',
    },
    {
      sno: 4,
      title: 'Photo induced Electron Transfer and Facile Charge Separation for Energy Applications',
      IndianProfessor: 'Dr. Somenath Garai',
      IndianInstitute: 'National Institute of Technology Tiruchirappalli',
      ForeignProfessor: 'Prof. Paul Koegerler',
      ForeignInstitute: 'RHEINISCH-WESTFÄLISCHE TECHNISCHE HOCHSCHULE AACHEN',
    },

    {
      sno: 5,
      title:
        'Potential Peer to Peer Transactive Energy Market in Indian Power Distribution Systems',
      IndianProfessor: 'Dr. Vivek Mohan',
      IndianInstitute: 'National Institute of Technology Tiruchirappalli',
      ForeignProfessor: 'Dr. Siqi BuS',
      ForeignInstitute: 'THE HONG KONG POLYTECHNIC UNIVERSITY',
    },
    {
      sno: 6,
      title: 'Additive manufacturing of next generation alloys',
      IndianProfessor: 'Dr. Sivaprasad Katakam',
      IndianInstitute: 'National Institute of Technology Tiruchirappalli',
      ForeignProfessor: 'Dr. Filippo Berto',
      ForeignInstitute: 'NORWEGIAN UNIVERSITY OF SCIENCE AND TECHNOLOGY',
    },
    {
      sno: 7,
      title: 'Self-Energised UAV-assisted Communications for 5G Wireless Networks',
      IndianProfessor: 'Dr.MUTHU CHIDAMBARANATHAN P',
      IndianInstitute: 'National Institute of Technology Tiruchirappalli',
      ForeignProfessor: 'Prof. Dushantha Nalin Kumara Jayakody',
      ForeignInstitute: 'TOMSK POLYTECHNIC UNIVERSITY',
    },
    {
      sno: 8,
      title: 'Novel human machine Interaction Technology for the Tetraplegics (NITT)',
      IndianProfessor: 'Dr. Karthick P.A',
      IndianInstitute: 'National Institute of Technology Tiruchirappalli',
      ForeignProfessor: 'Dr.Kianoush Nazarpour',
      ForeignInstitute: 'NEWCASTLE UNIVERSITY',
    },
  ];
  const tableRows = projectsData.map((project) => (
    <tr key={project.sno}>
      <td>{project.sno}</td>
      <td className="GianCourse">{project.title}</td>
      <td className="GianCourse">{project.IndianProfessor}</td>
      <td className="GianCourse">{project.IndianInstitute}</td>
      <td className="GianCourse">{project.ForeignProfessor}</td>
      <td className="GianCourse">{project.ForeignInstitute}</td>
    </tr>
  ));
  const indiaCoordinates = [78.9629, 20.5937];

  const lineData = [
    { coordinates: [133.7751, -25.2744], name: 'Australia' },
    { coordinates: [-51.9253, -14.235], name: 'Brazil' },
    { coordinates: [-106.3468, 56.1304], name: 'Canada' },
    { coordinates: [10.4515, 51.1657], name: 'Germany' },
    { coordinates: [114.1095, 22.3964], name: 'Hong Kong' },
    { coordinates: [8.4689, 60.472], name: 'Norway' },
    { coordinates: [105.3188, 61.524], name: 'Russia' },
    { coordinates: [-3.436, 55.3781], name: 'United Kingdom' },
    { coordinates: [-95.7129, 37.0902], name: 'USA' },
  ];
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">
          The Scheme for Promotion of Academic and Research Collaboration (SPARC)
        </div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Scheme for Promotion of Academic and Research Collaboration (SPARC) endeavors to
          enhance India’s Higher Educational Institutions' research landscape by fostering
          partnerships between Indian institutions and leading global institutions from 28 selected
          countries. Its goal is to collaboratively address issues of national and international
          significance.
        </div>
        <div className="ContentStarter">
          This initiative aims to facilitate impactful academic cooperation by supporting key
          elements pivotal for groundbreaking research:
          <ol>
            <li>
              Facilitating visits and extended stays of eminent international faculty and
              researchers in Indian institutions for teaching and research endeavors.
            </li>
            <li>
              Providing opportunities for Indian students to visit and gain experience in premier
              laboratories worldwide.
            </li>
            <li>
              Collaboratively developing specialized courses, exemplary publications like books and
              monographs, patents with real-world applicability, demonstrable technologies, and
              action research outcomes.
            </li>
            <li>
              Strengthening bilateral cooperation through academic and research collaborations via
              Indo-X Workshops held in India.
            </li>
            <li>
              Enhancing publication, dissemination, and visibility through an annual international
              conference of high repute held in India.
            </li>
          </ol>
        </div>
        <div className="ContentStarter">
          The anticipated outcomes encompass tangible achievements such as a substantial volume of
          high-quality research publications, solutions to critical national and global challenges,
          creation of specialized courses, production of top-notch textbooks and research documents,
          adoption of best practices from eminent international scholars, fostering robust bilateral
          cooperation, and enhancing the global standing and ranking of Indian educational
          institutions.
        </div>
      </div>
      <div className="Achievements">
        <div className="AchievementsHeading">Total amount of SPARC project received </div>
        <div className="AchievementsLabels">
          <div className="AchievementsLabel">
            <div className="AchievementsText">Phase I </div>
            <div className="AchievementsNumber">2.79 Cr</div>
            <div className="AchievementsContent">11 Projects</div>
          </div>
          <div className="AchievementsLabel">
            <div className="AchievementsText">Phase II</div>
            <div className="AchievementsNumber">1.5 Cr</div>
            <div className="AchievementsContent">6 Projects</div>
          </div>
        </div>
      </div>

      <div className="Projects">
        <div className="ProjectsHeading">SPARC connecting with world</div>
      </div>
      <div className="map" style={{ height: '750px' }}>
        <ComposableMap
          projectionConfig={{
            scale: 180,
            rotation: [-11, 0, 0],
          }}
          style={{ backgroundColor: 'black', height: '100%', width:'100%' }}
          >
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: '#D6D6DA',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#F53',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#E42',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>

          {lineData.map((marker, index) => (
            <Line
              key={index}
              coordinates={[indiaCoordinates, marker.coordinates]}
              stroke="white" // Line color
              strokeWidth={1} // Line width
            />
          ))}

          {lineData.map((marker, index) => (
            <Marker
              key={index}
              coordinates={marker.coordinates}
              onMouseEnter={() => console.log(`Hovered on ${marker.name}`)}
            >
              <circle r={5} fill="#F00" />
            </Marker>
          ))}

          {/* India marker */}
          <Marker
            coordinates={indiaCoordinates}
            onMouseEnter={() => console.log('Hovered on India')}
          >
            <circle r={5} fill="#F00" />
          </Marker>
        </ComposableMap>
      </div>
      <Footer />
    </>
  );
};

export default SPARC;
