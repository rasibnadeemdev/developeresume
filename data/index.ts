import { v4 as uuidv4 } from 'uuid';
import { IData } from '@/types';

const userData: IData = {
	header: {
		name: 'Muhammad Rasib',
		phoneNumber: '+923297952264',
		location: 'Lahore, Pakistan',
		email: 'rasibnadeemdev@gmail.com',
		linkedIn: 'linkedin.com/in/rasib-nadeem-571a90189/',
		github: 'github.com/rasibnadeem'
	},
	education: [
		{
			id: uuidv4(),
			degree: 'B.Sc. of Computer Sciences',
			university: 'Comsats University Islamabad',
			location: 'Lahore, Pakistan',
			duration: 'January 2017 - January 2021'
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
				'React Native',
				'Next.js',
				'Redux Toolkit',
				'Vue.js',
				'Nuxt.js',
				'Bootstrap',
				'Tailwind CSS',
				'Styled Components',
				'Node.js',
				'MongoDB',
				'PostgreSQL',
				'REST APIs',
				'GraphQL',
				'Firebase'
			]
		},
		{
			id: uuidv4(),
			name: 'Soft Skills',
			skill: [
				'Team Leadership',
				'Ownership',
				'Rigor',
				'Team work',
				'Communication'
			]
		}
	],
	experience: [
		{
			id: uuidv4(),
			designation: 'Software Engineer',
			company: 'The Hexaa',
			location: 'Lahore, Pakistan',
			duration: 'Feb 2021 - June 2024',
			tasks: [
				{
					id: uuidv4(),
					projectName: 'Anatomic Iron',
					content: [
						`Engineered the front end of an employee management platform in React for a Canadian company that is helping <strong>3000+</strong> employees. Implemented <strong>role-based</strong> authentication and authorization system using React Context API.`,
						`Architected a <strong>reporting engine</strong> in React that generated dynamic project reports by applying provided data filters. Also implemented an <strong>export</strong> functionality to convert these reports to Excel for further analysis.`,
						`Developed a time-logging feature to allow employees to log their daily work hours. Used Socket.IO to implement an <strong>in-app notification</strong> system to notify employees if their logged hours are insufficient.`
					]
				},
				{
					id: uuidv4(),
					projectName: 'Coupon Senet',
					content: [
						`Developed the complete app by using <strong>React Native</strong> and <strong>Redux</strong>. Integrated features like user authentication, coupon management, and coupon generation.`,
						`Integrated Unity games with in the mobile application for both android and ios`,
						`Deployed the app to Google Play Store and Apple App Store`
					]
				},
				{
					id: uuidv4(),
					projectName: 'Lapco',
					content: [
						`Developed an e-commerce web app using <strong>Next.js</strong> and <strong>React Redux</strong> for a computer vendor. Integrated features like product comparison, wishlist management, and a streamlined cart system.`,
						`Developed a panel to power admin user to define <strong>custom form schema</strong>. Implemented a dynamic form feature that generates a “Sell to us” form from the server data based on admin provided schema. `,
						`Designed the backend architecture using <strong>Node.js</strong> and <strong>MongoDB</strong>`,
						`Dockerized the backend and the frontend and deployed it on AWS Ec2`
					]
				},

				{
					id: uuidv4(),
					projectName: 'RespondAbility',
					content: [
						`Lead React Js developer`,
						`Responsible to convert Ruby on Rails UI code to React Js code.`,
						`Responsible to integrate APIs and to make sure all the workflow were still functional.`,
						`Responsible for creating new features and screens using TailwindCss`
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
	accomplishments: []
};

export default userData;
