import React from 'react';
import Header from './Header';
import Footer from './Footer';

const CEDI = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Center for Entrepreneurship Development and Incubation</div>
      </div>

      <div className="Content">
        <div className="ContentStarter">
          Center for Entrepreneurship Development and Incubation (CEDI) is an independent company
          promoted by the National Institute of Technology, Trichy. CEDI was established in 2012 and
          is currently registered under Section 8 of the Companies Act. CEDI has created a
          comprehensive Entrepreneurial ecosystem at NIT, Trichy. CEDI enables young entrepreneurs
          to initiate technology start-up companies for commercial exploration of technologies
          developed by them in the areas of ICT and Electronics. CEDI is implementing a project
          Technological Incubation and Development of Entrepreneurs (TIDE) funded by the Department
          of Electronics and Information Technology, Ministry of Communications & Information
          Technology, Govt. of India to promote start-up companies in the areas of ICT and
          Electronics. CEDI cultivates a rare breed of entrepreneurs by incubating, accelerating,
          mentoring, and funding innovative start-ups. CEDI facilitates the Incubatee companies to
          access NITT’s common Infrastructure facilities, departmental laboratories, and other
          resources of NITT for their product development purposes. Incubate companies have access
          to the brainpower of NITT’s high-caliber students through internships.
        </div>
        <div className="ContentStarter">
          CEDI is dedicated to helping the student community and graduate start-ups and, helps
          entrepreneurs turn ideas into viable businesses. CEDI is located in the Central Library
          building, NIT Campus which provides access to office space, business advice, and other
          support services to new and budding start-ups, nurturing their development until they are
          ready to graduate onto an independent enterprise.
        </div>
      </div>
      <div className="Infrastructure">
        <div className="CenterHeading">
          The Centre provides services designed to help you grow, including:
        </div>
        <div className="InfrastructurePointsBullet">
          <ul>
            <li>
              {' '}
              <strong>R & D and Incubation Facilities:</strong> For eligible applicants, we provide
              access to office equipment, including PCs, laptop access points, phones, and standard
              office furniture.
            </li>
            <li>
              {' '}
              <strong>Mentor Network: </strong> Our quarterly reviews monitor your progress and
              ensure you have the right support you need.
            </li>
            <li>
              {' '}
              <strong>Networking:</strong> Informative sessions designed to connect our community of
              entrepreneurs. The sessions provide excellent opportunities to promote your business
              and gain information about start-up resources.
            </li>
            <li>
              {' '}
              <strong>Access to NITT Intelligence:</strong> Establish relationships and gather
              inspiration from other businesses, students, alumni, and expert technical faculties
              from NITT.
            </li>
          </ul>
        </div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          CEDI provides seed funds up to 25.00 Lakhs for technology-oriented innovative business
          ideas. All the necessary mentoring and support for mobilizing funds, creating access to
          markets, augmenting managerial skills, etc. are provided by CEDI. CEDI NIT Trichy and
          Sonata Software have announced a partnership to promote student innovation and
          entrepreneurship. In addition to technical and managerial support, Sonata has committed
          significant funding to CEDI NIT Trichy to support technology business incubation.
        </div>
        <div className="ContentStarter">
          CEDI has already incubated 10 innovative businesses in diverse areas in the last three
          years. Opportunities are provided for seed fund support, incubation of innovative
          businesses in the IT/Electronics domain, and majorly focused in the areas of SMAC and IoT.
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CEDI;
