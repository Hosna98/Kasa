
import PropTypes from 'prop-types';

const TagList = ({ tags, className }) => {
  return (
    <ul className={`tagList ${className}`}>
      {tags.map((tag) => (
        <li key={tag}>
          <span className="tag">{tag}</span>
        </li>
      ))}
    </ul>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};

export default TagList;