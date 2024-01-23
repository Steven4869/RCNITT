import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Navigation from './Navigation';
import './Contact.css';
import Footer from './Footer';
import Header from './Header';

const Contact = () => {
  const [isNavSticky, setNavSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavSticky(true);
    } else {
      setNavSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <div className="Heading">
        <div className="HeadingText">CONTACT US</div>
      </div>
      <div className="ContactContainer">
        <div className="leftContainer">
          <h2>Contact Information</h2>
          <p>
            <strong>Office of Research & Consultancy</strong>
          </p>
          <p>
            <strong>NIT Trichy Tiruchirappalli, Tamilnadu, India. 620 015 </strong>
          </p>
          <p>
            <strong>Contact:</strong> +91-431-2503031
          </p>
          <p>
            <strong>General Queries:</strong> deanrco@nitt.edu
          </p>
          <p>
            <strong>Research Collaboration, Funding:</strong> deanrc@nitt.edu
          </p>
        </div>
        <div className="rightContainer">
          <h2>Contact Us</h2>
          <form action="https://formsubmit.co/deanrc@nitt.edu" method="POST">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
