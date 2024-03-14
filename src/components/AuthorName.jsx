import TypeWriter from "./TypeWriter";
import { jobs } from "../constants/exports";

function AuthorName() {
	return (
		<div className="author-name">
			<h2 className="name-text">Heyyy, This is Amal Raj!</h2>
			<div className="typewriter-text">
				I&#39;m a <TypeWriter jobs={jobs}/>
			</div>
		</div>
	);
}

export default AuthorName;
