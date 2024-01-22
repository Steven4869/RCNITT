import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  const navClass = isSticky ? 'navigation sticky' : 'nav';

  return (
    <>
      <div className={navClass}>
        <Link to={'/'}>
          <div className="navbars">Home</div>
        </Link>
        <div className="navbars dropdown">
          <Link to={'/ResearchActivities'}>Research Activities</Link>

          <div className="dropdown-content">
            <Link to="">Research Expertise</Link>
            <Link to="/FundingAgencies">Funding Agencies</Link>
            <Link to="/MoU">MoU's</Link>
            <Link to="/SPARC">SPARC</Link>
            <Link to="/GIAN">GIAN</Link>
          </div>
        </div>

        <Link to={'/Consultancy'}>
          <div className="navbars">Consultancy</div>
        </Link>
        <div className="navbars dropdown">
          <Link to={'/CenterOfExcellence'}>Centres</Link>

          <div className="dropdown-content">
            <Link to="/CenterOfExcellence">COEs</Link>
            <Link to="">SIF</Link>
            <Link to="">NSM</Link>
            <Link to="">IPR</Link>
            <Link to="">CEDI</Link>
            <Link to="">NRDC</Link>
          </div>
        </div>

        <div className="navbars dropdown">
          Outreach
          <div className="dropdown-content">
            <Link to="/MSME">MSME</Link>
            <Link to="/SkillHub">Skill Hub</Link>
            <Link to="/IIC">IIC</Link>
          </div>
        </div>
        <Link to={'/Contact'}>
          <div className="navbars">Contact Us</div>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
