import { PropTypes } from "prop-types";
import "../styles/styles.scss";

function Project({ project }) {
	const { name, thumbnail, liveLink, github, description } = project;

	return (
		<div className="project-item">
			<div>
				<img
					src={thumbnail}
					alt={description}
					className="change-image-size"
				/>
				<div className="card-body">
					<h5 className="card-title" id='project-title'>{name}</h5>
					{liveLink !== undefined ? (
						<a href={`${liveLink}`} target="_blank" rel="noopener noreferrer">
							<button type="button" className="project-button">Live Link</button>
						</a>
					) : (
						<a href={github} target="_blank" rel="noopener noreferrer">
							<button type="button" className="project-button">GitHub Link</button>
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

Project.propTypes = {
	project: PropTypes.object,
};

export default Project;
