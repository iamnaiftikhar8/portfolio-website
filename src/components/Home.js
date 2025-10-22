import React from 'react';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm John Smith</h1>
            <h2>Full Stack Developer</h2>
            <p>
              I create visually appealing, Functional Websites and Applications 
              using modern technologies like React, Node.js, Next.js and more.
            </p>
            <div className="skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-placeholder">
                   <img 
src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="John Smith - Full Stack Developer"
                className="profile-image"
              />
              <span>Profile Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;