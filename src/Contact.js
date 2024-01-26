import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [formErrors, setFormErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("event data", event)

    // Email service configuration
    const serviceId = "service_hxwwa4r";
    const templateId = "template_78fl7ph";
    const userId = 'gGquiM8EcoFoabrPW';

    // Get the form values
    const fullName = event.target["full-name"].value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const subject = event.target.subject.value;

    // Form validation
    const errors = {
      fullName: fullName.trim() === "" ? "Full name is required" : "",
      email: email.trim() === "" ? "Email is required" : "",
      subject: subject.trim() === "" ? "Subject is required" : "",
      message: message.trim() === "" ? "Message is required" : "",
    };

    setFormErrors(errors);

    // Check if there are any validation errors
    if (Object.values(errors).some((error) => error !== "")) {
      return;
    }

    // Prepare the email parameters
    const templateParams = {
      from_name: fullName,
      from_email: email,
      message: message,
      subject: subject,
    };

    try {
      // Send the email
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      console.log("Email sent successfully!", response);

      // Clear the form fields
      event.target.reset();

      // Show a success message to the user
      alert("Thank you for your message! We will get back to you soon.");
    } catch (error) {
      console.error("Error sending email:", error);

      // Show an error message to the user
      alert(
        "An error occurred while sending the message. Please try again later."
      );
    }
  };

  return (
    <div>
      <section className="container contact" id="contact">
        <div className="contact-container">
          <div className="main-title">
            <h2>
              Contact <span>Me</span>
              <span className="bg-text">Contact</span>
            </h2>
          </div>
          <div className="contact-content-con">
            <div className="left-contact">
              <h4>Contact me here</h4>
              <p>These are my official contact details</p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Location</span>
                  </div>
                  <p>: Nairobi, Kenya</p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                    <span>Email</span>
                  </div>
                  <p>
                    <span>: johnckaris@gmail.com</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-user-graduate"></i>
                    <span>Education</span>
                  </div>
                  <p>
                    <span>: Kisii University, Main Campus</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-user-graduate"></i>
                    <span>Mobile Number</span>
                  </div>
                  <p>
                    <span>: 0795983399</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <i className="fas fa-globe-africa"></i>
                    <span>Languages</span>
                  </div>
                  <p>
                    <span>: German, English, Swahili</span>
                  </p>
                </div>
              </div>
              <div className="contact-icons">
                <div className="contact-icon">
                  <a
                    href="https://www.linkedin.com/in/john-chege-diversify/"
                    target="_blank" rel="noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                  <a href="https://github.com/jaydto" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                  <a href="/#" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                  <a href="/#" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                  {/* eslint-disable-line jsx-a11y/anchor-is-valid */}

                  <a href="/#" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube"></i>
                  </a>
                  {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
                </div>
              </div>
            </div>
            <div className="right-contact">
              <form
                className="contact-form"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="input-control i-c-2">
                  <input
                    type="text"
                    id="name"
                    name="full-name"
                    required
                    placeholder="YOUR NAME"
                    onChange={() =>
                      setFormErrors({ ...formErrors, fullName: "" })
                    }
                  />
                  {formErrors.fullName && (
                    <p className="error">{formErrors.fullName}</p>
                  )}

                  <input
                    type="email"
                    id="to"
                    name="email"
                    required
                    placeholder="YOUR EMAIL"
                    onChange={() => setFormErrors({ ...formErrors, email: "" })}
                  />
                  {formErrors.email && (
                    <p className="error">{formErrors.email}</p>
                  )}
                </div>
                <div className="input-control">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="ENTER SUBJECT"
                    onChange={() =>
                      setFormErrors({ ...formErrors, subject: "" })
                    }
                  />
                  {formErrors.subject && (
                    <p className="error">{formErrors.subject}</p>
                  )}
                </div>
                <div className="input-control">
                  <textarea
                    id="body"
                    cols="15"
                    name="message"
                    rows="8"
                    placeholder="Message Here..."
                    onChange={() =>
                      setFormErrors({ ...formErrors, message: "" })
                    }
                  ></textarea>
                  {formErrors.message && (
                    <p className="error">{formErrors.message}</p>
                  )}
                </div>
                <div className="submit-btn">
                  <button type="submit" className="main-btn w-100 btn-warning">
                    <span className="btn-text text-dark">Send Email</span>
                    <span className="btn-icon">
                      <i className="fas fa-upload"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
