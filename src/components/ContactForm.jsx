import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import Loader from "./Loader";

function Contact({ selfRef }) {
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
			.catch((err) => {
				console.log(err);
				alert("You email could not be send :(");
			})
			.finally(() => setLoading(false));
	};

	return (
		<div className="form-components" rel={selfRef}>
			<form onSubmit={sendEmail}>
				<h3 className="title" id="form-title">
					Drop a Message
				</h3>
				<div style={{ paddingTop: "10px" }} />
				<div className="form-group">
					<input
						className="form-control "
						placeholder="Your Name"
						value={formItems["name"]}
						onChange={(e) =>
							setFormItems({ ...formItems, name: e.target.value })
						}
						type="text"
						required
					/>
					<div style={{ paddingTop: "5px" }} />
					<input
						type="email"
						className="form-control email-input input-form"
						placeholder="Email ID"
						value={formItems["email"]}
						onChange={(e) =>
							setFormItems({ ...formItems, email: e.target.value })
						}
						required
					/>
					<div style={{ paddingTop: "5px" }} />
					<input
						placeholder="Subject of mail"
						type="text"
						value={formItems["subject"]}
						onChange={(e) =>
							setFormItems({ ...formItems, subject: e.target.value })
						}
						className="subject-input form-control input-form"
						required
					/>
					<div style={{ paddingTop: "5px" }} />
					<textarea
						placeholder="Message"
						type="text"
						rows={7}
						value={formItems["message"]}
						onChange={(e) =>
							setFormItems({ ...formItems, message: e.target.value })
						}
						className="message-input form-control input-form"
						required
					/>
					<div style={{ paddingTop: "7px" }} />
					<button className="btn btn-primary input-form" type="submit">
						{!loading ? "Send Message" : <Loader />}
					</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
