
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import locations from "../data/locations.json";
import TagList from "./TagsList";
import Rating from "./Rating";
import Collapse from "./Collapse";
import Footer from "./Footer";

const Logements = () => {
  const { id } = useParams();
  
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
                <img className="host-picture" src={location.host.picture} alt={location.title} />
            </div>
            <div className="rating">
                <Rating rating = {parseInt(location.rating,10)}/>
            </div>
        </div>
        <div className="rental-informations">
        <Collapse title="Description">{location.description}</Collapse>
            <Collapse title="Equipement">
              <ul>
                {location.equipments.map((equip, index) => (
                  <li key={index}>{equip}</li>
                ))}
              </ul>
            </Collapse>
        </div>
        <Footer />
    </div>
  );
};

export default Logements;