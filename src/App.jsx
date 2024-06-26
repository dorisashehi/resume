import './App.scss';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import CVPaper from './Components/CV';
import CVPrint from './Components/CV/CVPrint';
import Experience from './Components/Experience';
import Profile from './Components/Profile';
import Summary from './Components/Summary';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faFileLines, faMagnifyingGlass, faCheck, faDownload } from '@fortawesome/free-solid-svg-icons';
import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [type, setType] = useState(false);
  const openModal = () => {
    setModalOpen(!modalOpen);
  };

  const [resumeName, setResumeName] = useState('Resume No.1'); //DEFAULT RESUME NAME
  const [enableEdit, setEnableEdit] = useState(false); //EDIT STATE
  const [nameField, setNameField] = useState('Resume No.1'); //RESUME INPUT VALUE
  const editName = (value) => {
    //ENABLE EDIT RESUME NAME
    setEnableEdit(true);
  };

  const changeName = (value) => {
    //ON CHANGE RESUME NAME SET NAME
    setNameField(value);
  };

  const changeResumeName = () => {
    //SAVE THE CHANGED RESUME NAME
    setResumeName(nameField);
    setEnableEdit(false);
  };

  const [cvData, setCVData] = useState({
    profile: {
      //PROFILE SECTION DATA
      fullName: '',
      email: '',
      phone: '',
      location: '',
      others: {
        portfolio: '',
        github: '',
        linkedIn: '',
      },
    },
    summary: '', //SUMMARY SECTION DATA
    education: [
      //EDUCATION SECTION DATA
      {
        school: '',
        edu_city: '',
        edu_country: '',
        degree: '',
        schl_start_date: '',
        schl_end_date: '',
        courses: [],
      },
    ],
    experience: [
      //EXPERIENCE SECTION DATA
      {
        exp_company: '',
        exp_job: '',
        exp_technology: '',
        exp_city: '',
        exp_country: '',
        exp_start_date: '',
        exp_end_date: '',
        responsibilities: [],
      },
    ],
    projects: [
      //PROJECTS SECTION DATA
      {
        project_title: '',
        project_technology: '',
        project_city: '',
        project_country: '',
        project_type: '',
        work_done: [],
      },
    ],
    skills: [
      //SKILLS SECTION DATA
      {
        skill_category: '',
        skill_title: '',
        technologies: [],
      },
    ],
  });

  const addProfile = (profileObj) => {
    //ADD PROFILE DATA TO CV DATA TP REFLECT THEM DIRECTLY IN CV PAPER
    setCVData({
      ...cvData,
      profile: profileObj, //OBJECT OD DATA PASED FROM THE CHILD COMPONENT
    });
  };

  const addExperiences = (experienceObj) => {
    //ADD PROFILE DATA TO CV DATA TP REFLECT THEM DIRECTLY IN CV PAPER
    setCVData({
      ...cvData,
      experience: experienceObj,
      //OBJECT OD DATA PASED FROM THE CHILD COMPONENT
    });
  };

  const addSummary = (summaryContent) => {
    setCVData({
      ...cvData,
      summary: summaryContent,
    });
  };

  const addEducation = (educationObj) => {
    setCVData({
      ...cvData,
      education: educationObj,
    });
  };

  const addProjects = (projectsObj) => {
    setCVData({
      ...cvData,
      projects: projectsObj,
    });
  };

  const addSkills = (skillsObj) => {
    setCVData({
      ...cvData,
      skills: skillsObj,
    });
  };

  return (
    <>
      <section>
        <div className="main">
          <div className="text-content">
            <h1>CV Maker</h1>
          </div>
        </div>
      </section>

      <section className="main">
        <main>
          <div className="col costumize-column">
            {/* <div className="logo container">
              <h1>CV</h1>
            </div> */}

            <div className="content container active">
              <FontAwesomeIcon icon={faFileLines} title="Content" />
              <h1>Content</h1>
            </div>

            {/* <div className="costumize container">
              <FontAwesomeIcon icon={faFilePen} />
              <h1>Costumize</h1>
            </div> */}
            <div className="costumize container" onClick={openModal}>
              <FontAwesomeIcon icon={faMagnifyingGlass} title="Preview CV" />
              <h1>Preview</h1>
            </div>
          </div>

          <div className="col sections-column">
            <div className="download-section row">
              {!enableEdit && (
                <h1 className="resume-title">
                  {resumeName}
                  <FontAwesomeIcon icon={faPenToSquare} className="resume-icon" onClick={editName} />
                </h1>
              )}
              {enableEdit && (
                <div className="edit-input">
                  <div class="form-group">
                    <input
                      type="text"
                      value={nameField}
                      name="resume_name"
                      id="resume_name"
                      onChange={(event) => {
                        changeName(event.target.value);
                      }}
                    />
                  </div>
                  <FontAwesomeIcon icon={faCheck} className="resume-icon edit" onClick={changeResumeName} />
                </div>
              )}

              <PDFDownloadLink
                document={<CVPrint resumeInfo={cvData} />}
                fileName={resumeName}
                className="btn download-pdf"
              >
                <span className="download-text">{'Download'}</span>
                <FontAwesomeIcon icon={faDownload} className="resume-icon" />
              </PDFDownloadLink>
            </div>

            <Profile addProfile={addProfile} />
            <Summary addSummary={addSummary} />
            <Education addEducation={addEducation} />
            <Experience addExperiences={addExperiences} />
            <Projects addProjects={addProjects} />
            <Skills addSkills={addSkills} />
          </div>

          <CVPaper resumeInfo={cvData} />

          <div className="col costumize-column only-mobile">
            <div className="content container active">
              <FontAwesomeIcon icon={faFileLines} />
            </div>

            {/* <div className="costumize container">
              <FontAwesomeIcon icon={faFilePen} />
            </div> */}
            <div className="costumize container" onClick={openModal}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <Popup open={modalOpen} modal nested>
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <CVPaper resumeInfo={cvData} />
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
