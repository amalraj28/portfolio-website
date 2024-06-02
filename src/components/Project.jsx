import "../styles/styles.scss";
import { PropTypes } from "prop-types";

function Project({ project }) {
  const { name, thumbnail, liveLink, github, description } = project;

  return (
    <div className="project-item">
      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={thumbnail} alt={description} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            {liveLink !== undefined ? (
              <a href={`${liveLink}`} target="_blank" rel="noopener noreferrer">
                <button type="button">Live Link</button>
              </a>
            ) : (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button type="button">GitHub Link</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
