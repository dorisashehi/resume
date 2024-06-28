import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faPlus, faPenToSquare, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import AddForm from './add';
import UpdateForm from './update';
import useToggleSections from '../Elements/Hooks/toogleSections';
import useValidate from '../Elements/Hooks/validate';

function Experience(props) {
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

  const {
    addBox,
    setOpen,
    editBox,
    setEdit,
    showSummany,
    setSummary,
    id,
    setID,
    handleOpenSummary,
    toggleAdd,
    fields,
    setFieldsObj,
    setFieldsArr,
    fieldsArr,
  } = useToggleSections();

  const { validateRequiredFields, required } = useValidate();

  const changeFormFields = (input, value) => {
    setFieldsObj({
      //SET INPUT FIELD VALUE TO THE EXPERIENCE OBJECT
      ...fields,
      id: id,
      [input]: value,
    });
  };

  const save = (event) => {
    event.preventDefault();

    const error = validateRequiredFields(fields.exp_company);

    if (!error) {
      //EXECUTE IF COMPANY NAME IF FILLED

      const newFieldsArr = [...fieldsArr, fields];
      setFieldsArr(newFieldsArr); //SET THE EXPERIENCE BJECT TO THE ARRAY OF EXPERIENCES
      props.addExperiences(newFieldsArr); //ADD ARRAY OF EXPERIENCES TO THE PARENT ELEMNT
      setOpen(false); //CLOSE ADD BOX DIALOG
    }
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

    const error = validateRequiredFields(fields.exp_company); //CHECK ID COMPANY NAME EMPTY

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
