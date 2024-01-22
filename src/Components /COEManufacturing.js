import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COEManufacturing = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">CENTRE FOR EXCELLENCE IN MANUFACTURING</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Centre of Excellence in Manufacturing was established in 2018 at National Institute of
          Technology, Tiruchirappalli. There are 12 sophisticated Laboratories which provides
          opportunity for promising innovations. This multi-faceted unique centre offers skill
          development courses, Internships, Research and Development assistance and Industrial
          consultancy services across various sectors.
        </div>
        <div className="ContentStarter">
          In last academic year alone, CoE in Manufacturing have provided various skill development
          courses to 20+ Engineering and Polytechnic colleges. Around 450+ students have been
          successfully trained through various courses, both online and offline modes. CoE in
          Manufacturing has also received many positive feedbacks from various institutes. regarding
          the courses conducted, including how these trainings helped students to bag placements and
          higher study opportunities.
        </div>
      </div>
      <div className="COEPictures">
        {/* <img className='COEPictureMain' src="../Siemens_1.jpg" alt="" /> */}
        <img className="COEPictureMain" src="../Siemens_2.jpg" alt="" />
        <img className="COEPictureMain" src="../Siemens_3.jpg" alt="" />
        {/* <img className='COEPictureMain' src="../siemens_4.jpg" alt="" /> */}
        {/* <img className='COEPictureMain' src="../siemens_5.jpg" alt="" /> */}
        <img className="COEPictureMain" src="../siemens_6.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Product Design and Validation Lab</li>
            <li>Advanced Manufacturing Lab</li>
            <li>Test and Optimisation Lab</li>
            <li>CNC Controller Lab</li>
            <li>Internet of Things (IoT) Lab</li>
            <li>Automation Lab</li>
            <li>Mechatronics Lab</li>
            <li>Process Instrumentation Lab</li>
            <li>Electrical & Energy Savings Lab CNC Machines Lab</li>
            <li>Robotics Lab</li>
            <li>Rapid Prototyping Lab</li>
          </ul>
        </div>
      </div>
      <div className="COEButtons">
        <div className="COEButtonBack">
          <a href="/CenterOfExcellence">BACK TO LIST</a>
        </div>

        <div className="COEButtonNext">
          <a href="/coeAutomation">VIEW NEXT COE</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COEManufacturing;
