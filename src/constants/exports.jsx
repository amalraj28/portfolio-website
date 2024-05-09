export const jobs = [
	"Python Developer",
	"Flutter Developer",
	"C++ Developer",
	"Front-End Web Developer",
	"Deep Learning Enthusiast",
];

export const aboutMe =
	"Enthusiastic college student with a strong foundation in tech skills. Proficient in programming languages such as C++, Python, and Flutter, I am passionate about tackling challenges and finding innovative solutions. With a continuous learning mindset, I thrive on staying updated with emerging technologies. My strong problem-solving abilities, combined with organizational skills, enable me to excel in dynamic environments. Eager to contribute my skills and passion to a forward-thinking organization.";

export const projects = {
	passwordManager: {
		name: "Password Manager App",
		thumbnail: "src/assets/password_manager_thumbnail.jpg",
		github: "https://github.com/amalraj28/password_manager",
		description:
			"A mobile application to manage passwords of users. Stores the user data locally on their devices. User can also generate random password if needed.",
	},

	calculatorReact: {
		name: "Calculator using ReactJS",
		thumbnail: "src/assets/calculator_thumbnail.png",
		github: "https://github.com/amalraj28/calculator-react",
		description: "A basic calculator built using React and styled using SASS",
		liveLink: "https://calculator-react-tlot.onrender.com/",
	},
};

export const socialMediaID = {
	linkedin: "in/amalraj2803",
	instagram: "amal_raj28",
	github: "amalraj28",
};

export const handleScroll = (ref) => {
	console.log(`Scrolled to value ${Math.max(0, ref.current.offsetTop - 100)}`);
	window.scrollTo({
		top: Math.max(0, ref.current.offsetTop - 100),
		left: 0,
		behavior: "smooth",
	});
};
