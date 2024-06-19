import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './index.scss';

function Skills(props) {

    const [ addBox, setOpen ] = useState(false);
    const [ editBox, setEdit ] = useState(false);
    const [ showSummany, setSummary ] = useState(false); //STATE FOR ADD EDUCATION BOX
    const [ id, setID ] = useState(); //ID FOR A NEW EDUCATION

    const [required, setRequired]  = useState({

        skill_category: false,
        technology: false

    }); //REQUIRED FIELD

    const [ technologies, setTechnologies] = useState([]);


    const handleOpenSummary = () => { //OPEN CLOSE EDIT
        setSummary(!showSummany)
    }

    const [ fields, setFieldsObj] = useState({

        skill_category: '',
        skill_title: '',
        technologies: []

    }) //AN OBJ TO SAVE THE EDUCATION ADDING TO ADD EXP BOX

    const [ fieldsArr, setFieldsArr] = useState([]) //ARRAY OF EDUCATIONS ADDED

    /**
     *  {
            skill_category: '',
            skill_title: '',
            technologies: []
        }
     */


    const toggleAdd = (event) => { //OPEN CLOSE DETAILS

        event.preventDefault();

        setID(uuidv4()); //GENERATE A RANDOM ID WHEN EXP BOX OPEN
        setFieldsObj({}); //EMPTY PREVIOUS EDUCATION OBJECT
        setEdit(false)
        setTechnologies([]);//EMPTY THE TECHNOLOGIES ARRAY
        setOpen(!addBox) //OPEN/CLOSE ADD BOX
    }

    const changeFormFields = (input, value) => {

        setFieldsObj({  //SET INPUT FIELD VALUE TO THE EDUCATION OBJECT
            ...fields,
            id: id,
            [input]:value,
            technologies: [...technologies]
        })
    }


    const validateRequiredFields = (field, value) =>{ //CHECK IS REQ FIELD IS FILLED

        if (!value){
            setRequired({...required, [field]: true}); //REQUIRED FIELD IS NOT FILLED
            return true
        }

        setRequired(false); //REQUIRED FIELD IS FILLED
        return false

    }

    const save = ( event ) => {

        event.preventDefault();

        const error = validateRequiredFields('skill_category',fields.skill_category);

        if(!error){ //EXECUTE IF SCHOOL NAME IF FILLED

            const newFieldsArr = [...fieldsArr, fields];
            setFieldsArr(newFieldsArr) //SET THE EDUCATION BJECT TO THE ARRAY OF EXPERIENCES
            setOpen(false) //CLOSE ADD BOX DIALOG
            console.log(newFieldsArr);
            props.addSkills(newFieldsArr) //ADD ARRAY OF EDUCATIONS TO THE PARENT ELEMNT
        }

    }

    const handleAdd = (event, tech) => { //ADD SKILL BUTTON LISTENER
        event.preventDefault();

        const error = validateRequiredFields('technology',tech); //TECH FIELD SHOULDN'T BE EMPTY

        if(!error) {

            setTechnologies([...technologies, tech]); //ADD TECH TO ARRAY
            setFieldsObj({...fields, technologies: [...technologies, tech]}); //ADD TECHNOLOGIE TO TECH ARRAY

        }

    }

    const removeField = (index) => { //REMOVE FORM FIELDS FOR LINKS ON CLICK REMOVE ICON

        const newTechnologies = technologies.splice(index, 1); //REMOVE FROM TECH ARRAY TECHNOLOGIE REMOVED
        setTechnologies(newTechnologies) //UPDATE THE TECH ARRAY
        setFieldsObj({...fields, technologies: newTechnologies }); //ADD UPDATED TECH ARRAY TO FIELDS OBJ

    }

    const toggleEdit = (event) => { //OPEN CLOSE EDIT BOX

        event.preventDefault();
        setEdit(!editBox) //OPEN/CLOSE EDIT BOX

    }

    const handleEdit = (id) => { //EDIT EXPERIEMCE ACTION

        const data = fieldsArr.find((item) => (item.id === id)) //FIND EDITED EDUCATION IN EXPERIENCES ARRAY

        setID(id);
        setOpen(false) //CLOSE ADD BOX IF OPENED

        setFieldsObj(data); //PASS EXPERIENCE EDITED DATA
        setTechnologies(data.technologies); //PASS EXPERIENCE EDITED DATA
        setEdit(true); //OPEN EDIT BOX
    }

    const update = (event, id) => {

        event.preventDefault();

        const index = fieldsArr.findIndex((item) => ( item.id === id)); //FIND INDEX OF EDUCATION IN ARR OF EDUCATIONS

        const error = validateRequiredFields('skill_category',fields.skill_category);

        if(!error){ //EXECUTE IF SCHOOL NAME IF FILLED

            const newFieldsArr = [...fieldsArr];
            newFieldsArr[index] = fields;
            setFieldsArr(newFieldsArr) //SET THE EDUCATION BJECT TO THE ARRAY OF EXPERIENCES
            setEdit(false) //CLOSE ADD BOX DIALOG
            //props.addSkills(newFieldsArr) //ADD ARRAY OF EDUCATIONS TO THE PARENT ELEMNT
            props.addSkills(newFieldsArr) //ADD ARRAY OF EDUCATIONS TO THE PARENT ELEMNT
        }

    }


    return(
        <>

            <div className="section-presentation row">
                <div className="education toogle-header">
                    <h1 className="title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                        Skills
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" onClick = { handleOpenSummary }  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>


                {
                    (showSummany) &&

                    <div className="toogle-section">

                        {
                            fieldsArr.map((skill, index) => (
                                <div className="item" key={index}>
                                    <p className="title"> { skill.skill_category }</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleEdit(skill.id) } width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                </div>
                            ))

                        }

                        <div className="item buttons">
                            <div className='button-section' onClick = {toggleAdd} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                <input type="submit" className="add" value='Skill' />

                            </div>
                        </div>
                    </div>
                }

            </div>



            {
                (addBox) &&
                <div className="project-details-section row details">
                    <h1>
                        Edit Skills
                    </h1>
                    <div className="sub-section">
                        <form>
                            <div className="form-group">
                                <label htmlFor="skill_category">Skill Category</label>
                                <input type="text" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="skill_category" id="skill_category" placeholder="Enter Skill Category"/>

                                {
                                    (required.skill_category) && <span className='error'>That is a required field</span>
                                }
                            </div>

                            <div className="row-group">
                                <div className="form-group">
                                    <label htmlFor="skill_title">Technology</label>
                                    <div className="field-btn">
                                        <input type="text" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="skill_title" id="skill_title" placeholder="Enter Technology"/>
                                        {
                                            (required.technology) && <span className='error'>Technology can't be empty</span>
                                        }
                                        <div className="button-section add" onClick = { (event) =>  handleAdd(event, fields.skill_title) }>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            <input type="submit" class="add" value="Add"/>

                                        </div>
                                    </div>
                                    <div className="links">
                                        {

                                            (technologies.length !== 0) &&
                                            technologies?.map((item, index) => (

                                                    <div className="link_name" key = {index}>
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" onClick={() => removeField(index) }  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> */}
                                                        { item.charAt(0).toUpperCase() +  item.slice(1) }
                                                    </div>
                                            ))
                                        }
                                    </div>
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
                (editBox) &&
                <div className="project-details-section row details">
                    <h1>
                        Edit Skills
                    </h1>
                    <div className="sub-section">
                        <form>
                            <div className="form-group">
                                <label htmlFor="skill_category">Skill Category</label>
                                <input type="text" value = { fields?.skill_category }  onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="skill_category" id="skill_category" placeholder="Enter Skill Category"/>

                                {
                                    (required.skill_category) && <span className='error'>That is a required field</span>
                                }
                            </div>

                            <div className="row-group">
                                <div className="form-group">
                                    <label htmlFor="skill_title">Technology</label>
                                    <div className="field-btn">
                                        <input type="text" onChange = {(event) => changeFormFields(event.target.id, event.target.value)} className="form-input" name="skill_title" id="skill_title" placeholder="Enter Technology"/>
                                        {
                                            (required.technology) && <span className='error'>Technology can't be empty</span>
                                        }
                                        <div className="button-section add" onClick = { (event) =>  handleAdd(event, fields.skill_title) }>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            <input type="submit" class="add" value="Add"/>

                                        </div>
                                    </div>
                                    <div className="links">
                                        {

                                            (technologies.length !== 0) &&
                                            technologies?.map((item, index) => (

                                                    <div className="link_name" key = {index}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => removeField(index) }  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                        { item.charAt(0).toUpperCase() +  item.slice(1) }
                                                    </div>
                                            ))
                                        }
                                    </div>
                                </div>

                            </div>

                            <div className="button-section">
                                <input type="submit" className="btn close"  onClick={(event) => toggleEdit(event)}  value='Close' />
                                <input type="submit" className="btn save" onClick={(event) => update(event, fields.id)} value='Update' />

                            </div>

                        </form>
                    </div>

                </div>
            }

        </>
    )
}

export default Skills