
import { useState } from "react";
import Fleche from "../assets/image/arrow.png";
import PropTypes from "prop-types";

const Collapse = ({ title, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleToggle = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div className={`collapse ${isVisible ? "visible" : ""}`}>
        <div className="headCollapse" onClick={handleToggle}>
          <h3>{title}</h3>
          <img
            src={Fleche}
            alt="flèche"
            className={`arrow ${isVisible ? "down" : ""}`}
          />
        </div>
        <div className={`paragraph ${isVisible ? "animate" : ""}`}>
          {children}
        </div>
      </div>
    );
  };
  
  Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default Collapse;