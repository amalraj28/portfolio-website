import React from "react";
import Author from "./Author";
import TypeWriter from "./TypeWriter";
import { jobs } from "../constants/exports";

function AuthorName() {
	return (
		<div>
			<span className="name-text">Heyyy, This is Amal Raj!</span>
			<div>
				I&apos;m a <TypeWriter jobs={jobs}/>
			</div>
		</div>
	);
}

export default AuthorName;
