import { projects } from "../constants/exports";
import "../styles/styles.scss";
import Project from "./Project";

function Projects({selfRef}) {
	return (
		<section id="projects" ref={selfRef}>
			<h2 className="title">projects</h2>
			<div className="sized-box"></div>
			<div className="project-items">
				{Object.keys(projects).map((key, idx) => (
					<Project key={idx} project={projects[key]} />
				))}
			</div>
		</section>
	);
}

export default Projects;
