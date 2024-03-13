import "../styles/styles.scss";
import { PropTypes } from "prop-types";

function Project({ project }) {
	const { name, thumbnail, liveLink, github } = project;

	return (
		<div className="project-item">
			<img src={thumbnail} width="50%" />
			<div className="item-description" >
				<h3 className="title">{name}</h3>
				{liveLink !== undefined && (
					<a href={`${liveLink}`} target="_blank" rel="noopener noreferrer">
						<button type="button">Live Link</button>
					</a>
				)}

				<a href={github} target="_blank" rel="noopener noreferrer">
					<button type="button">GitHub Link</button>
				</a>
			</div>
		</div>
	);
}

Project.propTypes = {
	project: PropTypes.object,
};

export default Project;
