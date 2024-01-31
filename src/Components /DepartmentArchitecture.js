import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentArchitecture = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Architecture</div>
      </div>
      <div className="DepartmentPictures">
        <img className="DepartmentPicturesMain" src="../Architecture.jpeg" alt="" />
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The research activities of faculty members in the Department of Architecture embrace a
          wide range of concerns related to the field of architecture and related disciplines.
          Department of Architecture is one of the most facilitated research environments among the
          other institutes in our region. It owes its prominent position to both the high quality of
          the teaching and the outstanding results of the research.The department sets the target of
          its research on broadly characterized issues pertaining to both built and urban
          environment. It makes excellent contributions from the perspective of architecture and
          planning in a sustainable way, particularly on the topic of energy efficiency, indoor &
          outdoor thermal comfort, and climate change.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Architecture-1.png" alt="" />
        <img className="COEPictureMain" src="../Architecture-2.png" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>
              {' '}
              Optimization of building envelopes for natural ventilation and effective thermal
              performance.
            </li>
            <li>
              {' '}
              Passive design techniques to achieve thermal comfort in various building typologies.
            </li>
            <li>Estimation of cooling loads on buildings using building geometry data.</li>
            <li>
              Analyzing the fan-induced air on thermal comfort conditions in various building
              typologies.
            </li>
            <li>Microclimate study in urban canyons. </li>
            <li>Studies on Urban heat Island.</li>
            <li>Studies on the effect of Urban Morphology on Urban Microclimate.</li>
            <li>User perception study on pedestrian comfort.</li>
            <li>Conservation studies on built heritage.</li>
            <li>Urbanization effects on built heritage in historic temple towns.</li>
            <li>Evaluating the potential values and significance in built heritage.</li>
            <li>
              Study on perceptional and physio chemical variation in the river and urban settings.
            </li>
            <li>Place identity and cultural experience studies in historic urban centres.</li>
            <li> Cognitive and psychodynamics studies in architecture pedagogy.</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentArchitecture;
