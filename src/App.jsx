import Author from "./components/Author";
import Contact from "./components/ContactForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
	return (
		<div>
			<Navbar />
			<Author />
			<Skills />
			<div className="sized-box" />
			<div className="sized-box" />
			<div className="sized-box" />
			<Projects />
			<div className="sized-box" />
			<div className="sized-box" />
			<div className="sized-box" />
			<Contact />
			<div className="sized-box" />
			
			<Footer />
		</div>
	);
}

export default App;
