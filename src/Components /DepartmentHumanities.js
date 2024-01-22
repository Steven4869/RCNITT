import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentHumanities = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Humanities & Social Sciences</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Humanities and Social Sciences (formerly, the Department of Humanities)
          has been in existence since 2004. This top-ranked Department among the NITs is known for
          independent interdisciplinary research and for a dynamic collaboration between faculty and
          students. To meet the existing demands of industry, business, public and private
          organizations, academic and human services, the Department has constantly striven for a
          practical curriculum with a high degree of professional relevance, enabling students to
          face real time challenges. Accordingly, the Department has been offering a wide range of
          core and elective courses to undergraduates and graduates. The Department has been
          offering a full-fledged Ph.D. program since 2004 and has produced quality research work in
          newer areas of Humanities and Social Sciences. Recognizing the growing demand for
          humanities-based courses, the Department also offers Minor Degree Courses in Economics and
          in Language/Literature. The department has been offering MA English (Language and
          Literature) programme from the academic year 2020-21.
        </div>
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

export default DepartmentHumanities;
