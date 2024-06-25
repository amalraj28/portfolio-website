import { skills } from "../constants/exports";
import "../styles/styles.scss";

function NewSkills({ heading }) {
	return (
		<div className="new-skills">
			<h3 className="skill-heading">{heading}</h3>

			{skills[heading].map(({ name, Icon }, index) => (
				<div key={index}>
					<Icon classes="skill-icon foreground-image" />
					<Icon classes="skill-icon background-image" />
					<p className="skill-name">{name}</p>
				</div>
			))}
		</div>
	);
}

export default NewSkills;
