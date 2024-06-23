import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPlus, faPenToSquare, faHeadSideVirus } from '@fortawesome/free-solid-svg-icons';
import AddForm from './add';
import UpdateForm from './update';

function Skills(props) {
  const [addBox, setOpen] = useState(false);
  const [editBox, setEdit] = useState(false);
  const [showSummany, setSummary] = useState(false); //STATE FOR ADD EDUCATION BOX
  const [id, setID] = useState(); //ID FOR A NEW EDUCATION

  const [required, setRequired] = useState({
    skill_category: false,
    technology: false,
  }); //REQUIRED FIELD

  const [technologies, setTechnologies] = useState([]);

  const handleOpenSummary = () => {
    //OPEN CLOSE EDIT
    setSummary(!showSummany);
  };

  const [fields, setFieldsObj] = useState({
    skill_category: '',
    skill_title: '',
    technologies: [],
  }); //AN OBJ TO SAVE THE EDUCATION ADDING TO ADD EXP BOX

  const [fieldsArr, setFieldsArr] = useState([]); //ARRAY OF EDUCATIONS ADDED

  const toggleAdd = (event) => {
    //OPEN CLOSE DETAILS

    event.preventDefault();

    setID(uuidv4()); //GENERATE A RANDOM ID WHEN EXP BOX OPEN
    setFieldsObj({}); //EMPTY PREVIOUS EDUCATION OBJECT
    setEdit(false);
    setTechnologies([]); //EMPTY THE TECHNOLOGIES ARRAY
    setOpen(!addBox); //OPEN/CLOSE ADD BOX
  };

  const changeFormFields = (input, value) => {
    setFieldsObj({
      //SET INPUT FIELD VALUE TO THE EDUCATION OBJECT
      ...fields,
      id: id,
      [input]: value,
      technologies: [...technologies],
    });
  };

  const validateRequiredFields = (field, value) => {
    //CHECK IS REQ FIELD IS FILLED

    if (!value) {
      setRequired({ ...required, [field]: true }); //REQUIRED FIELD IS NOT FILLED
      return true;
    }

    setRequired(false); //REQUIRED FIELD IS FILLED
    return false;
  };

  const save = (event) => {
    event.preventDefault();

    const error = validateRequiredFields('skill_category', fields.skill_category);

    if (!error) {
      //EXECUTE IF SCHOOL NAME IF FILLED

      const newFieldsArr = [...fieldsArr, fields];
      setFieldsArr(newFieldsArr); //SET THE EDUCATION BJECT TO THE ARRAY OF EXPERIENCES
      setOpen(false); //CLOSE ADD BOX DIALOG
      props.addSkills(newFieldsArr); //ADD ARRAY OF EDUCATIONS TO THE PARENT ELEMNT
    }
  };

  const handleAdd = (tech, event) => {
    //ADD SKILL BUTTON LISTENER
    event.preventDefault();

    const error = validateRequiredFields('technology', tech); //TECH FIELD SHOULDN'T BE EMPTY

    if (!error) {
      setTechnologies([...technologies, tech]); //ADD TECH TO ARRAY
      setFieldsObj({ ...fields, technologies: [...technologies, tech] }); //ADD TECHNOLOGIE TO TECH ARRAY
    }
  };

  const removeField = (item) => {
    //REMOVE FORM FIELDS FOR LINKS ON CLICK REMOVE ICON

    const newTechnologies = technologies.filter((tech) => tech !== item.trim()); //FILTER WITHOUT REMOVED ITEM
    setTechnologies(newTechnologies); //UPDATE THE TECH ARRAY
    setFieldsObj({ ...fields, technologies: newTechnologies }); //ADD UPDATED TECH ARRAY TO FIELDS OBJ
  };

  const toggleEdit = (event) => {
    //OPEN CLOSE EDIT BOX

    event.preventDefault();
    setEdit(!editBox); //OPEN/CLOSE EDIT BOX
  };

  const handleEdit = (id) => {
    //EDIT EXPERIEMCE ACTION

    const data = fieldsArr.find((item) => item.id === id); //FIND EDITED SKILL IN SKILLS ARRAY

    setID(id);
    setOpen(false); //CLOSE ADD BOX IF OPENED
    setFieldsObj(data); //PASS SKILL EDITED DATA
    setTechnologies(data.technologies); //PASS SKILL EDITED DATA
    setEdit(true); //OPEN EDIT BOX
  };

  const update = (id) => {
    const index = fieldsArr.findIndex((item) => item.id === id); //FIND INDEX OF EDUCATION IN ARR OF EDUCATIONS

    const error = validateRequiredFields('skill_category', fields.skill_category);

    if (!error) {
      //EXECUTE IF SCHOOL NAME IF FILLED

      const newFieldsArr = [...fieldsArr];
      newFieldsArr[index] = fields;
      setFieldsArr(newFieldsArr); //SET THE SKILL BJECT TO THE ARRAY OF SKILLS
      setEdit(false); //CLOSE ADD BOX DIALOG
      props.addSkills(newFieldsArr); //ADD ARRAY OF SKILLS TO THE PARENT ELEMNT
    }
  };

  const deleteField = (event, id) => {
    event.preventDefault();
    const newFieldsArr = fieldsArr.filter((item) => item.id !== id); //FILTER WITHOUT THE REMOVED ELEMENT
    setFieldsArr(newFieldsArr);
    props.addSkills(newFieldsArr);
    setEdit(false); //CLOSE EDIT BOX DIALOG
  };

  return (
    <>
      <div className="section-presentation row">
        <div className="education toogle-header" onClick={handleOpenSummary}>
          <h1 className="title">
            <FontAwesomeIcon icon={faHeadSideVirus} />
            <span>Skills</span>
          </h1>
          <FontAwesomeIcon icon={faAngleDown} className="right-icon" />
        </div>

        {showSummany && (
          <div className="toogle-section">
            {fieldsArr.map((skill, index) => (
              <div className="item" key={index}>
                <p className="title"> {skill.skill_category}</p>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => handleEdit(skill.id)} />
              </div>
            ))}

            <div className="item buttons">
              <div className="button-section" onClick={toggleAdd}>
                <FontAwesomeIcon icon={faPlus} />
                <input type="submit" className="add" value="Skill" />
              </div>
            </div>
          </div>
        )}
      </div>

      {addBox && (
        <div className="project-details-section row details">
          <h1>Edit Skills</h1>
          <AddForm
            changeFormFields={changeFormFields}
            required={required}
            handleAdd={handleAdd}
            technologies={technologies}
            toggleAdd={toggleAdd}
            save={save}
            fields={fields}
          />
        </div>
      )}

      {editBox && (
        <div className="project-details-section row details">
          <h1>Edit Skills</h1>
          <UpdateForm
            changeFormFields={changeFormFields}
            toggleEdit={toggleEdit}
            update={update}
            removeField={removeField}
            required={required}
            technologies={technologies}
            fields={fields}
            delete={deleteField}
          />
        </div>
      )}
    </>
  );
}

export default Skills;
