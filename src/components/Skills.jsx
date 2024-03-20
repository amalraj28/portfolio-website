import IconButton from "./IconButton";
import ReactIcon from "react-devicons/react/original-wordmark";
import CIcon from "react-devicons/c/original";
import PythonIcon from "react-devicons/python/original-wordmark";
import FlutterIcon from "react-devicons/flutter/original";
import GitIcon from "react-devicons/git/original-wordmark";
import GithubIcon from "react-devicons/github/original-wordmark";
import MatlabIcon from "react-devicons/matlab/original";
import CppIcon from "react-devicons/cplusplus/original";
import JavascriptIcon from "react-devicons/javascript/original";
import TensorflowIcon from "react-devicons/tensorflow/original";
import PandasIcon from "react-devicons/pandas/original-wordmark";
import NumpyIcon from "react-devicons/numpy/original-wordmark";
import SQLIcon from "react-devicons/mysql/original-wordmark";
import UbuntuIcon from "react-devicons/ubuntu/plain-wordmark";
import Html5Icon from "react-devicons/html5/original-wordmark";
import Css3Icon from "react-devicons/css3/original-wordmark";
import VSCodeIcon from "react-devicons/vscode/original-wordmark";
import SassOriginalIcon from "react-devicons/sass/original";

function Skills() {
	const iconSize = "9svh";
	const iconList = [
		{ DevIcon: <CIcon size={iconSize} /> },
		{ DevIcon: <CppIcon size={iconSize} /> },
		{ DevIcon: <PythonIcon size={iconSize} /> },
		{ DevIcon: <Html5Icon size={iconSize} /> },
		{ DevIcon: <Css3Icon size={iconSize} /> },
		{ DevIcon: <JavascriptIcon size={iconSize} /> },
		{ DevIcon: <ReactIcon size={iconSize} /> },
		{ DevIcon: <GitIcon size={iconSize} /> },
		{ DevIcon: <GithubIcon size={iconSize} /> },
		{ label: "Flutter", DevIcon: <FlutterIcon size={iconSize} /> },
		{ label: "MATLAB", DevIcon: <MatlabIcon size={iconSize} /> },
		{ label: "TensorFlow", DevIcon: <TensorflowIcon size={iconSize} /> },
		{ DevIcon: <SQLIcon size={iconSize} /> },
		{ DevIcon: <PandasIcon size={iconSize} /> },
		{ DevIcon: <NumpyIcon size={iconSize} /> },
		{ DevIcon: <UbuntuIcon size={iconSize} /> },
		{ DevIcon: <VSCodeIcon size={iconSize} /> },
		{ DevIcon: <SassOriginalIcon size={iconSize} /> },
	];

	return (
		<section className="skills">
			<h3 className="title">Skills</h3>
			<div className="list-div">
				<ul>
					{iconList.map((item, idx) => {
						return (
							<li key={idx}>
								{<IconButton props={item} iconSize={iconSize} />}
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

export default Skills;