function Skills () {

    return(
        <>
            <div className="skills-section row">
                <div className="experience">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    <h1 className="title">Skills</h1>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </div>
            <div className="project-details-section row details">
                <h1>
                    Edit Skills
                </h1>
                <div className="sub-section">
                    <form>
                        <div className="form-group">
                            <label htmlFor="skill-category">Skill Category</label>
                            <input type="text" className="form-input" name="skill-category" id="skill-category" placeholder="Enter Skill Category"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="skill-title">Technology</label>
                            <input type="text" className="form-input" name="skill-title" id="skill-title" placeholder="Enter Skill Tiltle"/>
                        </div>

                    </form>
                </div>
                <div className="sub-section">
                    <form>
                        <div className="form-group">
                            <label htmlFor="skill-category">Skill Category</label>
                            <input type="text" className="form-input" name="skill-category" id="skill-category" placeholder="Enter Skill Category"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="skill-title">Technology</label>
                            <input type="text" className="form-input" name="skill-title" id="skill-title" placeholder="Enter Skill Tiltle"/>
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

        </>
    )
}

export default Skills