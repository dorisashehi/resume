import './App.scss'
import CVPaper from './Components/CV'
import Experience from './Components/Experience'
import Profile from './Components/Profile'
import Summary from './Components/Summary'
import Education from './Components/Education'
import Projects from './Components/Projects'
import { useState } from 'react'
//import Skills from './Components/Skills'
//import defaultInfo from './defaultCV'

function App() {


    //const [resumeInfo, setDefaultCV] = useState(defaultInfo);

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
                    skill_name: '',
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


  return (
    <>
      <section>
          <div className="main">
              <h1>CV Builder</h1>
          </div>
      </section>

      <section className="main">
          <main>

              <div className="col costumize-column">
                  <div className="logo container">
                      <h1>CV</h1>
                  </div>

                  <div className="content container active">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      <h1>Content</h1>
                  </div>

                  <div className="costumize container">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      <h1>Costumize</h1>
                  </div>

              </div>

              <div className="col sections-column">

                  <div className="download-section row">
                      <div className="resume-title">Resume No.1
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                      </div>
                      <buton className="download-button btn">Download
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      </buton>
                  </div>

                  <Profile addProfile = { addProfile }/>
                  <Summary addSummary = { addSummary } />
                  <Education addEducation = {addEducation} />
                  <Experience addExperiences = { addExperiences } />
                  <Projects addProjects = { addProjects } />
                  {/* <Skills /> */}
              </div>

            <CVPaper resumeInfo = { cvData } />
          </main>
      </section>

    </>
  )
}

export default App
