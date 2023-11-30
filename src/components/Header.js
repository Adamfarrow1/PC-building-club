import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import '../index.css'; // Import your CSS file
import img from '../img/icons8-menu.svg'

const styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '30px', // Adjust the width to make it smaller
        height: '20px', // Adjust the height to make it smaller
        right: '20px',
        top: '20px',
        cursor: 'pointer'
    },
    bmBurgerBars: {
      background: '#373a47',
      width: '100%'
    },
    bmBurgerBarsHover: {
      background: '#a90000',
    },
    bmCrossButton: {
      height: '30px',
      width: '30px'
    },
    bmCross: {
      background: '#bdc3c7',
      height: '30px'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100vh',
      top: '0', 
      width: '250px'
      
    },
    bmMenu: {
      background: '#212224',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      overflow: 'hidden', // Hide the scrollbar
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
      display: 'flex',
      flexDirection: 'column'
      
    },
    bmItem: {
      display: 'inline-block',
      textDecoration: 'none',
      color: 'white',
      marginBottom: '10px'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  


function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // Check if the current location is the home page
    const isHomePage = location.pathname === '/';

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };
    const [mobile, setMobile] = useState(window.innerWidth > 690);
    useEffect(() => {
        const handleResize = () => {
          setMobile(window.innerWidth > 690);
        };
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Remove the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <header className={`header-container ${isHomePage ? 'animate-header' : ''}`}>
            <div className='header-split'>
            <Link to='/' className="link-dom"><p className='logo' data-aos={isHomePage ? "fade-in" : ""} data-aos-duration="2000" data-aos-delay="1000">UCF PC Building Club</p></Link>
                <div id="outer-container">
                    { mobile ? 
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-item" data-aos={isHomePage ? "fade-in" : ""} data-aos-duration="2000" data-aos-delay="1300">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item" data-aos={isHomePage ? "fade-in" : ""} data-aos-duration="2000" data-aos-delay="1600">
                                <Link to="/projects" className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item" data-aos={isHomePage ? "fade-in" : ""} data-aos-duration="2000" data-aos-delay="1900">
                                <Link to="/events" className="nav-link">Events</Link>
                            </li>
                            <li className="nav-item" data-aos={isHomePage ? "fade-in" : ""} data-aos-duration="2000" data-aos-delay="2100">
                                <Link to="/pay-dues" className="nav-link">Pay Dues</Link>
                            </li>
                        </ul>
                    </nav>
                    : 

                    <Menu right
                    styles={ styles }
                      isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)} outerContainerId={ "outer-container" }>
                        <Link to="/" onClick={handleMenuClick}>Home</Link>
                        <Link to="/projects" onClick={handleMenuClick}>Projects</Link>
                        <Link to="/events" onClick={handleMenuClick}>Events</Link>
                        <Link to="/pay-dues" onClick={handleMenuClick}>Pay Dues</Link>
                    </Menu>
                    }  
                </div>
            </div>
        </header>
    );
}

export default Header;
