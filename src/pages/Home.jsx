

import Thumb from "../components/Thumb";
import locations from "../data/locations.json";
import Footer from "../components/Footer";
import Bannerimg from "../components/Bannerimg";


const Home = () => {
    return (
        
          <div className="home"> 
            <div className="banner">
              <Bannerimg />
            </div>
            <div className="gallery">
              <Thumb locations = {locations}/>
            </div>

              <Footer />
          </div>
       
        
       
        
    );
};

export default Home;