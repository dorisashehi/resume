import FormInput from '../Elements/FormInput';
import Button from '../Elements/Button';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const AddForm = (props) => {
  return (
    <div className="sub-section">
      <form>
        <FormInput
          label="Project Title"
          type="text"
          className="form-input"
          name="project_title"
          id="project_title"
          required={props.required}
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Job Title"
        />
        <FormInput
          label="Technology"
          type="text"
          className="form-input"
          name="project_technology"
          id="project_technology"
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Technology"
        />

        <FormInput
          label="Project Type"
          type="text"
          className="form-input"
          name="project_type"
          id="project_type"
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Project Type"
        />
        <div className="row-group">
          <FormInput
            label="Start Date"
            type="date"
            className="form-input"
            name="project_start_date"
            id="project_start_date"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Start Date"
          />

          <FormInput
            label="End Date"
            type="date"
            className="form-input"
            name="project_end_date"
            id="project_end_date"
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter End Date"
          />
        </div>

        <div className="form-group">
          <div className="App editor">
            <label htmlFor="exp_responsibilities">Work Done</label>
            <CKEditor
              editor={ClassicEditor}
              data={props.fields.project_works}
              id="project_works"
              onChange={(event, editor) => props.changeFormFields('project_works', editor.getData())}
            />
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
