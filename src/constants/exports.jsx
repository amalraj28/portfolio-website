import ReactIcon from "react-devicons/react/original";
import CIcon from "react-devicons/c/original";
import PythonIcon from "react-devicons/python/original";
import FlutterIcon from "react-devicons/flutter/original";
import GitIcon from "react-devicons/git/original";
import GithubIcon from "react-devicons/github/original";
import MatlabIcon from "react-devicons/matlab/original";
import CppIcon from "react-devicons/cplusplus/original";
import JavascriptIcon from "react-devicons/javascript/original";
import TensorflowIcon from "react-devicons/tensorflow/original";
import PandasIcon from "react-devicons/pandas/original";
import NumpyIcon from "react-devicons/numpy/original";
import SQLIcon from "react-devicons/mysql/original";
import UbuntuIcon from "react-devicons/ubuntu/plain";
import Html5Icon  from "react-devicons/html5/original";
import Css3Icon from "react-devicons/css3/original";
import VSCodeIcon from 'react-devicons/vscode/original'

export const jobs = [
	"Python Developer",
	"Flutter Developer",
	"C++ Developer",
	"Front-End Web Developer",
	"Deep Learning Enthusiast",
];

export const aboutMe =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus officiis ducimus quos repudiandae unde rerum dignissimos nihil repellendus accusantium dolor neque, temporibus sint, commodi velit enim harum? Excepturi, quod?";

export const projects = {
	passwordManager: {
		name: "Password Manager App",
		thumbnail: "src/assets/password_manager_thumbnail.jpg",
		github: "https://github.com/amalraj28/password_manager",
		description:
			"A mobile application to manage passwords of users. Stores the user data locally on their devices. User can also generate random password if needed.",
	},

	calculatorReact: {
		name: "Calculator",
		thumbnail: "src/assets/calculator_thumbnail.jpg",
		github: "https://github.com/amalraj28/calculator-react",
		description: "A basic calculator built using React and styled using SASS",
		liveLink: "https://calculator-react-tlot.onrender.com/",
	},
};

export const emailID = "sample@gmail.com";

export const devIcons = {
	iconSize: "8svh",
	iconList: [
		{ label: "React", DevIcon: (props) => <ReactIcon {...props} /> },
		{ label: "C++", DevIcon: (props) => <CppIcon {...props} /> },
		{ label: "Python", DevIcon: (props) => <PythonIcon {...props} /> },
		{ label: "Flutter", DevIcon: (props) => <FlutterIcon {...props} /> },
		{ label: "Git", DevIcon: (props) => <GitIcon {...props} /> },
		{ label: "GitHub", DevIcon: (props) => <GithubIcon {...props} /> },
		{ label: "MATLAB", DevIcon: (props) => <MatlabIcon {...props} /> },
		{ label: "C", DevIcon: (props) => <CIcon {...props} /> },
		{ label: "JavaScript", DevIcon: (props) => <JavascriptIcon {...props} /> },
		{ label: "Tensorflow", DevIcon: (props) => <TensorflowIcon {...props} /> },
		{ label: "Pandas", DevIcon: (props) => <PandasIcon {...props} /> },
		{ label: "Numpy", DevIcon: (props) => <NumpyIcon {...props} /> },
		{ label: "SQL", DevIcon: (props) => <SQLIcon {...props} /> },
		{ label: "Ubuntu", DevIcon: (props) => <UbuntuIcon {...props} /> },
		{ label: "HTML5", DevIcon: (props) => <Html5Icon {...props} /> },
		{ label: "CSS", DevIcon: (props) => <Css3Icon {...props} /> },
		{ label: "VS Code", DevIcon: (props) => <VSCodeIcon {...props} /> },
	],
};
