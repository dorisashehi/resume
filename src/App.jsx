import './App.scss'
import CVPaper from './Components/CV'
import Experience from './Components/Experience'
import Profile from './Components/Profile'
import Summary from './Components/Summary'
import Education from './Components/Education'
import Projects from './Components/Projects'
import { useState } from 'react'
import Skills from './Components/Skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faFilePen, faFileLines, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup';


function App() {


    //const [resumeInfo, setDefaultCV] = useState(defaultInfo);
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(!modalOpen);
    };

    const [cvData, setCVData] = useState(
        {

            profile: { //PROFILE SECTION DATA
                fullName: '',
                email: '',
                phone: '',
                location: '',
                others: {
                    website: '',
                    github: '',
                    linkedIn: ''
                }
            },
            summary: '', //SUMMARY SECTION DATA
            education: [ //EDUCATION SECTION DATA
                {
                    school: '',
                    edu_city: '',
                    edu_country: '',
                    degree: '',
                    schl_start_date: '',
                    schl_end_date: '',
                    courses: [],
                }
            ],
            experience: [ //EXPERIENCE SECTION DATA
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
            ],
            projects: [ //PROJECTS SECTION DATA
                {
                    project_title: '',
                    project_technology: '',
                    project_city: '',
                    project_country: '',
                    project_type: '',
                    work_done: []

                },
            ],
            skills: [ //SKILLS SECTION DATA
                {
                    skill_category: '',
                    skill_title: '',
                    technologies: []
                },

            ]

        }
    )

    const addProfile = (profileObj) => { //ADD PROFILE DATA TO CV DATA TP REFLECT THEM DIRECTLY IN CV PAPER
        setCVData({
            ...cvData,
            profile: profileObj //OBJECT OD DATA PASED FROM THE CHILD COMPONENT
        })
    }

    const addExperiences = (experienceObj) => { //ADD PROFILE DATA TO CV DATA TP REFLECT THEM DIRECTLY IN CV PAPER
        setCVData({
            ...cvData,
            experience: experienceObj
             //OBJECT OD DATA PASED FROM THE CHILD COMPONENT
        })
    }

    const addSummary = (summaryContent) => {
        setCVData({
            ...cvData,
            summary: summaryContent
        })

    }

    const addEducation = (educationObj) => {
        setCVData({
            ...cvData,
            education: educationObj
        })

    }

    const addProjects = (projectsObj) => {
        setCVData({
            ...cvData,
            projects: projectsObj
        })

    }

    const addSkills = (skillsObj) => {
        setCVData({
            ...cvData,
            skills: skillsObj
        })

    }


  return (
    <>
      <section>
          <div className="main">
             <div className="text-content">
                <h1>CV Builder</h1>
             </div>
          </div>
      </section>

      <section className="main">
            <main>

                <div className="col costumize-column">
                    <div className="logo container">
                            <h1>CV</h1>
                    </div>

                    <div className="content container active">
                            <FontAwesomeIcon icon={ faFileLines } />
                            <h1>Content</h1>
                    </div>

                    <div className="costumize container">
                            <FontAwesomeIcon icon={ faFilePen } />
                            <h1>Costumize</h1>
                    </div>
                    <div className="costumize container" onClick={openModal}>
                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                        <h1>Preview</h1>
                        <Popup
                            open={modalOpen}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal">

                                    <div className="content">
                                        <CVPaper resumeInfo = { cvData } />
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>

                </div>


                <div className="col sections-column">

                    <div className="download-section row">
                        <h1 className="resume-title">Resume No.1
                                <FontAwesomeIcon icon={ faPenToSquare } />
                        </h1>
                    </div>

                    <Profile addProfile = { addProfile }/>
                    <Summary addSummary = { addSummary } />
                    <Education addEducation = {addEducation} />
                    <Experience addExperiences = { addExperiences } />
                    <Projects addProjects = { addProjects } />
                    <Skills addSkills = {addSkills} />
                </div>

                <CVPaper resumeInfo = { cvData } />

                <div className="col costumize-column only-mobile">
                    <div className="content container active">
                            <FontAwesomeIcon icon={ faFileLines } />
                    </div>

                    <div className="costumize container">
                            <FontAwesomeIcon icon={ faFilePen } />
                    </div>
                    <div className="costumize container" onClick={openModal}>
                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                        <Popup
                            open={modalOpen}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal">

                                    <div className="content">
                                        <CVPaper resumeInfo = { cvData } />
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>

                </div>


            </main>
      </section>

    </>
  )
}

export default App
