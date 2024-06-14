import './index.scss';
import PropTypes from 'prop-types';

const CVPaper  = (props) => {

    const {fullName, email, phone, location, others } = props.defaultInfo.profile;

    const summary = props.defaultInfo.summary;
    const education = props.defaultInfo.education;
    const experience = props.defaultInfo.experience;
    const projects = props.defaultInfo.projects;
    const skills = props.defaultInfo.skills;


    return(
        <>
            <div className="col cv-column">

                <div className="row">
                    <h1 className="cv-name">{ fullName }</h1>
                </div>
                <div className="website-links">
                    <p className="item">{ email }</p> <em>|</em>
                    <p className="item">{ phone }</p> <em>|</em>
                    <p className="item">{ location }</p>
                    {Object.entries(others).map(([key, value]) => (
                        value !== '' && (
                            <>
                                <em>|</em>
                                <p className="item">
                                    <a href={value}>{key}</a>
                                </p>
                            </>
                        )

                    ))}

                </div>

                <div className="summary">
                    <h1 className="section-title">Summary</h1>
                    <div className="section-descr">
                        {  summary }
                    </div>

                </div>

                <div className="general-section">
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

                <div className="general-section">
                    <h1 className="section-title">Proffesional Experience</h1>
                    <div className="section-descr">
                        {
                            Object.entries(experience).map(([key, experience]) => (

                                <div className="item" key={key}>
                                    <div className="name">
                                        <h3 className="name">{experience.company}</h3>
                                        <p className="location">{experience.location}</p>
                                    </div>
                                    <div className="descr">
                                        <p className="name">{experience.position}</p>
                                        <p className="date">{experience.date}</p>
                                    </div>
                                    <div className="more-info">
                                        <ul className="list">
                                            {
                                                experience.responsibilities.map((item, index) => (
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

                <div className="general-section">
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

                <div className="general-section skills-section">
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
    defaultInfo: PropTypes.object.isRequired
};

export default CVPaper;