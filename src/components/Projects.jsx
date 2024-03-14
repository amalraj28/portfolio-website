import { projects } from "../constants/exports";
import "../styles/styles.scss";
import Project from "./Project";

function Projects() {
	return (
		<div className="projects">
      <h2 className="projects-title">projects</h2>
			{Object.keys(projects).map((key, idx) => 
				<Project key={idx} project={projects[key]} />
			)}
		</div>
	);
}

export default Projects;
