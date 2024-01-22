import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import Footer from './Footer';
import Header from './Header';

const COESupercomputing = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">NATIONAL SUPERCOMPUTING CENTRE - PARAMPORUL</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          At NIT-T, the facility is installed at Third i, CSG and was inaugurated on May 25, 2022 by
          Shri Bhaskar Bhat, Chairperson Board of Governors, Tiruchirappalli in gracious presence of
          Prof. G. Aghila, Director, NIT Tiruchirappalli and others. PARAM PORUL is an 838 TeraFlops
          system equipped a mix of CPU nodes, GPU nodes, High Memory nodes, High throughput storage
          and high performance Infiniband interconnect to cater the computing needs of various
          scientific and engineering applications.
        </div>
        <div className="ContentStarter">
          It is based on Direct Contact Liquid Cooling technology to obtain a highpower usage
          effectiveness and thereby reducing the operational cost. Multiple applications from
          various scientific domains such as Weather and Climate, Bioinformatics, Computational
          Chemistry, Molecular Dynamics, Material Sciences, Computational Fluid Dynamics etc., has
          been installed on the system for the benefit of researchers. This high-end computing
          system will be a great value addition for the research community.
        </div>
      </div>
      <div className="COEPictures">
        <img style={{width:'50%'}} className="COEPictureMain" src="../COESuperComputer.jpeg" alt="" />
       
      </div>
     
      
      <Footer />
    </>
  );
};

export default COESupercomputing;
