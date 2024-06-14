import './index.scss';

function CV () {

    return(
        <>
            <div className="col cv-column">

                <div className="row">
                    <h1 className="cv-name">Name Surname</h1>
                </div>
                <div className="website-links">
                    <p className="item">Email Adress</p> |
                    <p className="item">Phone Number</p> |
                    <p className="item">Location</p> |
                    <p className="item"><a href="">Website</a></p> |
                    <p className="item"><a href="">Github</a></p> |
                    <p className="item"><a href="">LinkedIn</a></p>
                </div>

                <div className="summary">
                    <h1 className="section-title">Summary</h1>
                    <div className="section-descr">
                        x+ years as [Title] with y small/medium/large companies in the [Industry]
                    </div>

                </div>

                <div className="general-section">
                    <h1 className="section-title">Education</h1>
                    <div className="section-descr">

                        <div className="item">
                            <div className="name">
                                <h3 className="name">School / Bootcamp / Program</h3>
                                <p className="location">Shkoder, AL</p>
                            </div>
                            <div className="descr">
                                <p className="name">Degree Name</p>
                                <p className="date">MM/YEAR – MM/YEAR</p>
                            </div>
                            <div className="more-info">
                                <ul className="list">
                                    <li className="item"><b>Relevant Courses:</b> Only include a bullet or two if there’s something notable, otherwise exclude</li>
                                </ul>
                            </div>
                        </div>

                        <div className="item">
                            <div className="name">
                                <h3 className="name">School / Bootcamp / Program</h3>
                                <p className="location">Shkoder, AL</p>
                            </div>
                            <div className="descr">
                                <p className="name">Degree Name</p>
                                <p className="date">MM/YEAR – MM/YEAR</p>
                            </div>
                            <div className="more-info">
                                <ul className="list">
                                    <li className="item"><b>Relevant Courses:</b> Only include a bullet or two if there’s something notable, otherwise exclude</li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>



                <div className="general-section">
                    <h1 className="section-title">Proffesional Experience</h1>
                    <div className="section-descr">

                        <div className="item">
                            <div className="name">
                                <h3 className="name">Company</h3>
                                <p className="location">Location (City, State)</p>
                            </div>
                            <div className="descr">
                                <p className="name">Position Held</p>
                                <p className="date">MM/YEAR – MM/YEAR</p>
                            </div>
                            <div className="more-info">
                                <ul className="list">
                                    <li className="item">Don’t give a description of the company or describe the generic role. That’s not needed.</li>
                                    <li className="item">Focus on wins, and unique responsibilities, accomplishments</li>
                                    <li className="item">For example: Part of a 7 person team delivering a product serving 1,500 users, releasing updates every 2 weeks, on a codebase with more than 150,000 lines of code, 100 classNamees, 15 tables.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="item">
                            <div className="name">
                                <h3 className="name">Company</h3>
                                <p className="location">Location (City, State)</p>
                            </div>
                            <div className="descr">
                                <p className="name">Position Held</p>
                                <p className="date">MM/YEAR – MM/YEAR</p>
                            </div>
                            <div className="more-info">
                                <ul className="list">
                                    <li className="item">Don’t give a description of the company or describe the generic role. That’s not needed.</li>
                                    <li className="item">Focus on wins, and unique responsibilities, accomplishments</li>
                                    <li className="item">For example: Part of a 7 person team delivering a product serving 1,500 users, releasing updates every 2 weeks, on a codebase with more than 150,000 lines of code, 100 classNamees, 15 tables.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="general-section">
                    <h1 className="section-title">Projects</h1>
                    <div className="section-descr">

                        <div className="item">
                            <div className="name">
                                <h3 className="name"><a href="">Project Name</a></h3>
                                <p className="date">MM/YEAR – MM/YEAR</p>
                            </div>
                            <div className="more-info">
                                <ul className="list">
                                    <li className="item">Cover your project, team/ solo work, quantify and call out notable things like size of projects, number of users, etc.</li>
                                    <li className="item">Include a link if it’s available online.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="item">
                            <div className="name">
                                <h3 className="name"><a href="">Project Name</a></h3>
                                <p className="date">MM/YEAR – MM/YEAR</p>
                            </div>
                            <div className="more-info">
                                <ul className="list">
                                    <li className="item">Cover your project, team/ solo work, quantify and call out notable things like size of projects, number of users, etc.</li>
                                    <li className="item">Include a link if it’s available online.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="general-section skills-section">
                    <h1 className="section-title">Skills & Interests</h1>
                    <div className="section-descr">
                        <div className="item">
                            <div className="more-info">
                                <ul className="list">
                                    <li className="item"><b>Skill Name: </b>Technologies included</li>
                                    <li className="item"><b>Skill Name: </b>Technologies included</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CV