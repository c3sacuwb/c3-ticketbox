import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          C3
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${showMenu ? ' show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/forms">
                Forms
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/charts">
                Charts
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/welcome">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/option2">
                Option 2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/option3">
                Option 3
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
