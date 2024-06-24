import { CKEditor } from '@ckeditor/ckeditor5-react';
import Button from '../Elements/Button';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormInput from '../Elements/FormInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faMinus } from '@fortawesome/free-solid-svg-icons';

const UpdateForm = (props) => {
  const updateAction = (event) => {
    event.preventDefault();
    props.update(props.fields.id);
  };

  return (
    <div className="sub-section">
      <form method="POST">
        <FormInput
          label="Project Title"
          type="text"
          className="form-input"
          name="project_title"
          id="project_title"
          value={props.fields.project_title || ''}
          required={props.required}
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Job Title"
        />
        <FormInput
          label="Project Type"
          type="text"
          className="form-input"
          name="project_type"
          id="project_type"
          value={props.fields.project_type || ''}
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Project Type"
        />
        <FormInput
          label="Enter Technology"
          type="text"
          className="form-input"
          name="project_technology"
          id="project_technology"
          value={props.fields.project_technology || ''}
          onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
          placeholder="Enter Technology"
        />
        <div className="row-group">
          <FormInput
            label="Start Date"
            type="date"
            className="form-input"
            name="project_start_date"
            id="project_start_date"
            value={props.fields.project_technology || ''}
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter Start Date"
          />

          <FormInput
            label="End Date"
            type="date"
            className="form-input"
            name="project_end_date"
            id="project_end_date"
            value={props.fields.project_end_date || ''}
            onChange={(event) => props.changeFormFields(event.target.id, event.target.value)}
            placeholder="Enter End Date"
          />
        </div>
        <div className="row-group">
          <div className="form-group">
            <div className="App">
              <label htmlFor="exp_responsibilities">Works Done</label>
              <CKEditor
                editor={ClassicEditor}
                data={props.fields.project_works || ''}
                id="project_works"
                onChange={(event, editor) => props.changeFormFields('project_works', editor.getData())}
              />
            </div>
          </div>
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

            <Button value="Update" onClick={(event) => updateAction(event)} className="btn save" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default UpdateForm;
