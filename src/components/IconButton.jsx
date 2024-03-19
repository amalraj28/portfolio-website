import "../styles/styles.scss";

function IconButton({ props }) {
	const { label, DevIcon } = props;

	return (
		<div>
			{DevIcon}
			{label !== undefined && <div className="skill-label">{label}</div>}
		</div>
	);
}

export default IconButton;
