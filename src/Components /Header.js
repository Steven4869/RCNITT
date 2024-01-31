import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const departmentRoutes = [
    '/DepartmentArchitecture',
    '/DepartmentChemical',
    '/DepartmentCA',
    '/DepartmentCivil',
    '/DepartmentChemistry',
    '/DepartmentCSE',
    '/DepartmentECE',
    '/DepartmentEEE',
    '/DepartmentEnergy',
    '/DepartmentHumanities',
    '/DepartmentICE',
    '/DepartmentMME',
    '/DepartmentManagement',
    '/DepartmentMath',
    '/DepartmentMech',
    '/DepartmentPhysics',
    '/DepartmentProd',
  ];
  const [researchDropdownOpen, setResearchDropdownOpen] = useState(false);
  const [centersDropdownOpen, setCentersDropdownOpen] = useState(false);
  const [outreachDropdownOpen, setOutreachDropdownOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [isNavVisible, setNavVisibility] = useState(false);

  const handleResearchDropdownToggle = () => {
    setResearchDropdownOpen(!researchDropdownOpen);
  };

  const handleCentersDropdownToggle = () => {
    setCentersDropdownOpen(!centersDropdownOpen);
  };

  const handleOutreachDropdownToggle = () => {
    setOutreachDropdownOpen(!outreachDropdownOpen);
  };
  const toggleNavVisibility = () => {
    setNavVisibility(!isNavVisible);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    setSticky(offset > 240);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`HeaderMainContainer ${isSticky ? 'StickyHeader' : ''}`}>
        <div className="HeaderLeftContainer">
          <div className="HeaderMainLogo">
            <img src="/college_header.png" alt="logo" className="HeaderLogoSize" />

            <div className="HeaderMainContenr">
              <Link to={'/'}>Research at NIT-Trichy</Link>
            </div>
          </div>
        </div>
        <div className="HeaderRightContainer">
          <div className="BurgerIcon" onClick={toggleNavVisibility}>
            <div className="Bar"></div>
            <div className="Bar"></div>
            <div className="Bar"></div>
          </div>
          <div className={`HeaderNavigation ${isNavVisible ? 'show' : ''}`}>
            <div className="HeaderNavbars">
              <Link to={'/'}>Home</Link>
            </div>
            <div
              className="HeaderNavbars"
              onMouseEnter={handleResearchDropdownToggle}
              onMouseLeave={handleResearchDropdownToggle}
            >
              <Link to={'/ResearchActivities'}>Research Activities</Link>
              <div className={`HeaderNavbarDropdown ${researchDropdownOpen ? 'show' : ''}`}>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="">Department Profiles</Link>
                  <div className="SecondLevelDropdown">
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentArchitecture">Architecture</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentChemical">Chemical Engineering</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentChemistry">Chemistry</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentCivil">Civil Engineering</Link>
                    </div>

                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentCA">Computer Applications</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentCSE">Computer Science & Engineering</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentEEE">Electrical & Electronics Engineering</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentECE">Electronics & Communications Engineering</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentEnergy">Energy & Environment</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentICE">Instrumnetation & Control Engineering</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentManagement">Management Studies</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentMME">Metallurgical & Materials Engineering</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentMech">Mechanical Engineering</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentPhysics">Physics</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentProd">Production Engineering</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentMath">Mathematics</Link>
                    </div>
                    <div className="SecondLevelDropdownContent">
                      {' '}
                      <Link to="/DepartmentHumanities">Humanities & Social Sciences</Link>
                    </div>
                  </div>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/FundingAgencies">Funding Agencies</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/MoU">MoU's</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/SPARC">SPARC</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/GIAN">GIAN</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/STIC">ISRO STIC</Link>
                </div>
              </div>
            </div>
            <div className="HeaderNavbars">
              {' '}
              <Link to={'/Consultancy'}>Consultancy</Link>
            </div>
            <div
              className="HeaderNavbars"
              onMouseEnter={handleCentersDropdownToggle}
              onMouseLeave={handleCentersDropdownToggle}
            >
              <Link to={'/CenterOfExcellence'}>Centers</Link>
              <div className={`HeaderNavbarDropdown ${centersDropdownOpen ? 'show' : ''}`}>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/CenterOfExcellence">COE</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/coeSIF">SIF</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/coeComputing">NSM</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/IPR">IPR</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/CEDI">CEDI</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/coeNDRC">NRDC</Link>
                </div>
              </div>
            </div>{' '}
            <div
              className="HeaderNavbars"
              onMouseEnter={handleOutreachDropdownToggle}
              onMouseLeave={handleOutreachDropdownToggle}
            >
              <Link to={'#'}>Outreach</Link>
              <div className={`HeaderNavbarDropdown ${outreachDropdownOpen ? 'show' : ''}`}>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/MSME">MSME</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/IIC">IIC</Link>
                </div>
                <div className="HeaderNavbarDropdownContent">
                  <Link to="/SkillHub">Skill Hub</Link>
                </div>
              </div>
            </div>{' '}
            <div className="HeaderNavbars">
              <Link to={'/Contact'}>Contact</Link>
            </div>{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
