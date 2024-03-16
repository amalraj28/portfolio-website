import Author from "./components/Author";
import Contact from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
	return (
		<div>
			<Navbar />
			<Author />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
