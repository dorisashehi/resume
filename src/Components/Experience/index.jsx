import { useState } from 'react';
import './index.scss';
import { v4 as uuidv4 } from 'uuid';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function Experience (props) {

    const [ addBox, setOpen ] = useState(false); //STATE FOR ADD EXPERIENCE BOX

    const [ exp_id, setExpID ] = useState(); //ID FOR A NEW EXPERIENCE

    const toggleDetails = (event) => { //OPEN CLOSE DETAILS
        event.preventDefault();
        setExpID(uuidv4()); //GENERATE A RANDOM ID WHEN EXP BOX OPEN
        setOpen(!addBox) //SET VALUE TO OPPOSITE
    }

    const [ experiences, setExperiences] = useState([]) //ARRAY OF EXPERIENCES ADDED

    const [ experienceObj, setExperienceObj] = useState({}) //AN OBJ TO SAVE THE EXPERIENCE ADDING TO ADD EXP BOX

    const changeExperience = (input, value) => {

        setExperienceObj({  //SET INPUT FIELD VALUE TO THE EXPERIENCE OBJECT
            ...experienceObj,
            exp_id: exp_id,
            [input]:value
        })
    }

    const handleSave = ( event ) => {

        event.preventDefault();
        const newExperiences = [...experiences, experienceObj];
        setExperiences(newExperiences) //SET THE EXPERIENCE BJECT TO THE ARRAY OF EXPERIENCES
        props.addExperiences(newExperiences) //ADD ARRAY OF EXPERIENCES TO THE PARENT ELEMNT
        setOpen(false) //CLOSE ADD BOX DIALOG

    }

    const handleEdit = (exp_id) => {

        console.log(exp_id);

    }

    return(

        <>
            <div className="experience-section row">
                <div className="experience">
                    <h1 className="title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        Proffesional Experience
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
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
                        <div className='button-section'  onClick = {toggleDetails}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            <input type="submit" className="add" value='Exerience' />

                        </div>

                    </div>

                </div>
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
                                            <h2>Responsibilities</h2>
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data="<p>Hello from CKEditor 5!</p>"
                                                onChange={ ( event, editor ) => {
                                                    const data = editor.getData();
                                                    console.log( { data } );
                                                } }

                                            />
                                    </div>
                                </div>
                            </div>

                            <div className="button-section">
                                <input type="submit" className="btn close" onClick={(event) => toggleDetails(event)} value='Close' />
                                <input type="submit" className="btn save" onClick={(event) => handleSave(event)} value='Save' />

                            </div>
                        </form>
                    </div>
                </div>
            }

            {/* <div className="experience-details-section row details">
                <h1>
                    Edit Proffesional Experience
                </h1>
                <div className="sub-section">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exp-job">Job Title</label>
                            <input type="text" className="form-input" name="exp-job" id="exp-job" placeholder="Enter Job Title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exp-technology">Technology</label>
                            <input type="text" className="form-input" name="exp-technology" id="exp-technology" placeholder="Enter Technology"/>
                        </div>

                        <div className="row-group">
                            <div className="form-group">
                                <label htmlFor="exp-city">City</label>
                                <input type="text" className="form-input" name="exp-city" id="exp-city" placeholder="Enter City"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exp-country">Country</label>
                                <input type="text" className="form-input" name="exp-country" id="exp-country" placeholder="Enter Country"/>
                            </div>
                        </div>

                        <div className="row-group">
                            <div className="form-group">
                                <label htmlFor="exp-start-date">Start Date</label>
                                <input type="date" className="form-input" name="exp-start-date" id="exp-start-date" placeholder="Enter Start Date"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exp-end-date">End Date</label>
                                <input type="date" className="form-input" name="exp-end-date" id="exp-end-date" placeholder="Enter End Date"/>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="sub-section">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exp-job">Job Title</label>
                            <input type="text" className="form-input" name="exp-job" id="exp-job" placeholder="Enter Job Title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exp-technology">Technology</label>
                            <input type="text" className="form-input" name="exp-technology" id="exp-technology" placeholder="Enter Technology"/>
                        </div>

                        <div className="row-group">
                            <div className="form-group">
                                <label htmlFor="exp-city">City</label>
                                <input type="text" className="form-input" name="exp-city" id="exp-city" placeholder="Enter City"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exp-country">Country</label>
                                <input type="text" className="form-input" name="exp-country" id="exp-country" placeholder="Enter Country"/>
                            </div>
                        </div>

                        <div className="row-group">
                            <div className="form-group">
                                <label htmlFor="exp-start-date">Start Date</label>
                                <input type="date" className="form-input" name="exp-start-date" id="exp-start-date" placeholder="Enter Start Date"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exp-end-date">End Date</label>
                                <input type="date" className="form-input" name="exp-end-date" id="exp-end-date" placeholder="Enter End Date"/>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="button-section">
                    <button className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                        <span>Add New</span>
                    </button>
                </div>
            </div> */}

        </>

    )
}

export default Experience