import React from "react";
import Author from "./components/Author";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import NewSkills from "./components/NewSkills";

function App() {
	const components = [
		"Navbar",
		"Author",
		"Skills",
		"Projects",
		"Contact",
		"Footer",
	];

	const refObjects = Object.fromEntries(
		components.map((item) => [item, React.createRef()])
	);

	return (
		<div>
			{/* <Navbar compRefs={refObjects} />
			<Author selfRef={refObjects.Author} />
			<div className="sized-box" /> */}
			{/* <Skills selfRef={refObjects.Skills} /> */}
			<NewSkills selfRef={refObjects.Skills}/>
			{/* <div className="sized-box" />
			<Projects selfRef={refObjects.Projects} />
			<div className="sized-box" />
			<div className="sized-box" />
			<Contact selfRef={refObjects.Contact} />
			<Footer selfRef={refObjects.Footer} /> */}
		</div>
	);
}

export default App;
