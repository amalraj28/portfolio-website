import * as Icons from "./svg";

export const jobs = [
	"Python Developer",
	"Flutter Developer",
	"C++ Developer",
	"Front-End Web Developer",
	"Deep Learning Enthusiast",
];

export const aboutMe =
	"Enthusiastic and skilled college student with a robust foundation in technology and a passion for innovation. Proficient in a diverse array of programming languages including C++, Python, and Flutter, I thrive on tackling challenges and devising creative solutions. My continuous learning mindset keeps me at the forefront of emerging technologies, while my strong problem-solving abilities and organizational skills enable me to excel in dynamic environments. With experience in front-end web development and deep learning projects, I am eager to contribute my expertise and enthusiasm to a forward-thinking organization. Let's collaborate to drive technological advancements and achieve impactful results.";

export const projects = {
	portfolio: {
		name: "Portfolio Website",
		thumbnail: "/assets/portfolio.png",
		github: "https://github.com/amalraj28/portfolio-website",
		description: "My portfolio website built using React.js",
	},

	passwordManager: {
		name: "Password Manager App",
		thumbnail: "/assets/password_manager_thumbnail.jpg",
		github: "https://github.com/amalraj28/password_manager",
		description:
			"A mobile application to manage passwords of users. Stores the user data locally on their devices. User can also generate random password if needed.",
	},

	calculatorReact: {
		name: "Calculator using ReactJS",
		thumbnail: "/assets/calculator_thumbnail.png",
		github: "https://github.com/amalraj28/calculator-react",
		description: "A basic calculator built using React and styled using SASS",
		liveLink: "https://calculator-react-tlot.onrender.com/",
	},

	tictactoe: {
		name: "Tic-Tac-Toe",
		thumbnail: "/assets/tictactoe.png",
		github: "https://github.com/amalraj28/tic-tac-toe",
		description: "Tic-tac-toe game built using HTML, CSS and Javascript",
		liveLink: "https://xoxojs.vercel.app",
	},

	pdfToAudioBook: {
		name: "PDF to Audiobook Converter",
		thumbnail: "/assets/pdf_to_audiobook.png",
		github: "https://github.com/amalraj28/pdf_to_audiobook",
		description: "Python script that reads out a PDF file",
	},
};

export const socialMediaID = {
	linkedin: "in/amalraj2803",
	instagram: "amal_raj28",
	github: "amalraj28",
};

export const handleScroll = (ref) => {
	window.scrollTo({
		top: Math.max(0, ref.current.offsetTop - 100),
		left: 0,
		behavior: "smooth",
	});
};

export const skills = {
	"Programming Languages": [
		{ name: "C", Icon: Icons.CIcon },
		{ name: "C++", Icon: Icons.CPlusPlusIcon },
		{ name: "Python", Icon: Icons.PythonIcon },
		{ name: "JavaScript", Icon: Icons.JavascriptIcon },
		{ name: "MATLAB", Icon: Icons.MatlabIcon },
	],
	"Front-end Development": [
		{ name: "HTML5", Icon: Icons.Html5Icon },
		{ name: "CSS3", Icon: Icons.Css3Icon },
		{ name: "JavaScript", Icon: Icons.JavascriptIcon },
		{ name: "ReactJS", Icon: Icons.ReactIcon },
		{ name: "SASS", Icon: Icons.SassIcon },
		{ name: "Flutter", Icon: Icons.FlutterIcon },
	],
	"Deep Learning": [
		{name: "Python", Icon: Icons.PythonIcon},
		{name: "Pytorch", Icon: Icons.PytorchIcon},
		{name: "Keras", Icon: Icons.KerasIcon},
		{name: "Numpy", Icon: Icons.NumpyIcon},
		{name: "Pandas", Icon: Icons.PandasIcon},
		{name: "Matplotlib", Icon: Icons.MatplotlibIcon}
	],
	"Other Tools": [
		{name: "Git", Icon: Icons.GitIcon},
		{name: "GitHub", Icon: Icons.GithubIcon},
		{name: "MySQL", Icon: Icons.MysqlIcon},
		{name: "SQLLite", Icon: Icons.SqlliteIcon},
		{name: "FastAPI", Icon: Icons.FastapiIcon}
	]
};
