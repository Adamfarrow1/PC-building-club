import Design from "./particle-config/particle-config";
import Header from "./Header";
import '../index.css'; // Import your CSS file



const Paydues = () => {
    return ( 
        <div className="">
          {/* <Canvas /> */}
     
          <div className="content">
            <Header />
            <Design className='canvas'></Design>
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