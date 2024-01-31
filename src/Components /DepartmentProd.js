import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentProd = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Production Engineering</div>
      </div>
      <div className="DepartmentPictures">
        <img className="DepartmentPicturesMain" src="../Production.jpeg" alt="" />
      </div>
      <div className="Content">
        <div className="ContentStarter">
          Production Engineering (PE) is an interdisciplinary engineering that includes
          manufacturing technology, engineering sciences, management science, and optimization of
          complex processes, systems, or organizations.The Department of Production Engineering
          offers B.Tech. (Production Engineering), M.Tech. (Manufacturing technology), M.Tech
          (Industrial Engineering and Management), M.S. and Ph.D. programmes. State-of-the-art
          laboratories are available in the areas of Machining, Forming, Welding, Casting, Robotics,
          CIM, CNC, Mechatronics, Modeling, Simulation, Ergonomics, Tribology, Composite materials,
          and Operations Management.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Prod-1.jpg" alt="" />
        <img className="COEPictureMain" src="../Prod-2.jpg" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Welding Technology</li>
            <li>Solid State Joining</li>
            <li>Materials Behavior Subjected to Welding, Optimization Techniques</li>
            <li>Logistics and Supply Chain Management</li>
            <li>Operations Research</li>
            <li>Enterprise Resource Planning</li>
            <li>Scheduling Optimization</li>
            <li>Eco Design</li>
            <li>Micro/Nano Machining</li>
            <li>Flexible Manufacturing Systems</li>
            <li>Shape Memory Alloys</li>
            <li>CAD (Computer-Aided Design)</li>
            <li>Rapid Manufacturing</li>
            <li>Metal Matrix Composites Processing and Simulation</li>
            <li>Powder Metallurgy</li>
            <li>Agile & Lean Manufacturing</li>
            <li>Sustainable Production</li>
            <li>Smart Manufacturing</li>
            <li>Tribology</li>
            <li>E-waste Management</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentProd;
