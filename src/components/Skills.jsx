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
import NumpyIcon from "react-devicons/numpy/original";
import SQLIcon from "react-devicons/mysql/original-wordmark";
import UbuntuIcon from "react-devicons/ubuntu/plain-wordmark";
import Html5Icon from "react-devicons/html5/original-wordmark";
import Css3Icon from "react-devicons/css3/original-wordmark";
import VSCodeIcon from "react-devicons/vscode/original-wordmark";
import SassOriginalIcon from "react-devicons/sass/original";
import { useMediaQuery } from "@react-hook/media-query";
import media from "../styles/_media.module.scss";

function Skills({ selfRef }) {
	let iconSize;
	const isLaptop = useMediaQuery(`screen and (min-width: ${media.lg})`);
	const isTab = useMediaQuery(
		`screen and (min-width: ${media.md}) and (max-width: ${media.lg})`
	);

	if (isLaptop) {
		iconSize = "55%";
	} else if (isTab) {
		iconSize = "65%";
	} else iconSize = "75%";

	const iconList = [
		{ DevIcon: <CIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <CppIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <PythonIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <Html5Icon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <Css3Icon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <JavascriptIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <ReactIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <GitIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <GithubIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <FlutterIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <MatlabIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <TensorflowIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <SQLIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <PandasIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <NumpyIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <UbuntuIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <VSCodeIcon size={iconSize} className="skills-icon" /> },
		{ DevIcon: <SassOriginalIcon size={iconSize} className="skills-icon" /> },
	];

	return (
		<section id="skills" ref={selfRef}>
			<h3 className="title">Skills</h3>
			<div className="sized-box"></div>
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
