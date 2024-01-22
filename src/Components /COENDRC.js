import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COENDRC = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">The National Research Development Corporation</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Innovation Facilitation Centres (IFCs) at NIT Trichy has been established to promote
          innovation and entrepreneurship at the Institute. NRDC Innovation Facilitation Centre at
          NIT Trichy acts as a hub for fostering a culture of innovation, providing resources and
          support for researchers and students, and facilitating the transfer of technology from the
          academic setting to the commercial sector.
        </div>
      </div>
      <div className="Infrastructure">
        <div className="CenterHeading">Some of the key functions of the centre includes:</div>
        <div className="InfrastructurePointsBullet">
          <ul>
            <li>
              <strong>Technology Transfer:</strong> Facilitating the transfer of technologies
              developed at NIT Trichy to industries for commercialization.
            </li>
            <li>
              <strong>Entrepreneurship Support:</strong> Supporting students and researchers in
              launching their own startups by providing guidance, mentoring, and resources.
            </li>
            <li>
              <strong>Industry Collaboration:</strong> Facilitating collaborations between the
              academic community and industries to promote research and development activities.
            </li>
            <li>
              <strong>Incubation Services:</strong> Providing infrastructure and services to
              incubate and nurture early-stage startups based on innovative technologies.
            </li>
            <li>
              <strong>Training and Workshops:</strong> Organizing training programs, workshops, and
              events to enhance the skills of innovators and entrepreneurs.
            </li>
            <li>
              <strong>Intellectual Property Management:</strong> Assisting in the management of
              intellectual property rights, including patents and copyrights, to protect
              innovations.
            </li>
            <li>
              <strong>Funding Assistance:</strong> Connecting innovators with funding opportunities
              and assisting in the preparation of proposals for grants and investments.
            </li>
            <li>
              <strong>Networking:</strong> Building a network of industry experts, investors, and
              mentors to support the growth of innovative projects and startups.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default COENDRC;
