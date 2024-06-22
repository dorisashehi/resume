import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Button from '../Elements/Button';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faAngleDown, faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function Projects(props) {
  const [addBox, setOpen] = useState(false);
  const [editBox, setEdit] = useState(false);
  const [showSummany, setSummary] = useState(false); //STATE FOR ADD PROJECT BOX
  const [id, setID] = useState(); //ID FOR A NEW PROJECT
  const [required, setRequired] = useState(false); //REQUIRED FIELD
  const [fields, setFieldsObj] = useState({}); //AN OBJ TO SAVE THE PROJECT ADDING TO ADD EXP BOX
  const [fieldsArr, setFieldsArr] = useState([]); //ARRAY OF PROJECTS ADDED

  /**
     *  {
            project_title: '',
            project_technology: '',
            project_type: '',
            project_city: '',
            project_country: '',
            work_done: []

        },
     */

  const handleOpenSummary = () => {
    //OPEN CLOSE PROJECT SUMMARY
    setSummary(!showSummany);
  };

  const toggleAdd = (event) => {
    //OPEN CLOSE DETAILS

    event.preventDefault();

    setID(uuidv4()); //GENERATE A RANDOM ID WHEN ADD BOX OPEN
    setFieldsObj({}); //EMPTY PREVIOUS PROJECT OBJECT
    setEdit(false);
    setOpen(!addBox); //OPEN/CLOSE ADD BOX
  };

  const changeFormFields = (input, value) => {
    setFieldsObj({
      //SET INPUT FIELD VALUE TO THE PROJECT OBJECT
      ...fields,
      id: id,
      [input]: value,
    });
  };

  const validateRequiredFields = (fields) => {
    //CHECK IS REQ FIELD IS FILLED

    if (!fields.project_title) {
      setRequired(true); //REQUIRED FIELD IS NOT FILLED
      return true;
    }

    setRequired(false); //REQUIRED FIELD IS FILLED
    return false;
  };

  const save = (event) => {
    event.preventDefault();

    const error = validateRequiredFields(fields);

    if (!error) {
      //EXECUTE IF SCHOOL NAME IF FILLED

      const newFieldsArr = [...fieldsArr, fields];
      setFieldsArr(newFieldsArr); //SET THE PROJECT OBJECT TO THE ARRAY OF PROJECTS
      setOpen(false); //CLOSE ADD BOX DIALOG
      props.addProjects(newFieldsArr); //ADD ARRAY OF PROJECTS TO THE PARENT ELEMNT
    }
  };

  const handleEdit = (id) => {
    //EDIT PROJECT ACTION

    const data = fieldsArr.find((item) => item.id === id); //FIND EDITED PROJECT IN PROJECTS ARRAY

    setID(id);
    setOpen(false); //CLOSE ADD BOX IF OPENED
    setFieldsObj(data); //PASS PROJECT EDITED DATA
    setEdit(true); //OPEN EDIT BOX
  };

  const update = (event, id) => {
    event.preventDefault();
    const index = fieldsArr.findIndex((item) => item.id === id); //FIND INDEX OF PROJECT IN ARR PROJECTS

    const error = validateRequiredFields(fields); //CHECK ID COMPANY NAME EMPTY

    if (!error) {
      const updatedFieldsArr = [...fieldsArr];
      updatedFieldsArr[index] = fields; //PUT UPDATED PROJECT AT INDEX
      setFieldsArr(updatedFieldsArr); //SET THE PROJECT OBJECT TO THE ARRAY OF PROJECTS
      props.addProjects(updatedFieldsArr); //ADD ARRAY OF PROJECTS TO THE PARENT ELEMNT
      setEdit(false); //CLOSE EDIT BOX DIALOG
    }
  };

  return (
    <>
      <div className="section-presentation row">
        <div className="experience toogle-header" onClick={handleOpenSummary}>
          <h1 className="title">
            <FontAwesomeIcon icon={faFolderOpen} />
            <span>Projects & Outside Experience</span>
          </h1>
          <FontAwesomeIcon icon={faAngleDown} className="right-icon" />
        </div>

        {showSummany && (
          <div className="toogle-section">
            {fieldsArr.map((project, index) => (
              <div className="item" key={index}>
                <p className="title">{project.project_title}</p>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(project.id)} />
              </div>
            ))}

            <div className="item buttons" onClick={toggleAdd}>
              <div className="button-section">
                <FontAwesomeIcon icon={faPlus} />
                <input type="submit" className="add" value="Project" />
              </div>
            </div>
          </div>
        )}
      </div>

      {addBox && (
        <div className="project-details-section row details">
          <h1>Edit Projects</h1>
          <div className="sub-section">
            <form>
              <div className="form-group">
                <label htmlFor="project_title">Project Title</label>
                <input
                  type="text"
                  onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                  className="form-input"
                  name="project_title"
                  id="project_title"
                  placeholder="Enter Job Title"
                />
                {required && <span className="error">That is a required field</span>}
              </div>
              <div className="form-group">
                <label htmlFor="project_technology">Technology</label>
                <input
                  type="text"
                  onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                  className="form-input"
                  name="project_technology"
                  id="project_technology"
                  placeholder="Enter Technology"
                />
              </div>

              <div className="form-group">
                <label htmlFor="project_type">Project Type</label>
                <input
                  type="text"
                  onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                  className="form-input"
                  name="project_type"
                  id="project_type"
                  placeholder="Project Type"
                />
              </div>

              <div className="row-group">
                <div className="form-group">
                  <label htmlFor="project_start_date">Start Date</label>
                  <input
                    type="date"
                    onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                    className="form-input"
                    name="project_start_date"
                    id="project_start_date"
                    placeholder="Enter Start Date"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="project_end_date">End Date</label>
                  <input
                    type="date"
                    onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                    className="form-input"
                    name="project_end_date"
                    id="project_end_date"
                    placeholder="Enter End Date"
                  />
                </div>
              </div>

              <div className="row-group">
                <div className="form-group">
                  <div className="App">
                    <label htmlFor="exp_responsibilities">Work Done</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={fields.project_works}
                      id="project_works"
                      onChange={(event, editor) => changeFormFields('project_works', editor.getData())}
                    />
                  </div>
                </div>
              </div>

              <div className="button-section">
                <Button value="Close" onClick={(event) => toggleAdd(event)} className="btn close" />
                <Button value="Save" onClick={(event) => save(event)} className="btn save" />
              </div>
            </form>
          </div>
        </div>
      )}

      {editBox && (
        <div className="project-details-section row details">
          <h1>Edit Projects</h1>
          <div className="sub-section">
            <form>
              <div className="form-group">
                <label htmlFor="project_title">Project Title</label>
                <input
                  type="text"
                  value={fields?.project_title}
                  onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                  className="form-input"
                  name="project_title"
                  id="project_title"
                  placeholder="Enter Job Title"
                />
                {required && <span className="error">That is a required field</span>}
              </div>

              <div className="form-group">
                <label htmlFor="project_type">Project Type</label>
                <input
                  type="text"
                  value={fields?.project_type}
                  onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                  className="form-input"
                  name="project_type"
                  id="project_type"
                  placeholder="Project Type"
                />
              </div>

              <div className="form-group">
                <label htmlFor="project_technology">Technology</label>
                <input
                  type="text"
                  value={fields?.project_technology}
                  onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                  className="form-input"
                  name="project_technology"
                  id="project_technology"
                  placeholder="Enter Technology"
                />
              </div>

              <div className="row-group">
                <div className="form-group">
                  <label htmlFor="project_start_date">Start Date</label>
                  <input
                    type="date"
                    value={fields?.project_start_date}
                    onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                    className="form-input"
                    name="project_start_date"
                    id="project_start_date"
                    placeholder="Enter Start Date"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="project_end_date">End Date</label>
                  <input
                    type="date"
                    value={fields?.project_end_date}
                    onChange={(event) => changeFormFields(event.target.id, event.target.value)}
                    className="form-input"
                    name="project_end_date"
                    id="project_end_date"
                    placeholder="Enter End Date"
                  />
                </div>
              </div>

              <div className="row-group">
                <div className="form-group">
                  <div className="App">
                    <label htmlFor="exp_responsibilities">Works Done</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data={fields.project_works}
                      id="project_works"
                      onChange={(event, editor) => changeFormFields('project_works', editor.getData())}
                    />
                  </div>
                </div>
              </div>

              <div className="button-section">
                <Button value="Close" onClick={(event) => toggleEdit(event)} className="btn close" />
                <Button value="Update" onClick={(event) => update(event, fields.id)} className="btn save" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
