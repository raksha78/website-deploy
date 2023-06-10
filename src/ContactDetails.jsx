import "./ContactDetails.css";
import ContactList from "./ContactList.js";
import Resume from "./Rakshitha_Gururaj.pdf";

const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

function handleClick(e, id) {
    if (id === "1") {
        e.preventDefault();
        handleDownload();
    }
}

function ContactDetails() {
    const list = ContactList.map(
        (item, index) => {
            return (
                <li className="contact-list-item" key={index}>
                    <i className={`contact-list-icon ${item.icon}`}></i>
                    <div className="item-list">
                        <span className="item-title"></span>{item.title}
                        <a className="item-text" target="_blank" 
                        rel="noopener noreferrer" href={item.link} onClick=
                            {(e) => handleClick(e, item.id)}
                        >
                            {item.text}
                        </a>
                    </div>
                </li>
            );
        }
    );

    return (
        <ul className="contact-list">
            {list}
        </ul>
    );
}

export default ContactDetails;