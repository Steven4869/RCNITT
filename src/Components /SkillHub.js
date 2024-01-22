import React from 'react';
import Header from './Header';
import Footer from './Footer';

const SkillHub = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">SKill Hub</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          MSDE Sponsored Skill Hub Centre at NIT Trichy is a dynamic initiative aimed at empowering
          individuals with the necessary skills and knowledge to thrive in today's competitive
          workforce. Launched under the Ministry of Skill Development and Entrepreneurship, this
          center serves as a focal point for skill development, vocational training, and fostering
          entrepreneurship. The primary mission of the MSDE Sponsored Skill Hub Centre is to bridge
          the gap between education and industry requirements. By offering a diverse range of skill
          development programs, the center strives to enhance employability, encourage
          entrepreneurship, and contribute to the overall economic development of the region.
        </div>
        <div className="ContentStarter">
          For more details visit: <a href="https://skillhub.nitt.edu/">https://skillhub.nitt.edu/</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SkillHub;
