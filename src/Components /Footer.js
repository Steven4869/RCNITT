import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Links">
          <div className="LinksHeading">Useful Links</div>
          <div className="LinksLabels">
            <div className="LinksLabel">
              <Link to={'/MoU'}>MoUs</Link>
            </div>

            <div className="LinksLabel">
              <Link to={'/CenterOfExcellence'}>Centers</Link>
            </div>

            <div className="LinksLabel">
              <Link to={'/ResearchActivities'}>Research Activites</Link>
            </div>

            <div className="LinksLabel">
              <Link to={'/Consultancy'}>Consultancy</Link>
            </div>
          </div>
        </div>
        <div className="Header">
          <div className="HeaderHeading">Research @ NIT Trichy</div>
          <div className="HeaderLabels">
            <div className="HeaderLabel">
              <Link to={'/SPARC'}>SPARC</Link>
            </div>

            <div className="HeaderLabel">
              <Link to={'/GIAN'}>GIAN</Link>
            </div>

            <div className="HeaderLabel">
              <Link to={'/FundingAgencies'}>Funding Agencies</Link>
            </div>

            <div className="HeaderLabel">
              <Link to={'/Outreach'}>Outreach</Link>
            </div>
          </div>
        </div>
        <div className="Logo">
          <img src="../logo.png" alt="Logo" className="LogoSize" />
        </div>
        <div className="Connect">
          <div className="ConnectHeading">Contact</div>
          <div className="sendEmail"></div>

          <div className="ConnectLabels">
            <div className="ConnectLabel">Ph. No: +91-431-2503031</div>
            <div className="ConnectLabel">
              Email ID: <a href="mailto:deanrc@nitt.edu">deanrc@nitt.edu</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
