import Canvas from "./Canvas";
import Header from "./Header";
import '../index.css'; // Import your CSS file

const Paydues = () => {
    return ( 
        <div className="projects-wrapper">
          <Canvas />
          <div className="content">
            <Header />

            <div className="home-header-container">
              <div>
                <p className="home-header">Pay dues</p>
              </div>
            </div>

            <p className="pay-btn">Pay now</p>
          </div>
        </div>
     );
}
 
export default Paydues;