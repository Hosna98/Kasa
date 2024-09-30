/*
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import TagList from "../components/TagList";
import Rating from "../components/Rating";
*/
// import Error from "./Error"; // Assure-toi que le composant Error est importé si tu souhaites l'utiliser
/*
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "./Carrousel";
import locations from "../data/locations.json";


const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find((item) => item.id === id);

  [id, location, navigate];
  

const Logements = () => {
    return (
        <div className="logements">
            <Carrousel slides={locations.pictures} />
            
        </div>
    );
};

export default Logements;

*/

/*
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "./Carrousel";
import locations from "../data/locations.json";


const Logements = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = locations.find((item) => item.id === id);

    if (!location){
      return <div>Location not found.</div>
    }

    return (
        <div className="logements">
            <Carrousel slides={location.pictures} />
        </div>
    );
};

export default Logements;
  */
 /*
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "./Carrousel";
import locations from "../data/locations.json";
import TagList from "./TagsList";

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find((item) => item.id === id);

  if (!location) {
    return <div>Location not found.</div>;
  }

  return (
    <div className="logements">
      <Carrousel slides={location.pictures} />
        <div className="rental_informations">
            <div className="rental_presentation">
                <div className="loc-content-up-left">
                    <h2>{location.title}</h2>
                    <h3>{location.location}</h3>
                    <div className="rental-Tags">
                    {location.tags.map((tag, index) => (
                        <TagList key={index} text={tag} />
                        ))}
                    </div>
                </div>
            </div>
        </div>


    
    
    
    </div>
  );
};
export default Logements;

*/
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "./Carrousel";
import locations from "../data/locations.json";
import TagList from "./TagsList";
import Rating from "./Rating";

const Logements = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locations.find((item) => item.id === id); // Vérifie le type ici si nécessaire

  if (!location) {
    return <div>Location not found.</div>;
  }

  return (
    <div className="logements">
      <Carrousel slides={location.pictures} />
     
        <div className="rental_presentation">
          <div className="loc-content-up-left">
            <h2 className="rental-title">{location.title}</h2>
            <h3 className="rental-location">{location.location}</h3>
            <div className="rental-Tags">
              <TagList tags={location.tags} /> 
            </div>
          </div>
        </div>
        <div className="host-rating">
            <div className="host">
                <h3 className="host-name">{location.host.name}</h3>
                <img src={location.host.picture} alt={location.title} />
            </div>
            <div className="rating">
                <Rating rating = {parseInt(location.rating,10)}/>
            </div>

        </div>
    </div>
  );
};

export default Logements;