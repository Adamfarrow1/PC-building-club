import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css'; // Import your CSS file

function Header() {
    const navigate = useNavigate();
  return (
    <header className="header-container">
        <div className='header-split'>
            <p className='logo'>UCF PC Building Club</p>
            <div>
            <nav className="nav">
                <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" className="nav-link">Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/pay-dues" className="nav-link">Pay Dues</Link>
                </li>
                </ul>
            </nav>
            </div>
        </div>
    </header>
  );
}

export default Header;
