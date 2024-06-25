import { skills } from "../constants/exports";
import "../styles/styles.scss";
import SkillCategory from "./SkillCategory";

function Skills({ selfRef }) {
	return (
		<div className="skills" ref={selfRef}>
			<h3 className="title">Skills</h3>
			
			<div className="skill-grid">
				{Object.keys(skills).map((heading, idx) => (
					<SkillCategory key={idx} heading={heading} />
				))}
			</div>
		</div>
	);
}

export default Skills;
