import FormInput from '../Elements/FormInput';
import Button from '../Elements/Button';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const AddForm = (props) => {
  return (
    <div className="sub-section">
      <form method="POST">
        <FormInput
          label="Company"
          type="text"
          className="form-input"
          name="exp_company"
          id="exp_company"
          required={props.required}
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Company Title"
        />

        <FormInput
          label="Job Title"
          type="text"
          className="form-input"
          name="exp_job"
          id="exp_job"
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Job Title"
        />

        <FormInput
          label="Technology"
          type="text"
          className="form-input"
          name="exp_technology"
          id="exp_technology"
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Technology"
        />

        <div className="row-group">
          <FormInput
            label="City"
            type="text"
            className="form-input"
            name="exp_city"
            id="exp_city"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter City"
          />

          <FormInput
            label="Country"
            type="text"
            className="form-input"
            name="exp_country"
            id="exp_country"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Country"
          />
        </div>

        <div className="row-group">
          <FormInput
            label="Start Date"
            type="text"
            className="form-input"
            name="exp_start_date"
            id="exp_start_date"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Start Date"
          />

          <FormInput
            label="End Date"
            type="text"
            className="form-input"
            name="exp_end_date"
            id="exp_end_date"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Start Date"
          />
        </div>

        <div className="row-group">
          <div className="form-group">
            <div className="App">
              <label htmlFor="exp_responsibilities">Responsibilities</label>
              <CKEditor
                editor={ClassicEditor}
                data=""
                id="exp_responsibilities"
                onChange={(event, editor) => props.changeFormFields('exp_responsibilities', editor.getData())}
              />
            </div>
          </div>
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
