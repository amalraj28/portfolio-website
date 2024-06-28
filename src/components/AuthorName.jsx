import TypeWriter from "./TypeWriter";
import { jobs } from "../constants/exports";
import "../styles/styles.scss";

function AuthorName() {
	return (
		<div className="author-name">
			<div className="text-content">
				<h3 className="name-text">
					Hello, It&#39;s Me <br />
				</h3>
				<h1>Amal Raj!</h1>
				<h3 className="typewriter-text">
					And I&#39;m a{" "}
					<span className="typewriter-span">
						<TypeWriter jobs={jobs} />
					</span>
				</h3>
			</div>
			<div className="image">
				<img
					src="/assets/Amal Raj.jpg"
					alt="Picture of author"
				/>
			</div>
		</div>
	);
}

export default AuthorName;
