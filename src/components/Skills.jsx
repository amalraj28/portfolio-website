import IconButton from "./IconButton";
import { devIcons } from "../constants/exports";

function Skills() {
	const { iconSize, iconList } = devIcons;
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
