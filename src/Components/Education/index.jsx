import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faPenToSquare, faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons'

function Education (props) {

    const [ addBox, setOpen ] = useState(false);
    const [ editBox, setEdit ] = useState(false);
    const [ showSummany, setSummary ] = useState(false); //STATE FOR ADD EDUCATION BOX
    const [ id, setID ] = useState(); //ID FOR A NEW EDUCATION
    const [required, setRequired]  = useState(false); //REQUIRED FIELD


    const handleOpenSummary = () => { //OPEN CLOSE EDIT
        setSummary(!showSummany)
    }

    const [ fields, setFieldsObj] = useState({}) //AN OBJ TO SAVE THE EDUCATION ADDING TO ADD EXP BOX
    const [ fieldsArr, setFieldsArr] = useState([]) //ARRAY OF EDUCATIONS ADDED

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


    const toggleAdd = (event) => { //OPEN CLOSE DETAILS

        event.preventDefault();

        setID(uuidv4()); //GENERATE A RANDOM ID WHEN EXP BOX OPEN
        setFieldsObj({}); //EMPTY PREVIOUS EDUCATION OBJECT
        setEdit(false)
        setOpen(!addBox) //OPEN/CLOSE ADD BOX
    }

    const changeFormFields = (input, value) => {

        setFieldsObj({  //SET INPUT FIELD VALUE TO THE EDUCATION OBJECT
            ...fields,
            id: id,
            [input]:value
        })
    }


    const validateRequiredFields = (fields) =>{ //CHECK IS REQ FIELD IS FILLED

        if (!fields.school){
            setRequired(true); //REQUIRED FIELD IS NOT FILLED
            return true
        }

        setRequired(false); //REQUIRED FIELD IS FILLED
        return false

    }

    const save = ( event ) => {

        event.preventDefault();

        const error = validateRequiredFields(fields);

        if(!error){ //EXECUTE IF SCHOOL NAME IF FILLED

            const newFieldsArr = [...fieldsArr, fields];
            setFieldsArr(newFieldsArr) //SET THE EDUCATION BJECT TO THE ARRAY OF EXPERIENCES
            setOpen(false) //CLOSE ADD BOX DIALOG
            props.addEducation(newFieldsArr) //ADD ARRAY OF EDUCATIONS TO THE PARENT ELEMNT
        }

    }


    const handleEdit = (id) => { //EDIT EXPERIEMCE ACTION

        const data = fieldsArr.find((item) => (item.id === id)) //FIND EDITED EDUCATION IN EXPERIENCES ARRAY

        setID(id);
        setOpen(false) //CLOSE ADD BOX IF OPENED
        setFieldsObj(data); //PASS EXPERIENCE EDITED DATA
        setEdit(true); //OPEN EDIT BOX
    }


    const toggleEdit = (event) => { //OPEN CLOSE EDIT BOX

        event.preventDefault();
        setEdit(!editBox) //OPEN/CLOSE EDIT BOX

    }

    const update = (event, id) => {

        event.preventDefault();
        const index = fieldsArr.findIndex((item) => ( item.id === id)); //FIND INDEX OF EDUCATION IN ARR OF EDUCATIONS

        const error = validateRequiredFields(fields); //CHECK IF SCHOOL NAME IS EMPTY

        if(!error){

            const updatedFieldsArr= [...fieldsArr];
            updatedFieldsArr[index] = fields; //PUT UPDATED EDUCATION AT INDEX
            console.log(updatedFieldsArr[index]);
            setFieldsArr(updatedFieldsArr) //SET THE EDUCATION BJECT TO THE ARRAY OF EDUCATIONS
            props.addEducation(updatedFieldsArr) //ADD ARRAY OF EDUCATIONS TO THE PARENT ELEMNT
            setEdit(false) //CLOSE EDIT BOX DIALOG

        }
    }

    return(

        <>

            <div className="section-presentation row">
                <div className="education toogle-header" onClick = { handleOpenSummary }>
                    <h1 className="title">
                        <FontAwesomeIcon icon={ faGraduationCap }/>
                        <span>Education</span>
                    </h1>
                    <FontAwesomeIcon icon={ faAngleDown } className="right-icon"/>
                </div>

                {
                    (showSummany) &&

                    <div className="toogle-section">

                        {
                            fieldsArr.map((education, index) => (
                                <div className="item" key={index}>
                                    <p className="title">{ education.school }</p>
                                    <FontAwesomeIcon icon={ faPenToSquare } onClick={() => handleEdit(education.id)} />
                                </div>

                            ))
                        }

                        <div className="item buttons">
                            <div className='button-section' onClick = {toggleAdd} >
                                <FontAwesomeIcon icon={ faPlus }/>
                                <input type="submit" className="add" value='Education' />

                            </div>
                        </div>
                    </div>
                }
            </div>


            {
                (addBox) &&

                <div className="education-details-section row details">
                    <h1>
                        Add Education
                    </h1>
                    <div className="sub-section">
                        <form>

                            <div className="form-group">
                                <label htmlFor="school">School</label>
                                <input type="text" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="school" id="school" placeholder="Enter Schools"/>

                                {
                                    (required) && <span className='error'>That is a required field</span>
                                }
                            </div>

                            <div className="form-group">
                                <label htmlFor="degree">Degree</label>
                                <input type="text" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="degree" id="degree" placeholder="Enter Degree"/>
                            </div>

                            <div className="row-group">
                                <div className="form-group">
                                    <label htmlFor="exp-city">City</label>
                                    <input type="text" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="edu_city" id="edu_city" placeholder="Enter City"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exp-country">Country</label>
                                    <input type="text" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="edu_country" id="edu_country" placeholder="Enter Country"/>
                                </div>
                            </div>

                            <div className="row-group">
                                <div className="form-group">
                                    <label htmlFor="schl-start-date">Start Date</label>
                                    <input type="date" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="schl_start_date" id="schl_start_date" placeholder="Enter Start Date"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="schl-end-date">End Date</label>
                                    <input type="date" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="schl_end_date" id="schl_end_date" placeholder="Enter End Date"/>
                                </div>
                            </div>

                            <div className="button-section">
                                <input type="submit" className="btn close" onClick={(event) => toggleAdd(event)}  value='Close' />
                                <input type="submit" className="btn save" onClick={(event) => save(event)} value='Save' />

                            </div>

                        </form>
                    </div>
                </div>
            }

            {
                ( editBox ) &&
                    <div className="experience-details-section row details">
                        <h1>
                            Edit Education
                        </h1>
                        <div className="sub-section">
                            <form>

                                <div className="form-group">
                                    <label htmlFor="school">School</label>
                                    <input type="text" value = { fields?.school }  onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="school" id="school" placeholder="Enter Schools"/>

                                    {
                                        (required) && <span className='error'>That is a required field</span>
                                    }
                                </div>

                                <div className="form-group">
                                    <label htmlFor="degree">Degree</label>
                                    <input type="text" value = { fields?.degree || '' }  onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="degree" id="degree" placeholder="Enter Degree"/>
                                </div>

                                <div className="row-group">
                                    <div className="form-group">
                                        <label htmlFor="exp-city">City</label>
                                        <input type="text" value = { fields?.edu_city || '' }  onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="edu_city" id="edu_city" placeholder="Enter City"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exp-country">Country</label>
                                        <input type="text" value = { fields?.edu_country || '' }  onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="edu_country" id="edu_country" placeholder="Enter Country"/>
                                    </div>
                                </div>

                                <div className="row-group">
                                    <div className="form-group">
                                        <label htmlFor="schl-start-date">Start Date</label>
                                        <input type="date" value = { fields?.schl_start_date || '' }  onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="schl_start_date" id="schl_start_date" placeholder="Enter Start Date"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="schl-end-date">End Date</label>
                                        <input type="date" value = { fields?.schl_end_date || '' }  onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="schl_end_date" id="schl_end_date" placeholder="Enter End Date"/>
                                    </div>
                                </div>

                                <div className="button-section">
                                    <input type="submit" className="btn close" onClick={(event) => toggleEdit(event)} value='Close' />
                                    <input type="submit" className="btn save" onClick={(event) => update(event, fields.id)} value='Update' />

                                </div>

                            </form>
                        </div>
                    </div>
            }

        </>

    )

}

export default Education