import { aboutMe } from "../constants/exports";
import AuthorName from "./AuthorName";

function Author() {
	return (
		<section className="author">
			<AuthorName />
			<div className="author-description" style={{ display: "flex" }}>
				<p className="aboutMe">{aboutMe}</p>
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
