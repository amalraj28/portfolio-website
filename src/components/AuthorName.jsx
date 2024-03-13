import TypeWriter from "./TypeWriter";
import { jobs } from "../constants/exports";

function AuthorName() {
	return (
		<div>
			<h2 className="name-text">Heyyy, This is Amal Raj!</h2>
			<div>
				I&apos;m a <TypeWriter jobs={jobs}/>
			</div>
		</div>
	);
}

export default AuthorName;
