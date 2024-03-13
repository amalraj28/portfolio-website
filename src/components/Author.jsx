import { aboutMe } from "../constants/exports";
import AuthorName from "./AuthorName";

function Author() {
	return (
		<div className="author">
				<AuthorName />
			<div style={{display: 'flex'}}>
				<p className="aboutMe">
					{aboutMe}
				</p>
				<div className="image">
					<img src="src\assets\Amal Raj.jpg" width={150} height={200} alt="Picture of author" />
				</div>
						</div>
			</div>
	);
}

export default Author;
