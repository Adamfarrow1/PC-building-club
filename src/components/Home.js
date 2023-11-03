import '../index.css'; // Import your CSS file
import Header from './Header';
import Canvas from './Canvas';

const Home = () => {
    return ( 
        <>
            <div className='home-container'>
                <Header></Header>
                <div className='home-header-container'>
                    <div>
                        <p className='home-header'>Society of PC Building at UCF</p>
                        <p className='text-center project-btn'>Projects</p>
                    </div>
                
                </div>
                
            </div> 
            <div className='home-content centered-divs'>
                <div className='home-divs'>
                    <p className='text'>Projects</p>
                    <p className='text'>stuff here</p>
                    <div>
                        <p className='text-center project-btn'>Projects</p>
                    </div>
                </div>
                <div className='home-divs'>
                    <p className='text'>Upcoming events</p>
                    <p className='text'>stuff here</p>
                    <div>
                        <p className='text-center project-btn'>Learn More</p>
                    </div>
                </div>
                <div className='home-divs'>
                    <p className='text'>Instagram Feed</p>
                    <p className='text'>stuff here</p>
                    <div>
                        <p className='text-center project-btn'>Instagram</p>
                    </div>

                </div>
                <Canvas className='canvas'/>
            </div>
        </>
    );
}
 
export default Home;