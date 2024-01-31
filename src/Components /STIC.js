import React from 'react';
import Header from './Header';
import Footer from './Footer';

const STIC = () => {
  const data = [];
  const tableRows = data.map((project) => (
    <tr key={project.sno}>
      <td>{project.sno}</td>
      <td className="TitleProjects">{project.title}</td>
      <td>{project.agency}</td>
      <td>{project.fund}</td>
    </tr>
  ));
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Space Technology Incubation Centre (S-TIC)</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Indian Space Research Organization set-up the Space Technology Incubation Centre (S-TIC)
          at NIT Tiruchirappalli to develop Academia-Industry collaboration and encourages start-ups
          and entrepreneurship spirit among the student community in the Space Technology domain.
          The objective of the centre is to promote the multidimensional welfare of the people and
          also to encourage the participation of Academic spaces in building the nation in its Space
          projects. In this direction, ISRO has been sponsoring different Product/Technology
          Development propels to the faculty of NIT Trichy. Additionally, it has also been
          encouraging active participation of students for Internship and visiting ISRO as part of
          the project work etc.
        </div>
      </div>
      <div className="ContentLink">
        <div className="ContentStarterLink">
          {' '}
          <a href="https://www.nitt.edu/home/rc/isrosticcell/Project%20Santioned_ISRO%20STIC%20cell_NIT%20Tiruchirappalli.pdf">
            Click here to know about the ISRO Sanctioned Projects
          </a>
        </div>
        <div className="ContentStarterLink">
          {' '}
          <a href="https://www.nitt.edu/home/rc/isrosticcell/Research_Areas_in_Space_for_web2023.pdf">
            Click here to know about the Proposals that are invited in the Research Basket launched
            by ISRO in 2023
          </a>
        </div>
        <div className="ContentStarterLink">
          {' '}
          <a href="https://www.nitt.edu/home/rc/isrosticcell/SAC%20Research%20Areas.pdf">
            Click here to know about the SAC Research in 2023{' '}
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default STIC;
