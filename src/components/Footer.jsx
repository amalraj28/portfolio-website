import SocialMedia from "./SocialMedia";
import { socialMediaID } from "../constants/exports";

function Footer() {
	return (
		<section className="footer">
			<span className="footer-text">
				Thank you for visiting my personal website.
			</span>
			<div className="social-media">
				{Object.keys(socialMediaID).map((item, idx) => {
					const baseURL = `https://www.${item}.com/`;
					return (
						<SocialMedia
							id={`${item}`}
							key={idx}
							url={`${baseURL}${socialMediaID[item]}`}
						/>
					);
				})}
			</div>
		</section>
	);
}

export default Footer;
