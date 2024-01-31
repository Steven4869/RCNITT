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
          The Ministry of Education and the Ministry of Skill Development & Entrepreneurship have
          recognized NIT Tiruchirappalli as a Skill Training Hub for offering vocational training
          for unemployed youths and school dropouts. The Skill Training Hub is being setup at NIT
          Tiruchirappalli as a part of Pradhan Mantri Kaushal Vikas Yojana (PMKVY) 4.0 scheme
          implemented under National Skill Development Corporation(NSDC).
        </div>
        <div className="ContentStarter">
          Shri. Bhaskar Bhat, Chairman, Board of Governors, NIT Tiruchirappalli, inauguratedthe NIT
          Tiruchirappalli Skill Hub web portal on 22/05/2023 at 11.00 AM in the presence of Dr. G.
          Aghila, Director, NIT Tiruchirappalli. This marks an important milestone in NIT
          Tiruchirappalli's commitment to skill development and empowering individuals for a
          brighter future.
        </div>
        <div className="ContentStarter">
          The Skill Hub at NIT Tiruchirappalli has been envisioned to train more than 2500
          beneficiaries in the age group of 15 – 45 at free of cost. Each training will be conducted
          for a period of 250 – 300 hours in different sunrise sectors such as 3Dprinting, Solar PV
          design, IoT, Data Analytics, Robotics, Office Executives and manymore. Trained
          participants will be awarded certificates authorized by NIT Tiruchirappalli and NSDC.
          During the inauguration of skill hub centre web portal, theDirector, Dr. G. Aghila, said
          that “The Skill Hub Centre at NIT Tiruchirappalli perfectly aligns with the implementation
          of National Education Policy (NEP) 2020 which will be of benefit to the students, alumni
          and the public. NIT Tiruchirappalli will take this forward as a long-term activity in
          catering the employment needs ofgraduates & unemployed youths”.
        </div>
        <div className="ContentStarter">
          Speaking on the occasion Dr. V. Sankaranarayanan, Dean (R & C) said that depending on the
          demand of the targeted beneficiaries, customized courses will belaunched to skill the
          trainees suitable to a market-driven job profile. This centre will play a crucial role in
          the creation of a skilled workforce in the delta region of Tamil Nadu, including Trichy,
          Tanjore, Karur, Perambalur, Pudukkottai districts,creating more job opportunities and
          economic growth.
        </div>
        <div className="ContentStarter">
          The NIT Tiruchirappalli Skill Hub Centre is not just about skill development; it's
          alsoabout transforming lives and creating a brighter future. The courses are carefully
          designed to provide hands-on training, industry exposure, and practical knowledgethat
          directly align with the current industry requirements as per National Skills Qualification
          Framework (NSQF)
        </div>

        <div className="ContentStarter">
          Interested candidates can visit the official website at{' '}
          <a href="https://skillhub.nitt.edu/">https://skillhub.nitt.edu/</a> and apply for the
          courses.
        </div>
      </div>
      <div className="SkillHubMain">
        <img className="SKillHub
        " src="../SkillHubPoster-1.jpeg" alt="" />
        <img className="SKillHub
        " src="../SkillHubPoster-2.jpeg" alt="" />
        <img className="SKillHub
        " src="../SkillHubPoster-3.jpeg" alt="" />
      </div>
      <Footer />
    </>
  );
};

export default SkillHub;
