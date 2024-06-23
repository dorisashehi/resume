import FormInput from '../Elements/FormInput';
import Button from '../Elements/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const AddForm = (props) => {
  return (
    <div className="sub-section">
      <form method="POST">
        <FormInput
          label="School"
          type="text"
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
            className="form-input"
            name="edu_city"
            id="edu_city"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter City"
          />

          <FormInput
            label="Country"
            type="text"
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
            className="form-input"
            name="schl_start_date"
            id="schl_start_date"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Start Date"
          />

          <FormInput
            label="End Date"
            type="date"
            className="form-input"
            name="schl_end_date"
            id="schl_end_date"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter End Date"
          />
        </div>

        <div className="button-section">
          <div className="link_name">
            <FontAwesomeIcon icon={faMinus} />
            <Button value="Close" onClick={(event) => props.toggleAdd(event)} className="btn-simple close" />
          </div>
          <Button value="Save" onClick={(event) => props.save(event)} className="btn save" />
        </div>
      </form>
    </div>
  );
};

export default AddForm;
