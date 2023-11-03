import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Header() {
  const userPreferredMode = localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(userPreferredMode === 'true');

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
  };

  // Apply dark mode when component mounts
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);


  return (
    <div className="container-fluid sticky-top">
      <div className="row mainHeader justify-content-center">
        <div className="col-8 logo">
          <Link to="/">
          <h5 className='fw-bolder'>Where in the world?</h5>
          </Link>
        </div>
        <div className="col-4 text-end">
          <i className="bi bi-moon" onClick={toggleDarkMode}>
            <span className='fw-bold'>Dark Mode</span>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Header;
