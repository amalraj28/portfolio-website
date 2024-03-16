import { useState } from "react";
import { emailID } from "../constants/exports";

function Contact() {
	const [formItems, setFormItems] = useState({
		name: "",
		email: "",
		message: "",
		subject: "",
	});

	const formHandler = (e) => {
		e.preventDefault();
		alert(`${e.formItems.name}: ${e.email}: ${e.message}`);
	};
	return (
		<div className="form-div">
			<h3 className="title" id="form-title">
				Drop a Message
			</h3>
			<form className="form-components" onSubmit={formHandler}>
				<input
					placeholder="Your name"
					value={formItems["name"]}
					onChange={(e) => setFormItems({ ...formItems, name: e.target.value })}
					type="text"
					className="name-input"
					required
				/>
				<div className="sized-box"></div>
				<input
					placeholder="Email ID"
					type="email"
					value={formItems["email"]}
					onChange={(e) =>
						setFormItems({ ...formItems, email: e.target.value })
					}
					className="email-input"
					required
				/>
				<div className="sized-box"></div>
				<input
					placeholder="Subject of mail"
					type="text"
					value={formItems["subject"]}
					onChange={(e) =>
						setFormItems({ ...formItems, subject: e.target.value })
					}
					className="subject-input"
					required
				/>
				<div className="sized-box"></div>
				<textarea
					placeholder="Message"
					type="text"
					rows={7}
					value={formItems["message"]}
					onChange={(e) =>
						setFormItems({ ...formItems, message: e.target.value })
					}
					className="message-input"
					required
				/>
				<div className="sized-box"></div>
				<button type="submit">
					<a href={`mailto:${emailID}?subject=${formItems["subject"]}&body=${formItems["message"]}`}>
						Send Message
					</a>
				</button>
			</form>
		</div>
	);
}

export default Contact;
