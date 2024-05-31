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
	const [state, dispatch] = useReducer(reducer, initState);
	const extraClasses = "current";

	return (
		<>
			<nav
				className="navbar navbar-expand-lg fixed-top"
				data-bs-theme="dark"
				style={{ top: "-0.20svh" }}
				ref={compRefs.Navbar}
			>
				<div className="container-fluid">
					<div className="navbar-header col-md-6">
						<a
							className="navbar-brand"
							tabIndex={-1}
							onClick={() => handleScroll(compRefs.Navbar)}
						>
							Amal Raj
						</a>
					</div>
					<button
						className="navbar-toggler"
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
									<a href="#" target="_blank" className="nav-link">
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
										className={`nav-link ${state.skills && extraClasses}`}
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
										className={`nav-link ${state.projects && extraClasses}`}
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
										className={`nav-link ${state.contact && extraClasses}`}
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
