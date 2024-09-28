/*
import Card from "../components/Thumb";
import Gallery from './Gallery';

*/

import Thumb from "../components/Thumb";
import logements from "../data/logements.json"
import Footer from "../components/Footer";
import Bannerimg from "../components/Bannerimg";


const Home = () => {
    return (
        
          <div className="home"> 
            <div className="banner">
              <Bannerimg />
            </div>
            <div className="gallery">
              <Thumb logements = {logements}/>
            </div>

              <Footer />
          </div>
       
        
       
        
    );
};

export default Home;