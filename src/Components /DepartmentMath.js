import React from 'react';
import Header from './Header';
import Footer from './Footer';

const DepartmentMath = () => {
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">Department of Mathematics</div>
      </div>
      <div className="Content">
        <div className="ContentStarter">
          The Department of Mathematics established in 1964 along with the inception of the then
          Regional Engineering College, Tiruchirappalli. Handling Mathematics courses to B. Tech.,
          M. Tech., M.Sc. And Ph.D. students of the Institute. Conducting workshops, seminars and
          conferences in the different areas of theoretical and applied mathematics, periodically.
          The Department of Mathematics offers M.Sc. And Ph. D. degree programs in mathematics and
          its applications for students to pursue their career in both academics and industry.
          Recently the department got funding from DST – FIST.
        </div>
      </div>
      <div className="COEPictures">
        <img className="COEPictureMain" src="../Math-1.png" alt="" />
        <img className="COEPictureMain" src="../Math-2.png" alt="" />
      </div>
      <div className="Infrastructure">
        <div className="InfrastructureHeading">Research Areas</div>
        <div className="InfrastructurePoints">
          <ul>
            <li>Graph Theory</li>
            <li>Numerical Analysis</li>
            <li>Differential Equations</li>
            <li>Fluid Mechanics</li>
            <li>Operations Research</li>
            <li>Applied Statistics</li>
            <li>Complex Analysis</li>
            <li>Fuzzy Mathematics</li>
            <li>Linear Algebra</li>
            <li>Functional Analysis</li>
            <li>Integral Equations</li>
            <li>Fractals and Mathematical Modelling</li>
            <li>Fluid Dynamics</li>
            <li>Mathematical Biology</li>
            <li>Geometry of Banach Spaces</li>
            <li>Scientific Computing</li>
            <li>Optimization</li>
            <li>Geometric Function Theory</li>
            <li>Cryptography</li>
            <li>Number Theory</li>
            <li>Image Processing</li>
            <li>Stochastic Processes</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepartmentMath;
