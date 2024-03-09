import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";

function TypeWriter({jobs}) {
	return (
		<span>
			<ReactTyped
				strings={jobs}
				typeSpeed={100}
				loop={true}
				backSpeed={100}
				showCursor={true}
			/>
		</span>
	);
}

export default TypeWriter;
