import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";

function Contact() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		emailjs.init({
			publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
			privateKey: import.meta.env.VITE_EMAILJS_PRIVATE_KEY,
		});
	}, []);

	const [formItems, setFormItems] = useState({
		name: "",
		email: "",
		message: "",
		subject: "",
	});

	const messageFormat = `Subject: ${formItems["subject"]} \n\n${formItems["message"]}`;

	const templateParams = {
		senderName: formItems["name"],
		senderEmail: formItems["email"],
		message: messageFormat,
		myEmail: import.meta.env.VITE_MY_EMAIL,
	};

	const sendEmail = async (e) => {
		e.preventDefault();
		setLoading(true);

		await emailjs
			.send(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				templateParams
			)
			.then((response) => {
				console.log(response);
				alert("Your email was sent successfully :)");
			})
			.catch((TypeError) => {
				console.log(TypeError);
				alert("You need to be connected to the internet to send email");
			})
			.catch((err) => {
				console.log(err);
				alert("You email could not be send :(");
			})
			.finally(() => setLoading(false));
	};

	return (
		<section className="form-div" id="contact">
			<h3 className="title" id="form-title">
				Drop a Message
			</h3>
			<form className="form-components" onSubmit={sendEmail}>
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
				<button type="submit">{!loading ? "Send Message" : <Loader />}</button>
			</form>
		</section>
	);
}

export default Contact;
