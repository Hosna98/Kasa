import PropTypes from "prop-types";
import starFull from "../assets/image/star-active.png";
import starEmpty from "../assets/image/star-inactive";

const Rating = ({ rating }) => {
  const totalStars = 5;

  let starActive = [];
  let starInactive = [];

  for (let index = 0; index < rating; index++) {
    starActive.push(<img className="star-active" key={index} src={starFull} alt="Étoile active" />);
  }

  for (let index = 0; index < (totalStars - rating); index++) {
    starInactive.push(<img className="star-inactive" key={index} src={starEmpty} alt="Étoile inactive" />);
  }

  return (
    <>
      {starActive}
      {starInactive}
    </>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;