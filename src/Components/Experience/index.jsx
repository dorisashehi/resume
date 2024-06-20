import { useState } from 'react';
import './index.scss';
import { v4 as uuidv4 } from 'uuid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faPlus, faPenToSquare, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Experience (props) {

    const [ addBox, setOpen ] = useState(false); //STATE FOR ADD EXPERIENCE BOX
    const [ showSummany, setSummary ] = useState(false); //STATE FOR ADD EXPERIENCE BOX
    const [ editBox, setEdit ] = useState(false);
    const [required, setRequired]  = useState(false); //REQUIRED FIELD

    const [ id, setID ] = useState(); //ID FOR A NEW EXPERIENCE

    const [ fieldsArr, setFieldsArr] = useState([]) //ARRAY OF EXPERIENCES ADDED

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

    const [ fields, setFieldsObj] = useState({}) //AN OBJ TO SAVE THE EXPERIENCE ADDING TO ADD EXP BOX


    const toggleAdd = (event) => { //OPEN CLOSE DETAILS

        event.preventDefault();

        setID(uuidv4()); //GENERATE A RANDOM ID WHEN EXP BOX OPEN
        setFieldsObj({}); //EMPTY PREVIOUS EXPERIONCE OBJECT
        setEdit(false)
        setOpen(!addBox) //OPEN/CLOSE ADD BOX

    }

    const changeFormFields = (input, value) => {

        setFieldsObj({  //SET INPUT FIELD VALUE TO THE EXPERIENCE OBJECT
            ...fields,
            id: id,
            [input]:value
        })
    }

    const validateRequiredFields = (fields) =>{ //CHECK IS REQ FIELD IS FILLED

        if (!fields.exp_company){
            setRequired(true); //REQUIRED FIELD IS NOT FILLED
            return true
        }

        setRequired(false); //REQUIRED FIELD IS FILLED
        return false

    }

    const save = ( event ) => {

        event.preventDefault();

        const error = validateRequiredFields(fields);

        if(!error){ //EXECUTE IF COMPANY NAME IF FILLED

            const newFieldsArr = [...fieldsArr, fields];
            setFieldsArr(newFieldsArr) //SET THE EXPERIENCE BJECT TO THE ARRAY OF EXPERIENCES
            props.addExperiences(newFieldsArr) //ADD ARRAY OF EXPERIENCES TO THE PARENT ELEMNT
            setOpen(false) //CLOSE ADD BOX DIALOG

        }

    }

    const handleOpenSummary = () => { //OPEN CLOSE EXPERIENCE SUMMARY
        setSummary(!showSummany)
    }

    const toggleEdit = (event) => { //OPEN CLOSE EDIT BOX

        event.preventDefault();
        setEdit(!editBox) //OPEN/CLOSE EDIT BOX

    }


    const handleEdit = (id) => { //EDIT EXPERIEMCE ACTION

        const data = fieldsArr.find((item) => (item.id === id)) //FIND EDITED EXPERINCE IN EXPERIENCES ARRAY

        setID(id);
        setOpen(false) //CLOSE ADD BOX IF OPENED
        setFieldsObj(data); //PASS EXPERIENCE EDITED DATA
        setEdit(true); //OPEN EDIT BOX
    }

    const update = (event, id) => {

        event.preventDefault();
        const index = fieldsArr.findIndex((item) => ( item.id === id)); //FIND INDEX OF EXPERIENCE IN ARR EXPERIENCES

        const error = validateRequiredFields(fields); //CHECK ID COMPANY NAME EMPTY



        if(!error){

            const updatedExperiences = [...fieldsArr];
            updatedExperiences[expIdx] = fields; //PUT UPDATED EXPERIENCE AT INDEX
            setFieldsArr(updatedExperiences) //SET THE EXPERIENCE BJECT TO THE ARRAY OF EXPERIENCES
            props.addExperiences(updatedExperiences) //ADD ARRAY OF EXPERIENCES TO THE PARENT ELEMNT
            setEdit(false) //CLOSE EDIT BOX DIALOG

        }
    }


    return(

        <>
            <div className="section-presentation row">
                <div className="experience toogle-header">
                    <h1 className="title">
                        <FontAwesomeIcon icon={ faBriefcase } />

                        Professional Experience
                    </h1>
                    <FontAwesomeIcon icon={ faAngleDown }  onClick = { handleOpenSummary }/>
                </div>
                    {
                        ( showSummany ) &&
                        <div className="toogle-section">

                            {
                                fieldsArr.map((experience, index) => (
                                    <div className="item" key={index}>
                                        <p className="title">{ experience.exp_company }</p>
                                        <FontAwesomeIcon icon={ faPenToSquare }/>

                                    </div>

                                ))
                            }

                            <div className="item buttons">
                                <div className='button-section'  onClick = {toggleAdd}>
                                    <FontAwesomeIcon icon={ faPlus }/>
                                    <input type="submit" className="add" value='Exerience' />

                                </div>

                            </div>

                        </div>
                    }

            </div>
            {
                (addBox) &&

                <div className="experience-details-section row details">
                    <h1>
                        Add Experience
                    </h1>
                    <div className="sub-section">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exp_company">Company</label>
                                <input type="text" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="exp_company" id="exp_company" placeholder="Enter Company Title"/>
                                {
                                    (required) && <span className='error'>That is a required field</span>
                                }

                            </div>
                            <div className="form-group">
                                <label htmlFor="exp_job">Job Title</label>
                                <input type="text" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="exp_job" id="exp_job" placeholder="Enter Job Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exp_technology">Technology</label>
                                <input type="text" className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_technology" id="exp_technology" placeholder="Enter Technology"/>
                            </div>

                            <div className="row-group">
                                <div className="form-group">
                                    <label htmlFor="exp_city">City</label>
                                    <input type="text" className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_city" id="exp_city" placeholder="Enter City"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exp_country">Country</label>
                                    <input type="text" className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_country" id="exp_country" placeholder="Enter Country"/>
                                </div>
                            </div>

                            <div className="row-group">
                                <div className="form-group">
                                    <label htmlFor="exp_start_date">Start Date</label>
                                    <input type="date" className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_start_date" id="exp_start_date" placeholder="Enter Start Date"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exp_end_date">End Date</label>
                                    <input type="date" className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_end_date" id="exp_end_date" placeholder="Enter End Date"/>
                                </div>
                            </div>

                            <div className="row-group">
                                <div className="form-group">

                                    <div className="App">
                                            <label htmlFor="exp_responsibilities">Responsibilities</label>
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data=""
                                                id="exp_responsibilities"
                                                onChange= {(event, editor) => changeFormFields('exp_responsibilities', editor.getData())}
                                            />
                                    </div>
                                </div>
                            </div>

                            <div className="button-section">
                                <input type="submit" className="btn close" onClick={(event) => toggleAdd(event)} value='Close' />
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
                            Edit Proffesional Experience
                        </h1>
                        <div className="sub-section">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exp_company">Company</label>
                                    <input type="text" value = { fields?.exp_company } onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="exp_company" id="exp_company" placeholder="Enter Company Title"/>
                                    {
                                        (required) && <span className='error'>That is a required field</span>
                                    }

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exp_job">Job Title</label>
                                    <input type="text" value = { fields?.exp_job || '' } onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="exp_job" id="exp_job" placeholder="Enter Job Title"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exp_technology">Technology</label>
                                    <input type="text"  value = { fields?.exp_technology || '' } className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_technology" id="exp_technology" placeholder="Enter Technology"/>
                                </div>

                                <div className="row-group">
                                    <div className="form-group">
                                        <label htmlFor="exp_city">City</label>
                                        <input type="text" value = { fields?.exp_city  || ''} className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_city" id="exp_city" placeholder="Enter City"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exp_country">Country</label>
                                        <input type="text" value = { fields?.exp_country || '' } className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_country" id="exp_country" placeholder="Enter Country"/>
                                    </div>
                                </div>

                                <div className="row-group">
                                    <div className="form-group">
                                        <label htmlFor="exp_start_date">Start Date</label>
                                        <input type="date" value = { fields?.exp_start_date || '' } className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_start_date" id="exp_start_date" placeholder="Enter Start Date"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exp_end_date">End Date</label>
                                        <input type="date" value = { fields?.exp_end_date || '' } className="form-input" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} name="exp_end_date" id="exp_end_date" placeholder="Enter End Date"/>
                                    </div>
                                </div>

                                <div className="row-group">
                                    <div className="form-group">

                                        <div className="App">
                                                <label htmlFor="exp_responsibilities">Responsibilities</label>
                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    data={ fields.exp_responsibilities }
                                                    id="exp_responsibilities"
                                                    onChange= {(event, editor) => changeFormFields('exp_responsibilities', editor.getData())}
                                                />
                                        </div>
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

export default Experience