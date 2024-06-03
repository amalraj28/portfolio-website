import { useReducer } from "react";
import { handleScroll } from "../constants/exports";

const initState = {
	skills: false,
	projects: false,
	contact: false,
};

const reducer = (currState, action) => {
	switch (action) {
		case "skills":
			return { ...initState, skills: true };
		case "projects":
			return { ...initState, projects: true };
		case "contact":
			return { ...initState, contact: true };
		default:
			return currState;
	}
};

function Navbar({ compRefs }) {
	const [, dispatch] = useReducer(reducer, initState);

	return (
		<>
			<nav
				className="navbar navbar-expand-lg fixed-top"
				data-bs-theme="dark"
				style={{ top: "-0.20svh" }}
				ref={compRefs.Navbar}
			>
				<div className="container-fluid">
					<button
						className="navbar-toggler ms-auto"
						data-bs-toggle="offcanvas"
						type="button"
						data-bs-target="#offcanvasNavbar"
						tabIndex={-1}
						aria-controls="offcanvasNavbar"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="offcanvas offcanvas-start col-md-6"
						aria-labelledby="offcanvasNavbarLabel"
						data-bs-backdrop="true"
						data-bs-scroll="true"
						id="offcanvasNavbar"
						data-bs-keyboard="true"
						style={{ width: "50%", opacity: 0.9 }}
					>
						<div className="offcanvas-body navitem">
							<ul className="nav navbar-nav" style={{ marginLeft: "auto" }}>
								<li className="nav-item">
									<a
										className="nav-link"
										onClick={() => handleScroll(compRefs.Navbar)}
									>
										Home
									</a>
								</li>
								<li className="nav-item">
									<a
										href={import.meta.env.VITE_RESUME}
										target="_blank"
										className="nav-link"
										onClick={() => dispatch("resume")}
									>
										Resume
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										onClick={() => {
											handleScroll(compRefs.Skills);
											dispatch("skills");
										}}
									>
										Skills
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										onClick={() => {
											handleScroll(compRefs.Projects);
											dispatch("projects");
										}}
									>
										Projects
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										onClick={() => {
											handleScroll(compRefs.Contact);
											dispatch("contact");
										}}
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div style={{ paddingBottom: "70px" }}></div>
		</>
	);
}

export default Navbar;
