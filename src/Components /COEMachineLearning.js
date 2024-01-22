import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COEMachineLearning = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">
          CENTRE FOR EXCELLENCE IN ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
        </div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The TATA Centre for Artificial Intelligence and Machine Learning will help to build a
          nationally recognized AI ecosystem centered on NIT Tiruchirappalli. This centre will
          function under the Centre of Excellence in AI of the institute. Our mission is to
          establish a prestigious, cutting-edge facility capable of developing innovative AI-enabled
          solutions.
        </div>
        <div className="ContentStarter">
          It will help with the development of AI software and hardware, mentoring and professional
          skill acquisition, and job creation. Furthermore, it will support breakthroughs in AI
          ethics and socially conscious policies. Our goal is to contribute to the development of
          technologies that boost and enhance the human experience.
        </div>
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Infrastructure</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>AI system DGX1 (high end)</li>
            <li>GPU work station for AI</li>
            <li>IoT sensors(Agricultural sensor kit and medical kit with development board)</li>
          </ul>
        </div>
      </div>
      <div className="COEButtons">
        <div className="COEButtonBack">
          <a href="/CenterOfExcellence">BACK TO LIST</a>
        </div>

        <div className="COEButtonNext">
          <a href="/coeCombustion">VIEW NEXT COE</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COEMachineLearning;
