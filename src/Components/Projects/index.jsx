import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faAngleDown, faPlus, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import AddForm from './add';
import UpdateForm from './update';
import useToggleSections from '../Elements/Hooks/toogleSections';
import useValidate from '../Elements/Hooks/validate';
import useChangeFields from '../Elements/Hooks/changeFields';

function Projects(props) {
  /**
   {
        project_title: '',
        project_technology: '',
        project_type: '',
        project_city: '',
        project_country: '',
        work_done: []

    },
  */

  const { addBox, setOpen, editBox, setEdit, showSummany, handleOpenSummary, toggleAdd, toggleEdit } =
    useToggleSections();
  const { fields, setFieldsObj, fieldsArr, setFieldsArr, findField, findIndex, filterField, changeFormFields } =
    useChangeFields();
  const { validateRequiredFields, required } = useValidate();
  const [id, setID] = useState();

  const save = (event) => {
    event.preventDefault();

    const error = validateRequiredFields(fields);

    if (!error) {
      //EXECUTE IF SCHOOL NAME IF FILLED

      fields.id = uuidv4();
      const newFieldsArr = [...fieldsArr, fields];
      setFieldsArr(newFieldsArr); //SET THE PROJECT OBJECT TO THE ARRAY OF PROJECTS
      setOpen(false); //CLOSE ADD BOX DIALOG
      props.addProjects(newFieldsArr); //ADD ARRAY OF PROJECTS TO THE PARENT ELEMNT
    }
  };

  const handleEdit = (id) => {
    //EDIT PROJECT ACTION

    const data = findField(id); //FIND EDITED PROJECT IN PROJECTS ARRAY

    setID(id);
    setOpen(false); //CLOSE ADD BOX IF OPENED
    setFieldsObj(data); //PASS PROJECT EDITED DATA
    setEdit(true); //OPEN EDIT BOX
  };

  const update = () => {
    const index = findIndex(); //FIND INDEX OF PROJECT IN ARR PROJECTS
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
    const newFieldsArr = filterField(id); //FILTER WITHOUT THE REMOVED ELEMENT
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
