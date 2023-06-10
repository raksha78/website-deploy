import Form from "./Form.jsx";
import ContactDetails from "./ContactDetails.jsx";
import "./Contact.css";

function Contact() {
     return (
          <div className="contact-page">
               <div className="description">
                    <span className="title">Get in touch</span>
                    <br />
               </div>
               <div className="contact-holder">
                    <ContactDetails />
                    <Form />
               </div>
          </div>
     );
}

export default Contact;