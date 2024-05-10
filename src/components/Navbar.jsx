import { handleScroll } from "../constants/exports";

function Navbar({ compRefs }) {
	return (
		<>
			<nav
				className="navbar navbar-expand-lg bg-dark fixed-top"
				data-bs-theme="dark"
				style={{ top: "-0.20svh" }}
				ref={compRefs.Navbar}
			>
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand" tabIndex={-1} onClick={() => handleScroll(compRefs.Navbar)}>
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
						className="offcanvas offcanvas-start"
						aria-labelledby="offcanvasNavbarLabel"
						data-bs-backdrop="false"
						data-bs-scroll="true"
						id="offcanvasNavbar"
						data-bs-keyboard="true"
						style={{width: "65%", opacity: 0.9}}
					>
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
								Amal Raj
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body">
							<ul className="nav navbar-nav" style={{ marginLeft: "auto" }}>
								<li className="nav-item">
									<a href="#" className="nav-link">
										Resume
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										onClick={() => {
											console.log(compRefs.Skills);
											handleScroll(compRefs.Skills);
										}}
									>
										Skills
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										onClick={() => handleScroll(compRefs.Projects)}
									>
										Projects
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										onClick={() => handleScroll(compRefs.Contact)}
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
