import Header from './Header';
import Canvas from './Canvas';
import Design from "./particle-config/particle-config";
const Projects = () => {


    const projectsData = [
        {
          title: 'Project 1',
          description: 'Description for Project 1.',
          imageUrl: 'https://skytechgaming.com/wp-content/uploads/2022/08/win-a-free-pc.webp', // Provide the path to the image
        },
        {
          title: 'Project 2',
          description: 'Description for Project 2.',
          imageUrl: 'https://skytechgaming.com/wp-content/uploads/2022/08/win-a-free-pc.webp', // Provide the path to the image
        },
        {
            title: 'Project 1',
            description: 'Description for Project 1.',
            imageUrl: 'https://skytechgaming.com/wp-content/uploads/2022/08/win-a-free-pc.webp', // Provide the path to the image
          },
          {
            title: 'Project 2',
            description: 'Description for Project 2.',
            imageUrl: 'https://skytechgaming.com/wp-content/uploads/2022/08/win-a-free-pc.webp', // Provide the path to the image
          },
          {
            title: 'Project 1',
            description: 'Description for Project 1.',
            imageUrl: 'https://skytechgaming.com/wp-content/uploads/2022/08/win-a-free-pc.webp', // Provide the path to the image
          },
          {
            title: 'Project 2',
            description: 'Description for Project 2.',
            imageUrl: 'https://skytechgaming.com/wp-content/uploads/2022/08/win-a-free-pc.webp', // Provide the path to the image
          },
          {
              title: 'Project 1',
              description: 'Description for Project 1.',
              imageUrl: 'https://skytechgaming.com/wp-content/uploads/2022/08/win-a-free-pc.webp', // Provide the path to the image
            },
            {
              title: 'Project 2',
              description: 'Description for Project 2.',
              imageUrl: 'https://skytechgaming.com/wp-content/uploads/2022/08/win-a-free-pc.webp', // Provide the path to the image
            },
        // Add more project objects as needed
      ];



      return (
        <div className="projects-wrapper">
          {/* <Canvas /> */}
          <Design></Design>
          <div className="content">
            <Header />
            <div className="home-header-container">
              <div>
                <p className="home-header">Projects</p>
              </div>
            </div>
            <div className="project-boxes-container">
              {projectsData.map((project, index) => (
                <div className="project-box" key={index}>
                  <img src={project.imageUrl} alt={project.title} />
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}
 
export default Projects;