import React from 'react';
import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Header from './Header';
import Full_bg from "./particle-config/fullbg";
import AOS from 'aos';
const GET_PRODUCTS_QUERY = gql`
query Events {
    events  {
      createdAt
      id
      when
      description
      publishedAt
      updatedAt
      title
    }
  }
  
`;

const Events = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);
  useEffect(() => {
    AOS.init({
      offset: 0,
    });
    AOS.refresh(); // Refresh AOS after initialization
  }, []);

  useEffect(() => {
    AOS.refreshHard(); // Refresh AOS after the component re-renders
  });

    console.log(data);
  if (loading) {
    return <p>Loading...</p>;
  }


  function isItemOffScreen(index) {
    const element = document.querySelector(`.project-box-${index}`);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        console.log(`Project ${index} is off screen`);
      }
      return rect.bottom < 0 || rect.top > window.innerHeight;
    }
    return false;
  }
  


  if (error) {
    // Check if the error message is available in the error object
    const errorMessage = error.message || 'An error occurred';

    // Render an error message component or an appropriate UI
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div className="projects-wrapper">
      <div className="canvas">
        <Full_bg />
      </div>
      <div className="content">
        <Header />
        <div className="home-header-container" data-aos="fade-in" data-aos-duration="2000" data-aos-delay={250}>
          <div>
            <p className="home-header">Events</p>
          </div>
        </div>
        <div className="project-boxes-container" data-aos="fade-in" data-aos-duration="2000" data-aos-delay={250}>
          {data && data.events.map((event, index) => (
            <div
            className={`project-box project-box-${index}`}
            key={index}
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay={isItemOffScreen(index) ? 250 : index * 200}
          >
              {/* <img src={project.projectImage.fileName} alt={project.projectTitle} /> */}
              <p className='project-title'>{event.title}</p>
              <p>{event.when}</p>
              <p>{event.description}</p>
              
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default Events;
