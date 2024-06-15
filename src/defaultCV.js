const defaultInfo = {

    profile: {
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
    summary: '',
    education: [
        {
            school: '',
            location: '',
            degree: '',
            date: '',
            courses: [],
        },
        {
            school: '',
            location: '',
            degree: '',
            date: '',
            courses: [],
        }
    ],
    experience: [
        {
            company: '',
            location: '',
            position: '',
            date: '',
            responsibilities: []
        }
    ],
    projects: [
        {
            pro_name: '',
            date: '',
            work_done: []

        },
    ],
    skills: [
        {
            skill_name: '',
            technologies: []
        },

    ]

}

export default defaultInfo