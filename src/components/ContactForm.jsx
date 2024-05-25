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
    <div className="">
      <form onSubmit={sendEmail}>
        <h3 className="title" id="form-title">
          Drop a Message
        </h3>
        <div className="form-row">
          <div className="form-group col-md-6 me-1">
            <input
              className="form-control input-form"
              id="inputEmail4"
              placeholder="Your Name"
              value={formItems["name"]}
              onChange={(e) =>
                setFormItems({ ...formItems, name: e.target.value })
              }
              type="text"
              required
            />
          </div>
          <div className="form-group col-md-6 me-1">
            <input
              type="emai"
              className="form-control email-input input-form"
              id="inputPassword4"
              placeholder="Email ID"
              value={formItems["email"]}
              onChange={(e) =>
                setFormItems({ ...formItems, email: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="form-group">
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
        </div>
        <div className="form-group">
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
        </div>
        <button className="btn btn-primary input-form" type="submit">
          {!loading ? "Send Message" : <Loader />}
        </button>
      </form>
    </div>
  );
}

export default Contact;
