import TypeWriter from "./TypeWriter";
import { jobs } from "../constants/exports";
import { useMediaQuery } from "@react-hook/media-query";
import media from "../styles/_media.module.scss";

function AuthorName() {
	const isPhone = useMediaQuery(`screen and (max-width: ${media.lg})`);

	return (
		<div className="author-name col-lg-5">
			<div>
				<h3 className="name-text">
					Hello, It&#39;s Me <br />
				</h3>
				<h1>Amal Raj!</h1>
				<div className="typewriter-text">
					<h3>
						And I&#39;m a{" "}
						<span className="typewritter-span">
							{" "}
							<TypeWriter jobs={jobs} />
						</span>
					</h3>
				</div>
			</div>
			{isPhone && (
				<div
					className="image"
					style={{
						gridColumnStart: 2,
						gridColumnEnd: 3,
						justifyContent: "end",
					}}
				>
					<img src="/assets/Amal Raj.jpg" alt="Picture of author" />
				</div>
			)}
		</div>
	);
}

export default AuthorName;
