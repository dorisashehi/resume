import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

const OtherLinks = ({ name, text, removeField, others, changeValue }) => {
  const handleRemove = () => {
    //REMOVE OTHERS LINKS FIELDS
    removeField(text.toLowerCase()); //CALL PROPS FUNCTION TAKEN FROM PARENT
  };

  return (
    <div className="form-group">
      <label htmlFor={name}>{text}</label>
      <div className="inline">
        <input
          type="text"
          className="form-input"
          name={name}
          id={name}
          placeholder="Enter Url"
          value={others[name]}
          onChange={(event) => changeValue(name, event.target.value)}
        />
        <FontAwesomeIcon icon={faTrashCan} onClick={handleRemove} className="delete-icon" />
      </div>
    </div>
  );
};

OtherLinks.propTypes = {
  //TYPES FOR THE PROP TYPES DEFINIED. IT SHOWS ERRORS ON CONSOLE IF TYPES NOT THE SAME
  name: PropTypes.string.isRequired,
  removeField: PropTypes.func,
  changeValue: PropTypes.func,
  others: PropTypes.object,
  text: PropTypes.string.isRequired,
};

export default OtherLinks;
