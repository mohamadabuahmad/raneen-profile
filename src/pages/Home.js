import React from 'react';
import './Home.css';  // Import the custom CSS file for styling

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Profile Picture */}
          <img src="/profile_pic.jpg" alt="Mohamad Abu Ahmad" className="profile-picture" />
          <h1 className="hero-title">Hi, I'm Raneen Shammout</h1>
          <p className="hero-subtitle">Biotechnology Engineering Student </p>
          <div className="hero-buttons">
          <a href="/CV.pdf" download className="cv-download-button">Download My CV</a>

            <a href="/contact" className="hero-button hero-button-outline">Contact Me</a>
          </div>
          {/* Download CV Button */}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <h2>About Me</h2>
        <p>
        Driven Biotechnological Engineer with a deep passion for revolutionizing healthcare and sustainability through innovative research, cutting-edge technology, and impactful problem-solving
        </p>
        <a href="/about" className="about-read-more">Read More</a>
      </section>

      {/* Featured Apps Section */}


      {/* Skills Overview Section */}
      <section className="skills-overview">
        <h2>My Skills</h2>
        <p>Conducting laboratory tests,Ability to operate laboratory equipment ... </p>
        <a href="/about" className="about-read-more">Read More</a>
      </section>

      {/* Contact Preview Section */}
      <section className="contact-preview">
        <h2>Get In Touch</h2>
        <p>If you are interested in collaborating or want to know more about my work, feel free to contact me.</p>
        <a href="/contact" className="contact-button">Contact Me</a>
      </section>
    </div>
  );
};

export default Home;
