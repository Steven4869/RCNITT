import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentManagement = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Management Studies</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Department of Management Studies, NIT Tiruchirappalli is a reputed 45 year-obusiness
          school since 1978. It has been ranked 35th position in the NIRF ranking. DoMS is nurturing
          managerial excellence for the past 45 years. It aims at developing managers and
          entrepreneurs of essence and excellence through a comprehensive curriculum and
          pedagogy.The department has produced the best-in-class Corporate Leaders, Managers, and
          Entrepreneurs since its inception. DoMS uses IIM CAT entrance exam score for MBA
          admission. DoMS offers full time and part time Ph.D programme in Business Administration.
          DoMS is having excellent infrastructure and committed faculty team in all major functional
          areas
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Management-1.jpg" alt="" />
        <img className="COEPictureMain" src="../Management-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Human Resource Management</li>
            <li>Organizational Behavior</li>
            <li>Data Science</li>
            <li>Entrepreneurship Development</li>
            <li>Marketing, Branding</li>
            <li>Consumer Insights</li>
            <li>New Product Development</li>
            <li>Digital Business</li>
            <li>Information Systems and Technology</li>
            <li>Financial Management</li>
            <li>Investment Banking</li>
            <li>Personal Finance</li>
            <li>Cost and Management Accounting</li>
            <li>Production and Operation Management</li>
            <li>Logistics and Supply Chain Management</li>
            <li>Machine Learning Techniques</li>
            <li>Personality Development</li>
            <li>Managerial and Leadership Excellence</li>
            <li>IT Consulting</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentManagement;
