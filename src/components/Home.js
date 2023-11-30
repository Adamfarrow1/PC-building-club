import React, { useRef, useEffect } from 'react';
import Header from './Header';
import Design from './particle-config/particle-config';
import Design2 from './particle-config/particle-config2';
import Pulsating from './pulsing';
import styled from 'styled-components';
import { SlArrowDown } from 'react-icons/sl';
import img from '../img/icons8-instagram.svg'
import { Link } from 'react-router-dom';

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
        <div className="home-header-container" data-aos="zoom-in-up" data-aos-duration="2000" data-aos-delay="2500">
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
            
        <div className="home-divs" >
          <p className="text">Projects</p>
          <p className="text">stuff here</p>
          <div>
          <Link to='/projects' className="link-dom"><p className="text-center project-btn">Projects</p></Link>
            
          </div>
        </div>
        <div className="home-divs" >
          <p className="text">Upcoming events</p>
          <p className="text">stuff here</p>
          <div>
            <Link to='/events' className="link-dom"><p className="text-center project-btn">Learn More</p></Link>
          </div>
        
        </div>
        <div className="home-divs" >
          <p className="text">Pay dues</p>
          <p className="text">stuff here</p>
          <div>
          <Link to='/pay-dues' className="link-dom"><p className="text-center project-btn">Pay dues</p></Link>
          </div>
        </div>
        <div className="insta-div" >
          <p className="text">Stay connected and get the latest updates on Instagram!</p>
          <div>
          <a href="https://www.instagram.com/spcbatucf/" target="_blank" rel="noopener noreferrer">
            <img className='insta-svg' src={img} alt="Instagram" />
          </a>
          </div>
        </div>
        <Design2 />
      </div>
  
    </div>
  );
};

export default Home;
