/*
import Card from "../components/Thumb";
import Gallery from './Gallery';

*/

import Thumb from "../components/Thumb";
import logements from "../data/logements.json"


const Home = () => {
    return (
        
          <div className="home"> 
            <div className="banner">
                <img src="../src/assets/image/BannerHome.png" alt="image montagnes" className="banner-img" />
                <h1 className="banner-title">Chez vous, partout et ailleur</h1>            
              </div>  
        
              <div className="gallery">
                  <Thumb logements = {logements}/>
              </div>
          </div>
        
        
       
        
    );
};

export default Home;