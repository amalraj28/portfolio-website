import { aboutMe } from "../constants/exports";
import AuthorName from "./AuthorName";

function Author({ selfRef }) {
	return (
		<section className="author" ref={selfRef}>
			<AuthorName />
			<div className="sized-box"></div>
			<div className="author-description">
				<p className="about-me">{aboutMe}</p>
				<div className="image">
					<img
						src="src\assets\Amal Raj.jpg"
						width={150}
						height={200}
						alt="Picture of author"
					/>
				</div>
			</div>
		</section>
	);
}

export default Author;
