import emailjs from 'emailjs-com';

const Contact = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        
        //email service configuration        
        const serviceId = 'service_amag3uh';
        const templateId = 'template_7jl2198';
        const userId = '2zFpyN39uAc7MzBq5';

        // Get the form values
        const fullName = event.target['full-name'].value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        const subject = event.target.subject.value;

        // Prepare the email parameters
        const templateParams = {
            from_name: fullName,
            from_email: email,
            message: message,
            subject:subject
        };

        // Send the email
        emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
            console.log('Email sent successfully!', response);
            // Clear the form fields
            event.target.reset();
            // Show a success message to the user
            alert('Thank you for your message! We will get back to you soon.');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            // Show an error message to the user
            alert('An error occurred while sending the message. Please try again later.');
        });
    }
    return ( 
        <div>
            <section class="container contact" id="contact">
                <div class="contact-container">
                    <div class="main-title">
                        <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                    </div>
                    <div class="contact-content-con">
                        <div class="left-contact">
                            <h4>Contact me here</h4>
                            <p>
                            These are my official contact details
                            </p>
                            <div class="contact-info">
                                <div class="contact-item">
                                    <div class="icon">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <span>Location</span>
                                    </div>
                                    <p>
                                        : Nairobi, Kenya
                                    </p>
                                </div>
                                <div class="contact-item">
                                    <div class="icon">
                                        <i class="fas fa-envelope"></i>
                                        <span>Email</span>
                                    </div>
                                    <p>
                                        <span>: otitrevor450@gmail.com</span>
                                    </p>
                                </div>
                                <div class="contact-item">
                                    <div class="icon">
                                        <i class="fas fa-user-graduate"></i>
                                        <span>Education</span>
                                    </div>
                                    <p>
                                        <span>: Kisii University, Main Campus</span>
                                    </p>
                                </div>
                                <div class="contact-item">
                                    <div class="icon">
                                        <i class="fas fa-user-graduate"></i>
                                        <span>Mobile Number</span>
                                    </div>
                                    <p>
                                        <span>: 0795781794</span>
                                    </p>
                                </div>
                                <div class="contact-item">
                                    <div class="icon">
                                        <i class="fas fa-globe-africa"></i>
                                        <span>Languages</span>
                                    </div>
                                    <p>
                                        <span>: French, English, Dholuo</span>
                                    </p>
                                </div>
                            </div>
                            <div class="contact-icons">
                                <div class="contact-icon">
                                    <a href="https://www.facebook.com/trevor.oti.5" target="_blank">
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.instagram.com/trevor_augeaner/" target="_blank">
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://github.com/Trevor-crypto243" target="_blank">
                                        <i class="fab fa-github"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCRS76RPIOG7GmsuZ8vQmV9w/" target="_blank">
                                        <i class="fab fa-youtube"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/trevor-ogina-150937213/" target="_blank">
                                        <i class="fab fa-linkedin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="right-contact">
                        <form class="contact-form"
                        role='form' method='post' action='#'
                        onSubmit={handleSubmit}
                        >
                            <div class="input-control i-c-2">
                                <input type="text" id="name" name="full-name" required placeholder="YOUR NAME"/>
                                <input type="email" id="to"  name="email" required placeholder="YOUR EMAIL"/>
                            </div>
                            <div class="input-control">
                                <input type="text" id="subject" name="subject" required placeholder="ENTER SUBJECT"/>
                            </div>
                            <div class="input-control">
                                <textarea id="body" cols="15" name="message"  rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div class="submit-btn">
                                <a type="submit"  class=" main-btn w-100">
                                <span class="btn-text text-dark">Send Email</span>

                                <span class="btn-icon"><i class="fas fa-upload"></i></span>
                                
                                </a>
                                {/* <a href="#" class="main-btn">
                                        <span class="btn-text">Download CV</span>
                                        <span class="btn-icon"><i class="fas fa-download"></i></span>
                                    </a> */}
                            </div>
                        </form>                        
                        </div>
                    </div>
                </div>
            </section>

        </div> 
    );
}
 
export default Contact;
