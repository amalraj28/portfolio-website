import { useMediaQuery } from "@react-hook/media-query";
import { SocialIcon } from "react-social-icons";
import media from "../styles/_media.module.scss";

function SocialMedia({ url, id }) {
	let height;
	const xl = useMediaQuery(`only screen and (min-width: ${media["xl"]})`);
	const lg = useMediaQuery(`only screen and (min-width: ${media["lg"]}) and (width < ${media["xl"]})`);
	const md = useMediaQuery(`only screen and (min-width: ${media["md"]}) and (width < ${media["lg"]})`)
	const sm = useMediaQuery(`only screen and (min-width: ${media["sm"]}) and (width < ${media["md"]})`)

	height = xl ? 50 : lg ? 50 : md ? 45 : sm ? 35 : 28;

	return (
		<div className="icon">
			<SocialIcon
				url={url}
				id={id}
				style={{height: height, width: height}}
				target="_blank"
			/>
		</div>
	);
}

export default SocialMedia;
