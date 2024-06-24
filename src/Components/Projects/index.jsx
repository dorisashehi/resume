import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faAngleDown, faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import AddForm from './add';
import UpdateForm from './update';

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
    setEdit(false);
    setOpen(false);
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

  const toggleEdit = (event) => {
    //OPEN CLOSE EDIT BOX

    event.preventDefault();
    setEdit(!editBox); //OPEN/CLOSE EDIT BOX
  };

  const handleEdit = (id) => {
    //EDIT PROJECT ACTION

    const data = fieldsArr.find((item) => item.id === id); //FIND EDITED PROJECT IN PROJECTS ARRAY

    setID(id);
    setOpen(false); //CLOSE ADD BOX IF OPENED
    setFieldsObj(data); //PASS PROJECT EDITED DATA
    setEdit(true); //OPEN EDIT BOX
  };

  const update = (id) => {
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

  const deleteField = (event, id) => {
    event.preventDefault();
    const newFieldsArr = fieldsArr.filter((item) => item.id !== id); //FILTER WITHOUT THE REMOVED ELEMENT
    setFieldsArr(newFieldsArr);
    props.addProjects(newFieldsArr);
    setEdit(false); //CLOSE EDIT BOX DIALOG
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
          <AddForm
            required={required}
            toggleAdd={toggleAdd}
            save={save}
            changeFormFields={changeFormFields}
            fields={fields}
          />
        </div>
      )}

      {editBox && (
        <div className="project-details-section row details">
          <h1>Edit Projects</h1>
          <UpdateForm
            changeFormFields={changeFormFields}
            toggleEdit={toggleEdit}
            update={update}
            fields={fields}
            required={required}
            delete={deleteField}
          />
        </div>
      )}
    </>
  );
}

export default Projects;
