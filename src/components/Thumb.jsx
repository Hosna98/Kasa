


import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Thumb = ({ logements}) => {

  return (
    <>
      {logements.map((logements) => (
        <div key={`routePaths${logements.id}`} className="thumb">
          <NavLink to={`/location/${location.id}`}>
            <img src={logements.cover} alt={ `photo ${logements.title}`} />
            <h2 key={`${logements.id}`}>{logements.title}</h2>
          </NavLink>
        </div>
      ))}
    </>
  );
};

Thumb.propTypes = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Thumb;