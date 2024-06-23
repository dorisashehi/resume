import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import FormInput from '../Elements/Input';
import Button from '../Elements/Button';

const UpdateForm = (props) => {
  const updateAction = (event) => {
    event.preventDefault();
    props.update(props.fields.id);
  };

  return (
    <div className="sub-section">
      <form>
        <FormInput
          label="Skill Category"
          type="text"
          className="form-input"
          name="skill_category"
          id="skill_category"
          required={props.required.skill_category}
          value={props.fields.skill_category || ''}
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Skill Category"
        />

        <div className="row-group">
          <div className="form-group">
            <label htmlFor="skill_title">Technology</label>
            <div className="inline">
              <div className="field-btn">
                <input
                  type="text"
                  onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
                  className="form-input"
                  name="skill_title"
                  id="skill_title"
                  placeholder="Enter Technology"
                />
                {props.required.technology && <span className="error">Technology can't be empty</span>}
              </div>
              <div className="button-section add" onClick={(event) => props.handleAdd(event, fields.skill_title)}>
                <FontAwesomeIcon icon={faPlus} />
                <input type="submit" className="add" value="Add" />
              </div>
            </div>
            <div className="links">
              {props.technologies.length !== 0 &&
                props.technologies?.map((item, index) => (
                  <div className="link_name" key={index}>
                    <FontAwesomeIcon onClick={() => props.removeField(item)} icon={faXmark} />
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="button-section">
          <Button value="Close" onClick={(event) => props.toggleEdit(event)} className="btn close" />
          <Button value="Update" onClick={(event) => updateAction(event)} className="btn save" />
        </div>
      </form>
    </div>
  );
};
export default UpdateForm;
