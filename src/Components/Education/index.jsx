import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faPenToSquare, faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import useToggleSections from '../Elements/Hooks/toogleSections';
import useValidate from '../Elements/Hooks/validate';
import useChangeFields from '../Elements/Hooks/changeFields';
import AddForm from './add';
import UpdateForm from './update';

function Education(props) {
  /**
    {
        school: '',
        edu_city: '',
        edu_country: '',
        degree: '',
        schl_start_date: '',
        schl_end_date: '',
        courses: [],
    }
  */

  const { addBox, setOpen, editBox, setEdit, showSummany, handleOpenSummary, toggleAdd, toggleEdit } =
    useToggleSections();
  const { fields, setFieldsObj, fieldsArr, setFieldsArr, findField, findIndex, filterField, changeFormFields } =
    useChangeFields();
  const { validateRequiredFields, required } = useValidate();
  const [id, setID] = useState();

  const save = (event) => {
    event.preventDefault();

    const error = validateRequiredFields(fields.school);

    if (!error) {
      //EXECUTE IF SCHOOL NAME IF FILLED
      fields.id = uuidv4();
      const newFieldsArr = [...fieldsArr, fields];
      setFieldsArr(newFieldsArr); //SET THE EDUCATION BJECT TO THE ARRAY OF EXPERIENCES
      setOpen(false); //CLOSE ADD BOX DIALOG
      props.addEducation(newFieldsArr); //ADD ARRAY OF EDUCATIONS TO THE PARENT ELEMNT
    }
  };

  const handleEdit = (id) => {
    //EDIT EXPERIEMCE ACTION

    const data = findField(id); //FIND EDITED EDUCATION IN EXPERIENCES ARRAY

    setID(id);
    setOpen(false); //CLOSE ADD BOX IF OPENED
    setFieldsObj(data); //PASS EXPERIENCE EDITED DATA
    setEdit(true); //OPEN EDIT BOX
  };

  const update = (event) => {
    event.preventDefault();
    const index = findIndex(); //FIND INDEX OF EDUCATION IN ARR OF EDUCATIONS

    const error = validateRequiredFields(fields.school); //CHECK IF SCHOOL NAME IS EMPTY

    if (!error) {
      const updatedFieldsArr = [...fieldsArr];
      updatedFieldsArr[index] = fields; //PUT UPDATED EDUCATION AT INDEX
      setFieldsArr(updatedFieldsArr); //SET THE EDUCATION BJECT TO THE ARRAY OF EDUCATIONS
      props.addEducation(updatedFieldsArr); //ADD ARRAY OF EDUCATIONS TO THE PARENT ELEMNT
      setEdit(false); //CLOSE EDIT BOX DIALOG
    }
  };

  const deleteField = (event, id) => {
    event.preventDefault();
    const newFieldsArr = filterField(id); //FILTER WITHOUT THE REMOVED ELEMENT
    setFieldsArr(newFieldsArr);
    props.addEducation(newFieldsArr);
    setEdit(false); //CLOSE EDIT BOX DIALOG
  };

  return (
    <>
      <div className="section-presentation row">
        <div className="education toogle-header" onClick={handleOpenSummary}>
          <h1 className="title">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span>Education</span>
          </h1>
          <FontAwesomeIcon icon={faAngleDown} className="right-icon" />
        </div>

        {showSummany && (
          <div className="toogle-section">
            {fieldsArr.map((education, index) => (
              <div className="item" key={index}>
                <p className="title">{education.school}</p>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(education.id)} />
              </div>
            ))}

            <div className="item buttons">
              <div className="button-section" onClick={toggleAdd}>
                <FontAwesomeIcon icon={faPlus} />
                <input type="submit" className="add" value="Education" />
              </div>
            </div>
          </div>
        )}
      </div>

      {addBox && (
        <div className="education-details-section row details">
          <h1>Add Education</h1>
          <AddForm required={required} toggleAdd={toggleAdd} save={save} changeFormFields={changeFormFields} />
        </div>
      )}

      {editBox && (
        <div className="experience-details-section row details">
          <h1>Edit Education</h1>
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

export default Education;
