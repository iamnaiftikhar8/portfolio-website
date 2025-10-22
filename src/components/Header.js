import React from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-brand">
          <h2>John Smith</h2>
        </div>
        <ul className="nav-links">
          <li>
            <button 
              className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActiveSection('home')}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'projects' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActiveSection('projects')}
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              className={activeSection === 'contact' ? 'nav-link active' : 'nav-link'}
              onClick={() => setActiveSection('contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;