import FormInput from '../Elements/FormInput';
import Button from '../Elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faMinus } from '@fortawesome/free-solid-svg-icons';

const UpdateForm = (props) => {
  return (
    <div className="sub-section">
      <form method="POST">
        <FormInput
          label="School"
          type="text"
          value={props.fields?.school}
          className="form-input"
          name="school"
          id="school"
          required={props.required}
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter School"
        />
        <FormInput
          label="Degree"
          type="text"
          value={props.fields.degree || ''}
          className="form-input"
          name="degree"
          id="degree"
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Degree"
        />
        <div className="row-group">
          <FormInput
            label="City"
            type="text"
            value={props.fields.edu_city || ''}
            className="form-input"
            name="edu_city"
            id="edu_city"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter City"
          />

          <FormInput
            label="Country"
            type="text"
            value={props.fields.edu_country || ''}
            className="form-input"
            name="edu_country"
            id="edu_country"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Country"
          />
        </div>

        <div className="row-group">
          <FormInput
            label="Start Date"
            type="date"
            value={props.fields.schl_start_date || ''}
            className="form-input"
            name="schl_start_date"
            id="schl_start_date"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Start Date"
          />

          <FormInput
            label="End Date"
            type="date"
            value={props.fields.schl_end_date || ''}
            className="form-input"
            name="schl_end_date"
            id="schl_end_date"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter End Date"
          />
        </div>
        <div className="button-section">
          <div className="link_name">
            <FontAwesomeIcon icon={faTrashCan} />
            <Button
              value="Delete"
              onClick={(event) => props.delete(event, props.fields.id)}
              className="btn-simple delete"
            />
          </div>

          <div className="button-group">
            <div className="link_name" onClick={(event) => props.toggleEdit(event)}>
              <FontAwesomeIcon icon={faMinus} />
              <Button value="Close" className="btn-simple close" />
            </div>

            <Button value="Update" onClick={props.update} className="btn save" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
