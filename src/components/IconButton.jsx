import "../styles/styles.scss";

function IconButton({ props, iconSize }) {
	const { label, DevIcon } = props;
	console.log(label);
	return (
		<div>
			{DevIcon({ size: iconSize })}
			<div className="skill-label">{label}</div>
		</div>
	);
}

export default IconButton;
