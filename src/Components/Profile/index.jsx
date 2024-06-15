import { useState } from "react"
import OtherLinks from '../OtherLinks'

function Profile () {

    const [edit, setEdit] = useState(false); //EDIT BUTTON STATE

    const openDetails = () => { //OPEN CLOSE DETAILS
        setEdit(!edit)
    }

    const [profile, setProfile] = useState({
        fullName: '',
        email: '',
        phone: '',
        location: '',
        others: {
            website: '',
            github: '',
            linkedin: ''
        }
    })


    const changeValue = (input, value) => { //CHANGE INPUT FIELDS VALUES

        setProfile((profile) => {
            if(input === 'website' || input === 'github' || input === 'linkedin'){ //IF OTHERS OBJECT IS MODIFIED
                return {
                    ...profile,
                    others: {
                        ...profile.others,
                        [input]: value
                    }
                }

            }else{ //ELSE MODIFIED DIRECTED FIELDS OF PROFILE

                return {
                    ...profile,
                    [input]: value
                }
            }
        })

    }

    //CODE TO OPEN AND CLOSE OTHER LINKS
    const [website, setOpenWeb] = useState(false);
    const [github, setOpenGit] = useState(false);
    const [linkedIn, setOpenLinkedin] = useState(false);

    const openWeb = () => { //TRIGGER OPEN WEBSITE INPUT FIELD
        setOpenWeb(!website);
    }

    const openGithub = () => { //TRIGGER OPEN GITHUB INPUT FIELD
        setOpenGit(!github);
    }

    const openLinkedIn = () => { //TRIGGER OPEN LINKDIN INPUT FIELD
        setOpenLinkedin(!linkedIn);
    }

    const removeField = (field) => { //REMOVE FORM FIELDS FOR LINKS ON CLICK REMOVE ICON
        if(field === "website") openWeb()
        if(field === "github") openGithub()
        if(field === "linkedin") openLinkedIn()
    }


    return(

        <>
            <div className="personal-section row">
                <div className="edit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" onClick = {openDetails} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>

                </div>
                <div className="name">Your name</div>
                <div className="position">
                    Position
                </div>
                <ul className="personal-info">
                    <li className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                        Email
                    </li>
                    <li className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        Phone
                    </li>
                    <li className="item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Address
                    </li>
                </ul>
            </div>

            {
                (edit) &&
                <div className="personal-details-section row details">
                    <h1>
                        Edit Personal Details
                    </h1>
                    <div className="sub-section">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text"
                                    className="form-input"
                                    name="name"
                                    id="fullName"
                                    value = {profile.fullName}
                                    onChange = {(event) => changeValue(event.target.id, event.target.value)}
                                    placeholder="Enter Your First and Last Name"
                                />
                            </div>


                            <div className="row-group">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email"
                                        className="form-input"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email"
                                        value = {profile.email}
                                        onChange = {(event) => changeValue(event.target.id, event.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text"
                                        className="form-input"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter Phone"
                                        value = {profile.phone}
                                        onChange = {(event) => changeValue(event.target.id, event.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Address</label>
                                <input type="text"
                                    className="form-input"
                                    name="location"
                                    id="location"
                                    placeholder="City, Country"
                                    value = {profile.location}
                                    onChange = {(event) => changeValue(event.target.id, event.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <h3>Others</h3>

                                {

                                    (website) && <OtherLinks name = "website"  text = "Website" removeField = {removeField} others = { profile.others } changeValue = { changeValue } />
                                }

                                {
                                    (github) && <OtherLinks name = "github" text = "GitHub" removeField = {removeField} others = { profile.others } changeValue = { changeValue }  />
                                }

                                {
                                    (linkedIn) && <OtherLinks name = "linkedin" text = "LinkedIn" removeField = {removeField} others = { profile.others } changeValue = { changeValue } />
                                }


                                <div className="links">
                                    {
                                        (!website) &&
                                        <div className="link_name" onClick = {openWeb}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            Website
                                        </div>
                                    }
                                    {
                                        (!github) &&
                                        <div className="link_name" onClick = {openGithub}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            Github
                                        </div>
                                    }

                                    {
                                        (!linkedIn) &&
                                        <div className="link_name" onClick = {openLinkedIn}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                            LinkedIn
                                        </div>
                                    }
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
                </div>
            }
        </>
    )
}

export default Profile