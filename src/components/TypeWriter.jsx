import { ReactTyped } from "react-typed";
import PropTypes from "prop-types";

function TypeWriter({ jobs }) {
	return (
		<span>
			<ReactTyped
				strings={jobs}
				typeSpeed={100}
				loop={true}
				backSpeed={100}
				showCursor={true}
			/>
		</span>
	);
}

TypeWriter.propTypes = {
	jobs: PropTypes.arrayOf(PropTypes.string),
};

export default TypeWriter;
