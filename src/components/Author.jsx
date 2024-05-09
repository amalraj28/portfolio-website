import { aboutMe } from "../constants/exports";
import AuthorName from "./AuthorName";

function Author({selfRef}) {
	return (
		<section className="author" ref={selfRef}>
			<AuthorName />
			<div className="author-description">
				<div className="image">
					<img
						src="src\assets\Amal Raj.jpg"
						width={150}
						height={200}
						alt="Picture of author"
					/>
				</div>
				<p className="about-me">{aboutMe}</p>
			</div>
		</section>
	);
}

export default Author;
