import AuthorName from "./AuthorName";
import { aboutMe } from "../constants/exports";

function Author({ selfRef }) {
	return (
		<section className="author" ref={selfRef}>
			<div className="author-details">
				<AuthorName />
				<div className="author-description">
					<p className="about-me">{aboutMe}</p>
				</div>
			</div>
		</section>
	);
}

export default Author;
