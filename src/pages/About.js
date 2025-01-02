import React from 'react';
import './About.css';  // Import the custom CSS file for styling

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">About Me</h1>
      <p className="about-description">
      Passionate about leveraging scientific expertise and innovative techniques to advance
biotechnological research and development. With extensive experience in molecular
laboratories and genetic engineering, I am proficient in organic chemistry, analytical
chemistry, biochemistry, and microbiology. Dedicated to enhancing research outcomes
through precise and efficient experimental design, I am seeking opportunities to contribute to
impactful projects in biotechnology that address real-world challenges and push the
boundaries of scientific discovery
      </p>

      <section className="about-section">
        <h2 className="section-title">Relevant labs</h2>
        <li>Organic chemistry</li>
        <li>Biochemistry</li>
        <li>Microbiology</li>
        <li>Genetic Engineering</li>
        <li>Environment</li>
        <li>Bioreactor</li>
        <li>Immunology</li>
        <li>diagnostic</li>
      </section>

      <section className="about-section">
        <h2 className="section-title">Education</h2>
        <p>B.Sc. in Biotechnology Engineering (2021-2026) at ORT Braude College.</p>
        
      </section>

      <section className="about-section">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-list">
          <li>Attention to Detail</li>
          <li>Equipment Calibration and Maintenance</li>
          <li>Conducting diagnostic tests and PCR analysis.</li>
          <li>Performing and analyzing PCR</li>
          <li>Ensuring compliance with safety and quality standards in laboratory settings</li>
          <li>Operating and maintaining laboratory equipment with expertise in calibration and troubleshooting</li>
          <li>Effective Troubleshooting Under Pressure</li>
          <li>Collaboration in Multidisciplinary Teams</li>
          <li>Time Management in Multitasking Laboratory Environments</li>
        </ul>
      </section>

      <section className="about-section">
        <h2 className="section-title">Links</h2>
        <p>
          <a href="https://www.linkedin.com/in/raneen-shammout-8395622b7/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </section>
    </div>
  );
};

export default About;
