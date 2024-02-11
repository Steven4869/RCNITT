import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';
import { ComposableMap, Geographies, Geography, Marker, Line } from 'react-simple-maps';

const GIAN = () => {
  const indiaCoordinates = [78.9629, 20.5937];

  const lineData = [
    { coordinates: [-3.436, 55.3781], name: 'United Kingdom' },
    { coordinates: [-95.7129, 37.0902], name: 'USA' },
    { coordinates: [-106.3468, 56.1304], name: 'Canada' },
    { coordinates: [5.2913, 52.1326], name: 'Netherlands' },
    { coordinates: [127.7669, 35.9078], name: 'South Korea' },
    { coordinates: [103.8198, 1.3521], name: 'Singapore' },
    { coordinates: [101.9758, 4.2105], name: 'Malaysia' }
];

  const projectsData = [
    {
      sno: 1,
      coordinator: 'Dr. R. ANAND',
      designation: 'Assoc. PROFESSOR',
      department: 'MECHANICAL',
      courseName: '171035L01 Advanced Internal Combustion Engines',
      foreignFacultyName: 'Rui Chen, United Kingdom',
    },
    {
      sno: 2,
      coordinator: 'Dr. SIVA SANKAR',
      designation: 'Asst. PROFESSOR',
      department: 'CHEMICAL',
      courseName:
        '171035B01:Understanding Nanotechnology and Engineering Nanomaterials for Diverse Technological Applications',
      foreignFacultyName: 'Manickam Sivakumar, Malaysia',
    },
    {
      sno: 3,
      coordinator: 'Dr. N. SAMSUDEEN',
      designation: 'Asst. PROFESSOR',
      department: 'CHEMICAL',
      courseName:
        '191035B02 : Advances in Biological and Bioelectrochemical Treatments of Industrial Wastewaters',
      foreignFacultyName: 'Prof Raj Boopathy, United States of America',
    },
    {
      sno: 4,
      coordinator: 'Dr. MUTHUKUMARAN K',
      designation: 'PROFESSOR',
      department: 'CIVIL ',
      courseName: '171035L03 : Seismic Soil – Pile Interaction',
      foreignFacultyName: 'S.P. Gopal Madabhushi, United Kingdom',
    },

    {
      sno: 5,
      coordinator: 'Dr.RAJESWARI SRIDHAR',
      designation: 'Assoc. PROFESSOR',
      department: 'CSE',
      courseName:
        '191035K01 : ARTIFICIAL INTELLIGENCE FOR SOCIAL MEDIA CONTENT EXTRACTION, ANALYSIS AND RECOMMENDATION SYSTEMS',
      foreignFacultyName:
        'Prof Yiu-Kai Dennis Ng, Brigham Young University, United States of America',
    },
    {
      sno: 6,
      coordinator: 'Dr. S. DEIVALAKSHMI',
      designation: 'Assoc. PROFESSOR',
      department: 'ECE',
      courseName: '191035D10 : Deep Learning Processor Architecture',
      foreignFacultyName: 'Dr Seok-Bum Ko, Canada',
    },
    {
      sno: 7,
      coordinator: 'Dr.N.KUMARESAN',
      designation: 'Assoc. PROFESSOR',
      department: 'EEE',
      courseName: '171035D04:Intelligent Electrical Power Grids',
      foreignFacultyName: 'Peter Palensky, Netherlands (Holland, Europe)',
    },
    {
      sno: 8,
      coordinator: 'Dr. PERIYASAMY R',
      designation: 'Asst. PROFESSOR',
      department: 'ICE',
      courseName: '171029G01: Integration of Biomechanics, Control and Neurophysiology',
      foreignFacultyName: 'Michael E. Hahn, United States of America',
    },
  ];
  const tableRows = projectsData.map((project) => (
    <tr key={project.sno}>
      <td>{project.sno}</td>
      <td className="GianCourse">{project.coordinator}</td>
      <td className="GianCourse">{project.designation}</td>
      <td className="GianCourse">{project.department}</td>
      <td className="GianCourse">{project.courseName}</td>
      <td className="GianCourse">{project.foreignFacultyName}</td>
    </tr>
  ));

  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Global Initiative of Academic Networks (GIAN)</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          GIAN aims to accomplish several objectives:
          <ol>
            <li>
              Increase the presence of esteemed international faculty in Indian academic institutes.
            </li>
            <li>
              Offer opportunities for local faculty to enhance their teaching skills in advanced
              fields and exchange knowledge.
            </li>
            <li>
              Enable students to gain insights and expertise from renowned international educators.
            </li>
            <li>
              Foster potential collaborations in research between local and international faculty.
            </li>
            <li>Encourage the influx of international students into academic institutes.</li>
            <li>
              Facilitate interdisciplinary learning among students from various institutes through
              collaborative programs.{' '}
            </li>
            <li>
              Provide a platform for industry professionals to upgrade their understanding and
              expertise in relevant domains.{' '}
            </li>
            <li>Attract top global experts to address India-centric challenges. </li>
            <li>
              Develop high-quality course materials, including video and print resources, for
              widespread use among students and teachers.
            </li>
            <li>
              Document and innovate new pedagogical approaches in emerging national and global
              subjects of interest.
            </li>
          </ol>
        </div>
      </div>
      <div className="Achievements">
        <div className="AchievementsHeading">Total amount sanctioned under GIAN </div>
        <div className="AchievementsLabels">
          <div className="AchievementsLabel">
            <div className="AchievementsText">Completed</div>
            <div className="AchievementsNumber">1.55 Cr</div>
          </div>
          <div className="AchievementsLabel">
            <div className="AchievementsText">Ongoing</div>
            <div className="AchievementsNumber">18.24 L</div>
          </div>
        </div>
      </div>
      <div className="Projects">
        <div className="ProjectsHeading">GIAN connecting with world</div>
      </div>
      <div className="map" style={{ height: '750px' }}>
        <ComposableMap
          projectionConfig={{
            scale: 180,
            rotation: [-11, 0, 0],
          }}
          style={{ backgroundColor: '#F5F5F5', height: '100%', width:'100%',  }}
          >
          <Geographies geography="/features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: 'black',
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
              stroke="red" // Line color
              strokeWidth={2} // Line width
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

export default GIAN;
