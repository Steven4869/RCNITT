import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import './HomePage.css';
import Footer from './Footer';
import CardCarousel from './CardCarousel';
import { Link } from 'react-scroll';
import Header from './Header';

const HomePage = () => {
  const projectsData = [
    {
      sno: 1,
      title: 'To Strengthen the post graduate Teaching and Research facilities in the Department',
      agency: 'DST-FIST',
      fund: '₹93,00,000',
    },
    {
      sno: 2,
      title: 'Conversion of Waste Energy into useful Electricity for Wireless Sensor Nodes',
      agency: 'DST-INSPIRE',
      fund: '₹35,00,000',
    },
    {
      sno: 3,
      title: 'Margdardshan Scheme as Mentor Institution',
      agency: 'AICTE',
      fund: '₹30,00,000',
    },
    {
      sno: 4,
      title:
        'Development of oxide dispersion strengthened tungsten heavy alloys: study their structure-property relation',
      agency: 'DRDO',
      fund: '₹87,17,744',
    },
    {
      sno: 5,
      title:
        'Wireless sensor node for online data transfer of parameters from electrical machines and drives',
      agency: 'MEITY',
      fund: '₹55,44,000',
    },
  ];

  const [displayedRows, setDisplayedRows] = useState(5);

  const increaseRows = () => {
    setDisplayedRows(displayedRows + 5);
  };

  const decreaseRows = () => {
    setDisplayedRows(Math.max(displayedRows - 5, 0));
  };

  useEffect(() => {
    const rows = projectsData.slice(0, displayedRows).map((project) => (
      <tr key={project.sno}>
        <td>{project.sno}</td>
        <td className="TitleProjects">{project.title}</td>
        <td>{project.agency}</td>
        <td>{project.fund}</td>
      </tr>
    ));

    setTableRows(rows);
  }, [displayedRows]);

  const [tableRows, setTableRows] = useState([]);
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
  return (
    <>
      <Header />
      <CardCarousel />
      <div id="ResearchAndConsultancy" className="ResearchConsultancy">
        <div className="deanMessage">
          <div className="deanContent">
            <div className="deanHeading">DEAN'S MESSAGE</div>
            <div className="deanText">
              <div className="deanMessageText">
                Welcome to the vibrant domain of innovation and excellence at NIT Tiruchirappalli!
                <br />
                As the Dean of Research & Consultancy, it brings me immense pride to introduce you
                to the thriving ecosystem of innovation that defines our institution. At NIT Trichy,
                we believe in pushing the boundaries of knowledge and harnessing the power of
                research to create impactful solutions that address global challenges.
              </div>
              <div className="deanMessageText">
                Our commitment to excellence in research spans across diverse disciplines, driving
                breakthroughs that shape the future. From pioneering advancements in technology to
                transformative studies in science and humanities, our researchers, scholars, and
                faculty members are at the forefront of driving innovation.
              </div>
              <div className="deanMessageText">
                We invite stakeholders, collaborators, and visionaries to join hands with us and
                become part of this dynamic ecosystem. Your contributions, partnerships, and
                involvement will not only amplify our ongoing efforts but also pave the way for
                groundbreaking discoveries and practical solutions.
              </div>
              <div className="deanMessageText">
                NIT Tiruchirappalli is not just an institution; it's a hub of inspiration,
                collaboration, and discovery. Together, let's embark on a journey of innovation,
                where your ideas and expertise converge with ours to create a profound impact on
                society. Join us in shaping a future where innovation knows no bounds. Be a part of
                NIT Trichy's journey towards excellence in research and consultancy.
              </div>
            </div>
          </div>
          <div className="deanPicture">
            <div className="deanBox">
              <div className="deanBoxPic">
                <img src="./dean.jpg" alt="" className="pictureSize" />
              </div>
            </div>
            <div className="deanInfo">
              <div className="info1">DR. V. SANKARANARAYANAN </div>
              <div className="info1">Dean (Research and Consultancy)</div>
              <div className="info2">Telephone: +91-431-2503031</div>
              <div className="info2">E-mail : deanrc@nitt.edu and vsankar@nitt.edu</div>
            </div>
          </div>
        </div>
      </div>
      <div className="RegistrarOffice">
        <div className="AssociateDeansHeading">
          <div>Deputy Registrar (R&C)</div>
        </div>
        <div className="RegistrarOfficeLabels">
          <div className="RegistrarOfficeLabel">
            <img src="./dean1.jpg" alt="" className="RegistrarOfficePictureLabel" />
            <div className="description">
              <div className="descriptionHeading">Dr. R. Anand, Mechanical</div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="AssociateDeans">
        <div className="AssociateDeansHeading">
          <div>Associate Deans at the office of R&C</div>
        </div>
        <div className="AssociateDeanLabels">
          <div className="AssociateDeanLabel">
            <div className="AssociateDeanLabelHeading">Associate Dean </div>
            <div className="AssociateDeanLabelHeader">(Research Services)</div>
            <img src="./dean3.jpg" alt="" className="pictureLabel" />
            <div className="description">
              <div className="descriptionHeading">Dr. S. Saravanan, Civil </div>
              <div className="description-container">
                <p>Faculty research services</p>
                <p>(Responsible for administration of research funding,</p>
                <p>consultancy and contract research management)</p>
                <p>MoU with Institutions in India and abroad</p>
                <p>Undergraduate research schemes and opportunities</p>
                <p>Research Magazine</p>
              </div>
            </div>
          </div>
          <div className="AssociateDeanLabel">
            <div className="AssociateDeanLabelHeading">Associate Dean </div>
            <div className="AssociateDeanLabelHeader">(Research & Consultancy)</div>
            <img src="./dean2.jpg" alt="" className="pictureLabel" />
            <div className="description">
              <div className="descriptionHeading">Dr. N. Samsudeen, Chemical</div>
              <div className="description-container">
                <p>Industry collaboration, interaction and business ventures</p>
                <p>MoU with R&D organizations and Industries</p>
                <p>Institute wide Research Centers and Facilities</p>
                <p>PhD and Postgraduate research schemes and opportunities</p>
                <p>Corporate Social Responsibility (CSR) projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Achievements">
        <div className="AchievementsHeading">Our Achievements</div>
        <div className="AchievementsLabels">
          <div className="AchievementsLabel">
            <div className="AchievementsText">Patents</div>
            <div className="AchievementsNumber">165</div>
            <div className="AchievementsContent">Published & Granted</div>
          </div>
          <div className="AchievementsLabel">
            <div className="AchievementsText">Publications</div>
            <div className="AchievementsNumber">7388</div>
            <div className="AchievementsContent">Web of Science cited</div>
          </div>
          <div className="AchievementsLabel">
            <div className="AchievementsText">Live Projects</div>
            <div className="AchievementsNumber">135</div>
            <div className="AchievementsContent">Currently Live</div>{' '}
          </div>
          <div className="AchievementsLabel">
            <div className="AchievementsText">Sponsored Projects</div>
            <div className="AchievementsNumber">735</div>
            <div className="AchievementsContent">Completed</div>{' '}
          </div>
          <div className="AchievementsLabel">
            <div className="AchievementsText">Consultancy Projects</div>
            <div className="AchievementsNumber">1000</div>
            <div className="AchievementsContent">Completed</div>{' '}
          </div>
          <div className="AchievementsLabel">
            <div className="AchievementsText">Funds Sanctioned</div>
            <div className="AchievementsNumber">35 Cr</div>
            <div className="AchievementsContent">Annual Average</div>{' '}
          </div>
        </div>
      </div>
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
      <div className="view-more-button">
        <button className="view-more">
          <a href="/Projects">VIEW MORE</a>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
