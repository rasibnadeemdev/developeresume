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
				'React Native',
				'GraphQL',
				'Firebase'
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
						`Engineered the front end of an employee management platform in React for a Canadian company that is helping <strong>3000+</strong> employees. Implemented <strong>role-based</strong> authentication and authorization system using React Context API.`,
						`Architected a <strong>reporting engine</strong> in React that generated dynamic project reports by applying provided data filters. Also implemented an <strong>export</strong> functionality to convert these reports to Excel for further analysis.`,
						`Developed a time-logging feature to allow employees to log their daily work hours. Used Socket.IO to implement an <strong>in-app notification</strong> system to notify employees if their logged hours are insufficient.`
					]
				},
				{
					id: uuidv4(),
					projectName: 'Roof Technology Partners',
					content: [
						`Developed the front-end architecture of an employee training web platform in <strong>React</strong> to improve its employee capabilities by offering training and certifications.`,
						`Designed and implemented a user auth system by creating custom hooks with <strong>React</strong> Context API and <strong>JWT tokens</strong> for authentication. Utilized React higher order component pattern to validate user auth state and then apply redirection accordingly.`,
						`Implemented <strong>push notifications</strong> using Firebase and developed an in-app notification mechanism using Socket.IO to notify users about new training and certificates.`,
						`Integrated <strong>Reactstrap</strong> design library to build the user interface and components. Used different libraries like <strong>React data table</strong> and <strong>i18n</strong> for introducing multi-lingual capacity in the platform.`,
					]
				},
				{
					id: uuidv4(),
					projectName: 'Lapco',
					content: [
						`Developed an e-commerce web app using <strong>Next.js</strong> and <strong>React Redux</strong> for a local computer vendor. Integrated features like product comparison, wishlist management, and a streamlined cart system.`,
						`Developed a panel to power admin user to define <strong>custom form schema</strong>. Implemented a dynamic form feature that generates a “Sell to us” form from the server data based on admin provided schema. `,
						`Engineered a coupon system using Next.js, Node.js, and MongoDB that lets admin generate coupons that can be used by customers on the checkout page.`
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
