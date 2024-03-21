import loaderIcon from "../assets/loader.svg";
import "../styles/styles.scss"

function Loader() {
	return (
		<img src={loaderIcon} className="spinner"/>
	);
}

export default Loader;
