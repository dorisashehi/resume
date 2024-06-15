const defaultInfo = {

    profile: {
        fullName: 'Name Surname',
        email: 'example@gmial.com',
        phone: 'Phone Number',
        location: 'Location',
        others: {
            website: '',
            github: '',
            linkedIn: ''
        }
    },
    summary: 'x+ years as [Title] with y small/medium/large companies in the [Industry]',
    education: [
        {
            school: 'School / Bootcamp / Program',
            location: 'Location (City, State)',
            degree: 'Degree Name',
            date: 'MM/YEAR – MM/YEAR',
            courses: ['tech 1', 'tech 2'],
        },
        {
            school: 'School / Bootcamp / Program',
            location: 'Location (City, State)',
            degree: 'Degree Name',
            date: 'MM/YEAR – MM/YEAR',
            courses: ['tech 1'],
        }
    ],
    experience: [
        {
            company: 'Company Name',
            location: 'Location (City, State)',
            position: 'Position Held',
            date: 'MM/YEAR – MM/YEAR',
            responsibilities: [
                'Don’t give a description of the company or describe the generic role. That’s not needed.',
                'Focus on wins, and unique responsibilities, accomplishments',
                'For example: Part of a 7 person team delivering a product serving 1,500 users, releasing updates every 2 weeks, on a codebase with more than 150,000 lines of code, 100 classNamees, 15 tables.',
            ]
        },
        {
            company: 'Company Name',
            location: 'Location (City, State)',
            position: 'Position Held',
            date: 'MM/YEAR – MM/YEAR',
            responsibilities: [
                'Don’t give a description of the company or describe the generic role. That’s not needed.',
                'Focus on wins, and unique responsibilities, accomplishments',
                'For example: Part of a 7 person team delivering a product serving 1,500 users, releasing updates every 2 weeks, on a codebase with more than 150,000 lines of code, 100 classNamees, 15 tables.',
            ]
        }
    ],
    projects: [
        {
            pro_name: 'Project Name',
            date: 'MM/YEAR – MM/YEAR',
            work_done: [
                'Cover your project, team/ solo work, quantify and call out notable things like size of projects, number of users, etc.',
                'Include a link if it’s available online.'
            ]

        },
        {
            pro_name: 'Project Name',
            work_done: [
                'Cover your project, team/ solo work, quantify and call out notable things like size of projects, number of users, etc.',
                'Include a link if it’s available online.'
            ]

        }
    ],
    skills: [
        {
            skill_name: 'Skill Name:',
            technologies: [
                'Tech 1',
                'Tech 2'
            ]
        },
        {
            skill_name: 'Skill Name:',
            technologies: [
                'Tech 3',
                'Tech 4'
            ]
        }
    ]

}

export default defaultInfo