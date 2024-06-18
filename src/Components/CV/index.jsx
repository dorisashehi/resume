import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';
import DOMPurify from 'dompurify';


const CVPaper  = (props) => {

    const {fullName, email, phone, location, others } = props.resumeInfo.profile;
    const { summary, education, experience, projects, skills } = props.resumeInfo;

    return(
        <>
            <div className="col cv-column">

                <div className="cv-name-section row">
                    <h1 className="cv-name">{ fullName || 'FirstName LastName' }</h1>
                </div>
                <div className="cv-website-section">
                    <ul className='profile-links'>
                        <li className='item'>{ email || 'Email Address' }</li>
                        <li className='item'>{ phone || 'Phone Number' }</li>
                        <li className='item'>{ location || 'Location' }</li>

                        {Object.entries(others).map(([key, value]) => (
                            value !== '' && (
                                <React.Fragment key={key}>
                                    <li className="item">
                                        <a href={value}>{key}</a>
                                    </li>
                                </React.Fragment>
                            )

                        ))}

                    </ul>

                </div>

                <div className="cv-summary-section ">
                    <h1 className="section-title">Summary</h1>
                    <div className="section-descr">
                        {  summary }
                    </div>

                </div>

                <div className="cv-education-section row">
                    <h1 className="section-title">Education</h1>
                    <div className="section-descr">
                        {
                            Object.entries(education).map(([key, value]) => (

                                <div className="item" key={key}>
                                    <div className="name">
                                        <h3 className="name">{value.school}</h3>
                                        <p className="location">{value.location}</p>
                                    </div>
                                    <div className="descr">
                                        <p className="name">{value.degree}</p>
                                        <p className="date">{value.date}</p>
                                    </div>
                                    <div className="more-info">
                                        <ul className="list">
                                            <li className="item">
                                                <b>Relevant Courses: </b>
                                                { value.courses.join(', ') }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="cv-experience-section row">
                    <h1 className="section-title">Proffesional Experience</h1>
                    <div className="section-descr">
                        {

                            experience.map((experience, index) => {

                               //console.log(experience)

                                const location = (experience?.exp_city || 'City')  + ', ' + (experience?.exp_country || 'State');
                                const date = (experience?.exp_start_date || 'MM/YEAR') + ' - ' + (experience?.exp_end_date || 'MM/YEAR');
                                const responsibilities = DOMPurify.sanitize(experience.exp_responsibilities)
                                || '<ul><li>For example: Part of a 7 person team delivering a product serving 1,500 users, releasing updates every 2 weeks, on a codebase with more than 150,000 lines of code, 100 classes, 15 tables.</ul';

                                return(
                                    <div className="item" key={index}>
                                        <div className="name">
                                            <h3 className="name">{experience.exp_company || 'Company' }</h3>
                                            <p className="location">{ location }</p>
                                        </div>
                                        <div className="descr">
                                            <p className="name">{experience.exp_job || 'Position Held'}</p>
                                            <p className="date">{ date }</p>
                                        </div>
                                        <div className="more-info">
                                            <div className="more-info" dangerouslySetInnerHTML={{ __html: responsibilities }}></div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className="cv-projects-section">
                    <h1 className="section-title">Projects</h1>
                    <div className="section-descr">
                        {
                            Object.entries(projects).map(([key, project]) => (

                                <div className="item" key={key}>
                                    <div className="name">
                                        <h3 className="name">
                                            <a href="">{project.pro_name}</a>
                                        </h3>
                                        <p className="date">{project.date}</p>
                                    </div>
                                    <div className="more-info">
                                        <ul className="list">
                                            {
                                                project.work_done.map((item, index) => (
                                                    <li className="item" key={index}>{item}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                   </div>
                </div>

                <div className="cv-skills-section row">
                    <h1 className="section-title">Skills & Interests</h1>
                    <div className="section-descr">
                        <div className="item">
                            <div className="more-info">
                                <ul className="list">
                                    {
                                        skills.map((item, key) => (
                                            <li className="item" key={key}>
                                                <b>{ item.skill_name }: </b>
                                                { item.technologies.join(', ')}
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

CVPaper.propTypes = {
    resumeInfo: PropTypes.object.isRequired
};

export default CVPaper;