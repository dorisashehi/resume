import './index.scss';
import PropTypes from 'prop-types';
import React from 'react';
import DOMPurify from 'dompurify';

const CVPaper = (props) => {
  const { fullName, email, phone, location, others } = props.resumeInfo.profile;
  const { summary, education, experience, projects, skills } = props.resumeInfo;
  const summ =
    DOMPurify.sanitize(summary) || 'x+ years as [Title] with y small/medium/large companies in the [Industry]'; //Summary sanitized or default value

  return (
    <>
      <div className="col cv-column">
        <div className="cv-name-section row">
          <h1 className="cv-name">{fullName || 'Name'}</h1>
        </div>
        <div className="cv-website-section">
          <ul className="profile-links">
            <li className="item">{email || 'Email Address'}</li>
            <li className="item">{phone || 'Phone Number'}</li>
            <li className="item">{location || 'Location'}</li>

            {Object.entries(others).map(
              ([key, value]) =>
                value !== '' && (
                  <React.Fragment key={key}>
                    <li className="item">
                      <a href={value}>{key}</a>
                    </li>
                  </React.Fragment>
                )
            )}
          </ul>
        </div>

        <div className="cv-summary-section row">
          <h1 className="section-title">Summary</h1>
          <div className="section-descr" dangerouslySetInnerHTML={{ __html: summ }}></div>
        </div>

        <div className="cv-education-section row">
          <h1 className="section-title">Education</h1>
          <div className="section-descr">
            {Object.entries(education).map(([key, education]) => {
              const location = (education.edu_city || 'City') + ', ' + (education.edu_country || 'State');
              const date = (education?.schl_start_date || 'MM/YEAR') + ' - ' + (education?.schl_end_date || 'MM/YEAR');

              return (
                <div className="item" key={key}>
                  <div className="name">
                    <h3>{education.school || 'School / Bootcamp / Program'}</h3>
                    <p>{location}</p>
                  </div>
                  <div className="descr">
                    <p>{education.degree || 'Degree Name'}</p>
                    <p>{date}</p>
                  </div>
                  <div className="more-info">
                    {/* <ul className="list">
                                                <li className="item">
                                                    <b>Relevant Courses: </b>
                                                    { value.courses.join(', ') }
                                                </li>
                                            </ul> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cv-experience-section row">
          <h1 className="section-title">Proffesional Experience</h1>
          <div className="section-descr">
            {experience.map((experience, index) => {
              //console.log(experience)

              const location = (experience.exp_city || 'City') + ', ' + (experience.exp_country || 'State');
              const date = (experience.exp_start_date || 'MM/YEAR') + ' - ' + (experience.exp_end_date || 'MM/YEAR');
              const responsibilities =
                DOMPurify.sanitize(experience.exp_responsibilities) ||
                '<ul><li>For example: Part of a 7 person team delivering a product serving 1,500 users, releasing updates every 2 weeks, on a codebase with more than 150,000 lines of code, 100 classes, 15 tables.</ul';

              return (
                <div className="item" key={index}>
                  <div className="name">
                    <h3>{experience.exp_company || 'Company'}</h3>
                    <p>{location}</p>
                  </div>
                  <div className="descr">
                    <p>{experience.exp_job || 'Position Held'}</p>
                    <p>{date}</p>
                  </div>

                  <div className="more-info" dangerouslySetInnerHTML={{ __html: responsibilities }}></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cv-projects-section">
          <h1 className="section-title">Projects</h1>
          <div className="section-descr">
            {projects.map((project, index) => {
              const date = (project.exp_start_date || 'MM/YEAR') + ' - ' + (project.exp_end_date || 'MM/YEAR');

              const work =
                DOMPurify.sanitize(project?.project_works) ||
                '<ul><li>Cover your project, team/ solo work, quantify and call out notable things like size of projects, number of users, etc.</li></ul>'; //Summary sanitized or default value

              return (
                <div className="item" key={index}>
                  <div className="name">
                    <h3>{project.project_title || 'Project Name'}</h3>
                    <p>{date}</p>
                  </div>
                  <div className="descr">
                    <p>{project.project_type || 'Project Type'}</p>
                  </div>

                  <div className="more-info" dangerouslySetInnerHTML={{ __html: work }}></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="cv-skills-section row">
          <h1 className="section-title">Skills & Interests</h1>
          <div className="section-descr">
            <div className="item">
              <div className="more-info">
                <ul className="list">
                  {skills.map((skill, index) => {
                    return (
                      <li className="item" key={index}>
                        <b className="skill-category">{skill.skill_category || 'Skill'}: </b>
                        {skill.technologies.join(', ') || 'Note things related to your role'}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CVPaper.propTypes = {
  resumeInfo: PropTypes.object.isRequired,
};

export default CVPaper;
