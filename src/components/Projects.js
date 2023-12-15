import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import Header from './Header';
import Full_bg from "./particle-config/fullbg";
import AOS from 'aos';
import ScrollToTop from '../ScrollToTop';

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
      offset: 0,
    });
    AOS.refresh(); // Refresh AOS after initialization
  }, []);

  useEffect(() => {
    AOS.refreshHard(); // Refresh AOS after the component re-renders
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    const errorMessage = error.message || 'An error occurred';
    return <p>Error: {errorMessage}</p>;
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

  return (
    <div className="projects-wrapper">
      <ScrollToTop></ScrollToTop>
      <div className="canvas">
        <Full_bg />
      </div>
      <div className="content">
        <Header />
        <div className="home-header-container">
          <div>
            <p className="home-header">Projects</p>
          </div>
        </div>
        <div className="project-boxes-container">
          {data &&
            data.projects.map((project, index) => (
              <div
                className={`project-box project-box-${index}`}
                key={index}
                data-aos="fade-in"
                data-aos-duration="2000"
                data-aos-delay={isItemOffScreen(index) ? 250 : index * 200}
              >
                {/* <img src={project.projectImage.fileName} alt={project.projectTitle} /> */}
                <p className="project-title">{project.projectTitle}</p>
                <p>{project.projectDescription}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
