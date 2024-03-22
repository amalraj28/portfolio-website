function Navbar() {
	return (
		<>
			<nav
				className="navbar navbar-expand-lg bg-dark fixed-top"
				data-bs-theme="dark"
				style={{top: "-0.20svh"}}
			>
				<div className="container-fluid">
					<div className="navbar-header">
						<a href="#" className="navbar-brand" tabIndex={-1}>
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
						className="offcanvas offcanvas-end"
						aria-labelledby="offcanvasNavbarLabel"
						id="offcanvasNavbar"
					>
						<div className="offcanvas-header">
							<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
								Offcanvas
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							></button>
						</div>
						<div className="offcanvas-body">
							<ul className="nav navbar-nav">
								<li className="nav-item">
									<a href="#" className="nav-link" aria-current="page">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a href="#" className="nav-link">
										Resume
									</a>
								</li>
								<li className="nav-item">
									<a href="#skills" className="nav-link">
										Skills
									</a>
								</li>
								<li className="nav-item">
									<a href="#projects" className="nav-link">
										Projects
									</a>
								</li>
								<li className="nav-item">
									<a href="#contact" className="nav-link">
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<div style={{paddingBottom: "70px"}}></div>
		</>
	);
}

export default Navbar;
