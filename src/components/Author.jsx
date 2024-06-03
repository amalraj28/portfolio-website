import AuthorName from "./AuthorName";
import { aboutMe } from "../constants/exports";
import { useMediaQuery } from "@react-hook/media-query";
import media from "../styles/_media.module.scss";

function Author({ selfRef }) {
	const extraClassName = "row";
	const isLaptop = useMediaQuery(`screen and (min-width: ${media.lg})`);

	return (
		<section className="author" ref={selfRef}>
			<div className={`author-details ${isLaptop && extraClassName}`}>
				<AuthorName />
				{isLaptop && (
					<div className="image col-lg-5">
						<img src="/assets/Amal Raj.jpg" alt="Picture of author" />
					</div>
				)}
				<div className="author-description">
					<p className="about-me">{aboutMe}</p>
				</div>
			</div>
		</section>
	);
}

export default Author;
