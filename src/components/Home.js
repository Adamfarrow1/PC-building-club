import React, { useRef, useEffect } from 'react';
import Header from './Header';
import Design from './particle-config/particle-config';
import Design2 from './particle-config/particle-config2';
import Pulsating from './pulsing';
import styled from 'styled-components';
import { SlArrowDown } from 'react-icons/sl';
import img from '../img/icons8-instagram.svg'
import { Link } from 'react-router-dom';
import ScrollToTop from '../ScrollToTop';
import '../cards.css'
import calendar from '../img/calendar.jpg'
import paypalIMG from '../img/paypal.jpg'
import cpu from '../img/cpu.jpg';

const StyledDiv = styled.div`
  align-items: center;
  background: ${({ color }) => color || '#ffb100'};
  border-radius: 32px;
  color: white;
  display: flex;
  height: 32px;
  cursor: pointer;
  justify-content: center;
  width: 130px;
`;

const Home = () => {

    const handleScrollToBottom = () => {
        const targetElement = document.getElementById('bottomAnchor'); // Add an id to an anchor at the bottom of your content
      
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };


  return (
    <div >
      <div className="home-container">
        <Design />
        <Header />
        <ScrollToTop/>
        <div className="home-header-container" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="2700">
          <Pulsating visible={true} color="#ffc90891">
            <StyledDiv onClick={handleScrollToBottom} color="#ffc908">
              {' '}
              <SlArrowDown style={{ color: 'black' }} />{' '}
            </StyledDiv>
          </Pulsating>
        </div>
      </div>

      
      <div
        className="home-content centered-divs" id='bottomAnchor'>
        <Link to='/projects' className="home-link">
        <div className="card" style={{ backgroundImage: `url(${cpu})` }} data-aos="fade-in" data-aos-duration="2000" data-aos-delay="200">
          <div className='card-content'>
            <p className="card-title">Projects</p>
            <p className="card-body">View our clubs projects</p>
          </div>
        </div>
        </Link>
        <Link to='/events' className="home-link">
        <div
          className="card"
          style={{ backgroundImage: `url(${calendar})` }} // Assuming 'calendar' is a variable containing the image URL
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="400"
        >
          <div className='card-content'>
            <p className="card-title">Upcoming events</p>
            <p className="card-body">View our upcoming events</p>
          </div>
        </div>
        </Link>
        <Link to='/pay-dues' className='home-link'>
        <div
          className="card"
          style={{ backgroundImage: `url(${paypalIMG})` }} // Assuming 'calendar' is a variable containing the image URL
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="500"
        >
          <div className='card-content'>
            <p className="card-title">Pay dues</p>
            <p className="card-body">Click here to pay your dues</p>

          </div>
        </div>
        </Link>
        <Design2 />
      </div>
      
    </div>
  );
};

export default Home;
