
import PropTypes from "prop-types";
import arrowLeft from "../assets/image/arrow_left.png";
import arrowRight from "../assets/image/arrow_right.png";
import { useState } from 'react';



const Carrousel = ({slides}) => {
    // slides et un tableau qui contient le lien pour chaque image du caroussel
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handlePrevClick = () => {
      //si l'index est égal à 0, on passe à la dernière slide
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };


const handleNextClick = () => {
    //si l'index est égal à la dernière slide, on passe à la première
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };
  
  const currentSlide = slides[currentIndex];
  const numSlides = slides.length;

  
  const shouldShowArrows = numSlides > 1;
const shouldShowIndicator = numSlides > 1;
    return (
        <div className="carrousel">
            <img className="slider" src={currentSlide} alt={`Slide ${currentIndex + 1}`} />
            {shouldShowArrows && (
            <>
                <img className="arrowLeft" src={arrowLeft} alt="Flèche Gauche" onClick={handlePrevClick}/>
                <img className="arrowRight" src={arrowRight} alt="Flèche Droite" onClick={handleNextClick} />
            </>
            )}
            {shouldShowIndicator && (
            <div className="slide-indicator">{`${currentIndex + 1}/${slides.length}`}</div>
            )}
        </div>
            );
            };
            Carrousel.propTypes = {
            slides : PropTypes.arrayOf(PropTypes.string).isRequired,
            };
        
    export default Carrousel;
        










