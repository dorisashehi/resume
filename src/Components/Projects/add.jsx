import FormInput from '../Elements/Input';
import Button from '../Elements/Button';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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
          required={props.required}
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Technology"
        />

        <FormInput
          label="Project Type"
          type="text"
          className="form-input"
          name="project_type"
          id="project_type"
          required={props.required}
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
            required={props.required}
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Start Date"
          />

          <FormInput
            label="End Date"
            type="date"
            className="form-input"
            name="project_end_date"
            id="project_end_date"
            required={props.required}
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter End Date"
          />
        </div>

        <div className="form-group">
          <div className="App">
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
          <Button value="Close" onClick={(event) => props.toggleAdd(event)} className="btn close" />
          <Button value="Save" onClick={props.save} className="btn save" />
        </div>
      </form>
    </div>
  );
};
export default AddForm;
