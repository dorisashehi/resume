import Button from '../Elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddForm = (props) => {
  return (
    <div className="sub-section">
      <form method="POST">
        <div className="form-group">
          <label htmlFor="skill_category">Skill Category</label>
          <input
            type="text"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            className="form-input"
            name="skill_category"
            id="skill_category"
            placeholder="Enter Skill Category"
          />

          {props.required.skill_category && <span className="error">That is a required field</span>}
        </div>

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
              <div className="button-section add" onClick={(event) => props.handleAdd(event, props.fields.skill_title)}>
                <FontAwesomeIcon icon={faPlus} />
                <input type="submit" className="add" value="Add" />
              </div>
            </div>

            <div className="links">
              {props.technologies.length !== 0 &&
                props.technologies?.map((item, index) => (
                  <div className="link_name" key={index}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="button-section">
          <Button value="Close" onClick={(event) => props.toggleAdd(event)} className="btn close" />
          <Button value="Save" onClick={props.save} className="btn save" />
        </div>
      </form>
    </div>
  );
};
export default AddForm;
