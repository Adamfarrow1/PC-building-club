import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Header from './Header';
import Full_bg from "./particle-config/fullbg";

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
    console.log(data);
  if (loading) {
    return <p>Loading...</p>;
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
            <div className="project-box" key={index}>
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
