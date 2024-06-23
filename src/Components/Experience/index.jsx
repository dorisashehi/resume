import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPlus, faPenToSquare, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import AddForm from './add';
import UpdateForm from './update';

function Experience(props) {
  const [addBox, setOpen] = useState(false); //STATE FOR ADD EXPERIENCE BOX
  const [showSummany, setSummary] = useState(false); //STATE FOR ADD EXPERIENCE BOX
  const [editBox, setEdit] = useState(false);
  const [required, setRequired] = useState(false); //REQUIRED FIELD

  const [id, setID] = useState(); //ID FOR A NEW EXPERIENCE

  const [fieldsArr, setFieldsArr] = useState([]); //ARRAY OF EXPERIENCES ADDED

  /*
        {
            exp_company: '',
            exp_job: '',
            exp_technology: '',
            exp_city: '',
            exp_country: '',
            exp_start_date: '',
            exp_end_date: '',
            responsibilities: []
        }
    */

  const [fields, setFieldsObj] = useState({}); //AN OBJ TO SAVE THE EXPERIENCE ADDING TO ADD EXP BOX

  const toggleAdd = (event) => {
    //OPEN CLOSE DETAILS

    event.preventDefault();

    setID(uuidv4()); //GENERATE A RANDOM ID WHEN EXP BOX OPEN
    setFieldsObj({}); //EMPTY PREVIOUS EXPERIONCE OBJECT
    setEdit(false);
    setOpen(!addBox); //OPEN/CLOSE ADD BOX
  };

  const changeFormFields = (input, value) => {
    setFieldsObj({
      //SET INPUT FIELD VALUE TO THE EXPERIENCE OBJECT
      ...fields,
      id: id,
      [input]: value,
    });
  };

  const validateRequiredFields = (fields) => {
    //CHECK IS REQ FIELD IS FILLED

    if (!fields.exp_company) {
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
      //EXECUTE IF COMPANY NAME IF FILLED

      const newFieldsArr = [...fieldsArr, fields];
      setFieldsArr(newFieldsArr); //SET THE EXPERIENCE BJECT TO THE ARRAY OF EXPERIENCES
      props.addExperiences(newFieldsArr); //ADD ARRAY OF EXPERIENCES TO THE PARENT ELEMNT
      setOpen(false); //CLOSE ADD BOX DIALOG
    }
  };

  const handleOpenSummary = () => {
    //OPEN CLOSE EXPERIENCE SUMMARY
    setSummary(!showSummany);
  };

  const toggleEdit = (event) => {
    //OPEN CLOSE EDIT BOX

    event.preventDefault();
    setEdit(!editBox); //OPEN/CLOSE EDIT BOX
  };

  const handleEdit = (id) => {
    //EDIT EXPERIEMCE ACTION

    const data = fieldsArr.find((item) => item.id === id); //FIND EDITED EXPERINCE IN EXPERIENCES ARRAY

    setID(id);
    setOpen(false); //CLOSE ADD BOX IF OPENED
    setFieldsObj(data); //PASS EXPERIENCE EDITED DATA
    setEdit(true); //OPEN EDIT BOX
  };

  const update = (event) => {
    event.preventDefault();
    const index = fieldsArr.findIndex((item) => item.id === fields.id); //FIND INDEX OF EXPERIENCE IN ARR EXPERIENCES

    const error = validateRequiredFields(fields); //CHECK ID COMPANY NAME EMPTY

    if (!error) {
      const updatedExperiences = [...fieldsArr];
      updatedExperiences[index] = fields; //PUT UPDATED EXPERIENCE AT INDEX
      setFieldsArr(updatedExperiences); //SET THE EXPERIENCE BJECT TO THE ARRAY OF EXPERIENCES
      props.addExperiences(updatedExperiences); //ADD ARRAY OF EXPERIENCES TO THE PARENT ELEMNT
      setEdit(false); //CLOSE EDIT BOX DIALOG
    }
  };

  const deleteField = (event, id) => {
    event.preventDefault();
    const newFieldsArr = fieldsArr.filter((item) => item.id !== id); //FILTER WITHOUT THE REMOVED ELEMENT
    setFieldsArr(newFieldsArr);
    props.addExperiences(newFieldsArr);
    setEdit(false); //CLOSE EDIT BOX DIALOG
  };

  return (
    <>
      <div className="section-presentation row">
        <div className="experience toogle-header" onClick={handleOpenSummary}>
          <h1 className="title">
            <FontAwesomeIcon icon={faBriefcase} />

            <span>Professional Experience</span>
          </h1>
          <FontAwesomeIcon icon={faAngleDown} className="right-icon" />
        </div>
        {showSummany && (
          <div className="toogle-section">
            {fieldsArr.map((experience, index) => (
              <div className="item" key={index}>
                <p className="title">{experience.exp_company}</p>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(experience.id)} />
              </div>
            ))}

            <div className="item buttons">
              <div className="button-section" onClick={toggleAdd}>
                <FontAwesomeIcon icon={faPlus} />
                <input type="submit" className="add" value="Exerience" />
              </div>
            </div>
          </div>
        )}
      </div>
      {addBox && (
        <div className="experience-details-section row details">
          <h1>Add Experience</h1>
          <AddForm required={required} toggleAdd={toggleAdd} save={save} changeFormFields={changeFormFields} />
        </div>
      )}

      {editBox && (
        <div className="experience-details-section row details">
          <h1>Edit Proffesional Experience</h1>
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

export default Experience;
