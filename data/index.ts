import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Muhammad Sarim Hassan',
		phoneNumber: '+923244628572',
		location: 'Lahore, Pakistan',
		email: 'msarimdev@gmail.com',
		linkedIn: 'linkedin.com/in/msarimhassan/',
		github: 'github.com/msarimhassan'
	},
	education: [
		{
			id: uuidv4(),
			degree: 'B.Sc. of Computer Sciences',
			university: 'University of Lahore',
			location: 'Lahore, Pakistan',
			duration: 'Sept 2018 - July 2022'
		}
	],
	skills: [
		{
			id: uuidv4(),
			name: 'Programming languages',
			skill: ['JavaScript', 'TypeScript']
		},
		{
			id: uuidv4(),
			name: 'Technologies',
			skill: [
				'Git',
				'HTML',
				'CSS',
				'React',
				'Next.js',
				'Redux Toolkit',
				'Tailwind CSS',
				'Styled Components',
				'MongoDB',
				'Node.js',
				'REST APIs',
				'React Native'
			]
		},
		{
			id: uuidv4(),
			name: 'Soft Skills',
			skill: ['Ownership', 'Rigor', 'Team work', 'Communication']
		}
	],
	experience: [
		{
			id: uuidv4(),
			designation: 'Software Engineer',
			company: 'The Hexaa',
			location: 'Lahore, Pakistan',
			duration: 'May 2022 - Present',
			tasks: [
				{
					id: uuidv4(),
					projectName: 'Anatomic Iron',
					content: [
						`Engineered the front-end of an employee management platform in React for a Canadian company that is helping 3000+ employees. Implemented role-based authentication and authorization system using React Context API.`,
						`Architected a reporting engine in React that generated dynamic project reports by applying provided data filters. Also implemented an export functionality to convert these reports to Excel for further analysis.`,
						`Developed a time-logging feature to allow employees to log their daily work hours. Used Socket.IO to implement an in-app notification system to notify employees if their logged hours are insufficient.`
					]
				},
				{
					id: uuidv4(),
					projectName: 'Roof Technology Partners',
					content: [
						`Developed the front-end architecture of an employee training web platform in <strong>React</strong> to improve its employee capabilities by offering training and certifications.
`,
						`Designed and implemented a user auth system by creating custom hooks with <strong>React</strong> Context API and JWT tokens for authentication. Utilized React higher order component pattern to validate user auth state and then apply redirection accordingly.`,
						`Developed and integrated a certificate generator in the platform by using print() Web API and platform REST API to dynamically generate completion certificates that can be saved as PDFs.`,
						`Implemented push notifications using Firebase and developed an in-app notification mechanism using Socket.IO to notify users about new training and certificates.`,
						`Integrated Reactstrap design library to build the entire user interface and developed multiple custom components using it to introduce dynamic behavior.`,
						`Used different libraries like React data table for data presentation and i18n for introducing multi-lingual capacity in the platform.`
					]
				},
				{
					id: uuidv4(),
					projectName: 'Lapco',
					content: [
						`Developed an e-commerce store web app using Next.js and React Redux for state management for a local computer vendor. Integrated features like product comparison, wishlist management, and a streamlined cart system.`
					]
				}
			]
		}
	],
	projects: [],
	// projects: [
	// 	{
	// 		id: uuidv4(),
	// 		name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
	// 		desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
	// 	},
	// 	{
	// 		id: uuidv4(),
	// 		name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
	// 		desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
	// 	},
	// 	{
	// 		id: uuidv4(),
	// 		name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
	// 		desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
	// 	},
	// 	{
	// 		id: uuidv4(),
	// 		name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
	// 		desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
	// 	},
	// 	{
	// 		id: uuidv4(),
	// 		name: `<a href="https://github.com/msaaddev/jobboard">Jobboard</a>`,
	// 		desc: `Built a PWA with <strong>HTML, CSS, JavaScript, Next.js</strong>, <strong>Firebase Auth</strong>, and <strong>Firestore</strong> to help developers get hired. Integrated features like user authentication, separate company and applicant dashboards, job posting, and job deleting.`
	// 	}
	// ],
	accomplishments: [
		`Winner, Web Development Competition by <a href="https://uol.edu.pk/">Univeristy of Lahore</a>, Lahore (2020)`,
		`Participating in Hactoberfest challenge since 2020.`
	]
};

export default userData;
