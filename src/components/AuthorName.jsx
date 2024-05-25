import TypeWriter from "./TypeWriter";
import { jobs } from "../constants/exports";

function AuthorName() {
	return (
		<div className="author-name col-lg-5">
			<h3 className="name-text ">Hello, It&#39;s Me <br /></h3>
			<h1>Amal Raj!</h1>
			<div className="typewriter-text">
				<h3>And I&#39;m a <span className="typewritter-span"> <TypeWriter jobs={jobs} /></span></h3>
			</div>
			
		</div>
	);
}

export default AuthorName;
