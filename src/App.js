import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;