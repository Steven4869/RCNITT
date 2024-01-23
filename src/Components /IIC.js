import React from 'react';
import Header from './Header';
import Footer from './Footer';
import IICData from './IICRoles.json';
const IIC = () => {
  const tableRows = IICData.map((project) => (
    <tr key={project.Name}>
      <td>{project.Role}</td>
      <td className="TitleProjects">{project.Name}</td>
      <td>{project.Department}</td>
      <td>{project.Designation}</td>
    </tr>
  ));
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Institute Innovation Council</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          NIT Tiruchirappalli has a rich and long tradition of garnering innovation within the
          campus, among students. This is evident in the long list of successful entrepreneurs and
          the top executives in many multinational companies. The student community of NITT in 2005
          established the Entrepreneurship Cell of NIT Trichy. It is a non-profit, student-run
          organization dedicated to fostering an entrepreneurial spirit and incubating ideas into
          startups through initiatives on the NIT Trichy campus, and beyond. The Center for
          Entrepreneurship Development and Incubation (CEDI) was established in 2012 in NITT campus.
          It is an independent company promoted by the institute and is currently registered under
          Section 8 of the Companies Act. CEDI has created a comprehensive Entrepreneurial ecosystem
          at NIT, Trichy to enable young entrepreneurs to initiate technology start-up companies for
          commercial exploration of technologies developed by the institute community. In the year
          2016, the Institute Intellectual Property Rights (IPR) Cell was established to create
          awareness among the nstitute community about various types of Intellectual Properties and
          the various associated terms. It also helps Faculty and/or Students secure patents,
          copyrights, licenses for their work. In 2020, the the Institute Innovation Council (IIC)
          was started at NIT Tiruchirappalli (NITT) to integrate the initiatives on Innovation and
          Entrepreneurship across the Institute. In alignment with the objectives of Ministry of
          Education’s Institution’s Innovation Council, the IIC at the institute forms a seamless
          bridge among the institute community to take part in innovation and entrepneurship
          initiatives. Through closely working with the incubation center at the institute, viz.
          CEDI, The IIC at NITT motivates the faculty, research scholars, staff and the students to
          transform their innovative ideas into a startup. Also, the IIC at NIT Trichy regularly
          conducts awareness programs on Intellectual Property, funding opportunities for startup
          companies, idea pitching events, etc. The result of these well planned efforts create an
          innovation ecosystem in the campus. This is a promising outcome and a good starting point
          in realizing Atmanirbhar Bharat, i.e. a self-reliant nation.
        </div>
      </div>
      <div className="ContactInformation">
        <div className="ContactInfoContent">For more details, contact: Dr. K. Muthukumar</div>
        <div className="ContactInfoContent"> President, IIC.</div>
      </div>
      <Footer />
    </>
  );
};

export default IIC;
