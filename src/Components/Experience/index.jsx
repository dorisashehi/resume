import { useState } from 'react';
import './index.scss';
import { v4 as uuidv4 } from 'uuid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function Experience (props) {

    const [ addBox, setOpen ] = useState(false); //STATE FOR ADD EXPERIENCE BOX
    const [ showSummany, setExpSummary ] = useState(false); //STATE FOR ADD EXPERIENCE BOX
    const [ editBox, setEdit ] = useState(false);
    const [required, setRequired]  = useState(false); //REQUIRED FIELD

    const [ exp_id, setExpID ] = useState(); //ID FOR A NEW EXPERIENCE

    const [ experiences, setExperiences] = useState([]) //ARRAY OF EXPERIENCES ADDED

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

    const [ experienceObj, setExperienceObj] = useState({}) //AN OBJ TO SAVE THE EXPERIENCE ADDING TO ADD EXP BOX


    const toggleAdd = (event) => { //OPEN CLOSE DETAILS

        event.preventDefault();

        setExpID(uuidv4()); //GENERATE A RANDOM ID WHEN EXP BOX OPEN
        setExperienceObj({}); //EMPTY PREVIOUS EXPERIONCE OBJECT
        setEdit(false)
        setOpen(!addBox) //OPEN/CLOSE ADD BOX

    }

    const changeExperience = (input, value) => {

        setExperienceObj({  //SET INPUT FIELD VALUE TO THE EXPERIENCE OBJECT
            ...experienceObj,
            exp_id: exp_id,
            [input]:value
        })
    }

    const validateRequiredFields = (experienceObj) =>{ //CHECK IS REQ FIELD IS FILLED

        if (!experienceObj.exp_company){
            setRequired(true); //REQUIRED FIELD IS NOT FILLED
            return true
        }

        setRequired(false); //REQUIRED FIELD IS FILLED
        return false

    }

    const save = ( event ) => {

        event.preventDefault();

        const error = validateRequiredFields(experienceObj);

        if(!error){ //EXECUTE IF COMPANY NAME IF FILLED

            const newExperiences = [...experiences, experienceObj];
            setExperiences(newExperiences) //SET THE EXPERIENCE BJECT TO THE ARRAY OF EXPERIENCES
            props.addExperiences(newExperiences) //ADD ARRAY OF EXPERIENCES TO THE PARENT ELEMNT
            setOpen(false) //CLOSE ADD BOX DIALOG

        }

    }

    const handleOpenSummary = () => { //OPEN CLOSE EXPERIENCE SUMMARY
        setExpSummary(!showSummany)
    }

    const toggleEdit = (event) => { //OPEN CLOSE EDIT BOX

        event.preventDefault();
        setEdit(!editBox) //OPEN/CLOSE EDIT BOX

    }


    const handleEdit = (id) => { //EDIT EXPERIEMCE ACTION

        const experience = experiences.find((item) => (item.exp_id === id)) //FIND EDITED EXPERINCE IN EXPERIENCES ARRAY

        setExpID(id);
        setOpen(false) //CLOSE ADD BOX IF OPENED
        setExperienceObj(experience); //PASS EXPERIENCE EDITED DATA
        setEdit(true); //OPEN EDIT BOX
    }

    const update = (event, id) => {

        event.preventDefault();
        const expIdx = experiences.findIndex((item) => ( item.exp_id === id)); //FIND INDEX OF EXPERIENCE IN ARR EXPERIENCES

        const error = validateRequiredFields(experienceObj); //CHECK ID COMPANY NAME EMPTY



        if(!error){

            const updatedExperiences = [...experiences];
            updatedExperiences[expIdx] = experienceObj; //PUT UPDATED EXPERIENCE AT INDEX
            console.log(updatedExperiences[expIdx]);
            setExperiences(updatedExperiences) //SET THE EXPERIENCE BJECT TO THE ARRAY OF EXPERIENCES
            props.addExperiences(updatedExperiences) //ADD ARRAY OF EXPERIENCES TO THE PARENT ELEMNT
            setEdit(false) //CLOSE EDIT BOX DIALOG

        }
    }


    return(

        <>
            <div className="experience-section row">
                <div className="experience">
                    <h1 className="title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        Proffesional Experience
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick = { handleOpenSummary } width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
                    {
                        ( showSummany ) &&
                        <div className="experience-list">

                            {
                                experiences.map((experience, index) => (
                                    <div className="item" key={index}>
                                        <p className="title">{ experience.exp_company }</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleEdit(experience.exp_id) } width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                    </div>

                                ))
                            }

                            <div className="item buttons">
                                <div className='button-section'  onClick = {toggleAdd}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
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
                                <input type="text" onChange = {(event) => changeExperience(event.target.id, event.target.value)} className="form-input" name="exp_company" id="exp_company" placeholder="Enter Company Title"/>
                                {
                                    (required) && <span className='error'>That is a required field</span>
                                }

                            </div>
                            <div className="form-group">
                                <label htmlFor="exp_job">Job Title</label>
                                <input type="text" onChange = {(event) => changeExperience(event.target.id, event.target.value)} className="form-input" name="exp_job" id="exp_job" placeholder="Enter Job Title"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exp_technology">Technology</label>
                                <input type="text" className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_technology" id="exp_technology" placeholder="Enter Technology"/>
                            </div>

                            <div className="row-group">
                                <div className="form-group">
                                    <label htmlFor="exp_city">City</label>
                                    <input type="text" className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_city" id="exp_city" placeholder="Enter City"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exp_country">Country</label>
                                    <input type="text" className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_country" id="exp_country" placeholder="Enter Country"/>
                                </div>
                            </div>

                            <div className="row-group">
                                <div className="form-group">
                                    <label htmlFor="exp_start_date">Start Date</label>
                                    <input type="date" className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_start_date" id="exp_start_date" placeholder="Enter Start Date"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exp_end_date">End Date</label>
                                    <input type="date" className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_end_date" id="exp_end_date" placeholder="Enter End Date"/>
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
                                                onChange= {(event, editor) => changeExperience('exp_responsibilities', editor.getData())}
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
                                    <input type="text" value = { experienceObj?.exp_company } onChange = {(event) => changeExperience(event.target.id, event.target.value)} className="form-input" name="exp_company" id="exp_company" placeholder="Enter Company Title"/>
                                    {
                                        (required) && <span className='error'>That is a required field</span>
                                    }

                                </div>
                                <div className="form-group">
                                    <label htmlFor="exp_job">Job Title</label>
                                    <input type="text" value = { experienceObj?.exp_job || '' } onChange = {(event) => changeExperience(event.target.id, event.target.value)} className="form-input" name="exp_job" id="exp_job" placeholder="Enter Job Title"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exp_technology">Technology</label>
                                    <input type="text"  value = { experienceObj?.exp_technology || '' } className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_technology" id="exp_technology" placeholder="Enter Technology"/>
                                </div>

                                <div className="row-group">
                                    <div className="form-group">
                                        <label htmlFor="exp_city">City</label>
                                        <input type="text" value = { experienceObj?.exp_city  || ''} className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_city" id="exp_city" placeholder="Enter City"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exp_country">Country</label>
                                        <input type="text" value = { experienceObj?.exp_country || '' } className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_country" id="exp_country" placeholder="Enter Country"/>
                                    </div>
                                </div>

                                <div className="row-group">
                                    <div className="form-group">
                                        <label htmlFor="exp_start_date">Start Date</label>
                                        <input type="date" value = { experienceObj?.exp_start_date || '' } className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_start_date" id="exp_start_date" placeholder="Enter Start Date"/>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="exp_end_date">End Date</label>
                                        <input type="date" value = { experienceObj?.exp_end_date || '' } className="form-input" onChange = {(event) => changeExperience(event.target.id, event.target.value)} name="exp_end_date" id="exp_end_date" placeholder="Enter End Date"/>
                                    </div>
                                </div>

                                <div className="row-group">
                                    <div className="form-group">

                                        <div className="App">
                                                <label htmlFor="exp_responsibilities">Responsibilities</label>
                                                <CKEditor
                                                    editor={ ClassicEditor }
                                                    data={ experienceObj.exp_responsibilities }
                                                    id="exp_responsibilities"
                                                    onChange= {(event, editor) => changeExperience('exp_responsibilities', editor.getData())}
                                                />
                                        </div>
                                    </div>
                                </div>

                                <div className="button-section">
                                    <input type="submit" className="btn close" onClick={(event) => toggleEdit(event)} value='Close' />
                                    <input type="submit" className="btn save" onClick={(event) => update(event, experienceObj.exp_id)} value='Update' />

                                </div>
                            </form>
                        </div>
                    </div>
            }

        </>

    )
}

export default Experience