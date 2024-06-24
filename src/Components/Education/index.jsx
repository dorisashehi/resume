import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faPenToSquare, faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import AddForm from './add';
import UpdateForm from './update';

function Education(props) {
  const [addBox, setOpen] = useState(false);
  const [editBox, setEdit] = useState(false);
  const [showSummany, setSummary] = useState(false); //STATE FOR ADD EDUCATION BOX
  const [id, setID] = useState(); //ID FOR A NEW EDUCATION
  const [required, setRequired] = useState(false); //REQUIRED FIELD

  const handleOpenSummary = () => {
    //OPEN CLOSE EDIT
    setSummary(!showSummany);
    setEdit(false);
    setOpen(false);
  };

  const [fields, setFieldsObj] = useState({}); //AN OBJ TO SAVE THE EDUCATION ADDING TO ADD EXP BOX
  const [fieldsArr, setFieldsArr] = useState([]); //ARRAY OF EDUCATIONS ADDED

  /**
     *  {
            school: '',
            edu_city: '',
            edu_country: '',
            degree: '',
            schl_start_date: '',
            schl_end_date: '',
            courses: [],
        }
     */

  const toggleAdd = (event) => {
    //OPEN CLOSE DETAILS
    event.preventDefault();
    setID(uuidv4()); //GENERATE A RANDOM ID WHEN EXP BOX OPEN
    setFieldsObj({}); //EMPTY PREVIOUS EDUCATION OBJECT
    setEdit(false);
    setOpen(!addBox); //OPEN/CLOSE ADD BOX
  };

  const changeFormFields = (input, value) => {
    setFieldsObj({
      //SET INPUT FIELD VALUE TO THE EDUCATION OBJECT
      ...fields,
      id: id,
      [input]: value,
    });
  };

  const validateRequiredFields = (fields) => {
    //CHECK IS REQ FIELD IS FILLED

    if (!fields.school) {
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
      setFieldsArr(newFieldsArr); //SET THE EDUCATION BJECT TO THE ARRAY OF EXPERIENCES
      setOpen(false); //CLOSE ADD BOX DIALOG
      props.addEducation(newFieldsArr); //ADD ARRAY OF EDUCATIONS TO THE PARENT ELEMNT
    }
  };

  const handleEdit = (id) => {
    //EDIT EXPERIEMCE ACTION

    const data = fieldsArr.find((item) => item.id === id); //FIND EDITED EDUCATION IN EXPERIENCES ARRAY

    setID(id);
    setOpen(false); //CLOSE ADD BOX IF OPENED
    setFieldsObj(data); //PASS EXPERIENCE EDITED DATA
    setEdit(true); //OPEN EDIT BOX
  };

  const toggleEdit = (event) => {
    //OPEN CLOSE EDIT BOX

    event.preventDefault();
    setEdit(!editBox); //OPEN/CLOSE EDIT BOX
  };

  const update = (event) => {
    event.preventDefault();
    const index = fieldsArr.findIndex((item) => item.id === fields.id); //FIND INDEX OF EDUCATION IN ARR OF EDUCATIONS

    const error = validateRequiredFields(fields); //CHECK IF SCHOOL NAME IS EMPTY

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
    const newFieldsArr = fieldsArr.filter((item) => item.id !== id); //FILTER WITHOUT THE REMOVED ELEMENT
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
