import React from 'react';
import { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Header from './Header';
import Full_bg from "./particle-config/fullbg";
import AOS from 'aos';

const GET_PRODUCTS_QUERY = gql`
  query Projects {
    projects {
      createdAt
      id
      projectDescription
      projectImage {
        id
        fileName
      }
      projectTitle
      publishedAt
      updatedAt
    }
  }  
`;

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_QUERY);
  useEffect(() => {
    AOS.init({
      offset: 0, // Adjust the offset as needed
    }); // Initialize AOS
    AOS.refresh();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
 
  if (error) {
    const errorMessage = error.message || 'An error occurred';
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div className="projects-wrapper" >
      <div className="canvas">
        <Full_bg />
      </div>
      <div className="content" >
        <Header />
        <div className="home-header-container" data-aos="fade-in" data-aos-duration="2000" data-aos-delay={250}>
          <div>
            <p className="home-header">Projects</p>
          </div>
        </div>
        <div className="project-boxes-container" data-aos="fade-in" data-aos-duration="2000" data-aos-delay={250}>
          {data && data.projects.map((project, index) => (
            <div className="project-box" key={index} >
              {/* <img src={project.projectImage.fileName} alt={project.projectTitle} /> */}
              <p className='project-title'>{project.projectTitle}</p>
              <p>{project.projectDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
