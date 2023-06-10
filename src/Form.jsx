import './Form.css';
import Button from './FormButton.jsx';
import { useState } from 'react';
import { useRef } from "react";

function Form() {
    const dialogRef = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [messageError, setMessageError] = useState(false);


    const nameChangeAction = (event) => {
        setName(event.target.value);
    };

    const emailChangeAction = (event) => {
        setEmail(event.target.value);
    };

    const subjectChangeAction = (event) => {
        setSubject(event.target.value);
    };

    const messageChangeAction = (event) => {
        setMessage(event.target.value);
    };

    const submitAction = (event) => {
        event.preventDefault();
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        console.log(validate());
        if (validate()) {
            dialogRef.current.showModal()
        }

    };

    const validate = () => {
        let nameError = "";
        let emailError = "";
        let messageError = "";

        if (!name) {
            nameError = true;
        }

        if (!email) {
            setEmailErrorMessage("Email address is missing");
            emailError = true;
        } else if (!email.includes("@")) {
            emailError = true;
            setEmailErrorMessage("Email address doesn't include @");
        }

        if (!message) {
            messageError = true;
        }


        setNameError(nameError);
        setEmailError(emailError);
        setMessageError(messageError);

        return !nameError && !emailError && !messageError;
    };

    return (
        <>
            <form className="form" onSubmit={submitAction}>
                <div className="form__field">
                    <div className="form__label--holder">
                        <label className="form__label" aria-label="name label" htmlFor="name">
                            <span>Name</span>
                        </label>
                        <span className="form__label--required">(required)</span>
                    </div>
                    <div className="form__input--holder">
                        <input
                            className="form__input"
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={nameChangeAction}
                        />
                        {nameError && <span className="form--error">Name is missing</span>}
                    </div>
                </div>
                <div className="form__field">
                    <div className="form__label--holder">
                        <label className="form__label" aria-label="email label" htmlFor="email">
                            <span>Email</span>
                        </label>
                        <span className="form__label--required">(required)</span>
                    </div>
                    <div className="form__input--holder">
                        <input
                            className="form__input"
                            id="email"
                            name="email"
                            type="text"
                            value={email}
                            onChange={emailChangeAction}
                        />
                        {emailError && < span className="form--error">{emailErrorMessage}</span>}
                    </div>
                </div>
                <div className="form__field">
                    <div className="form__label--holder">
                        <label className="form__label" aria-label="subject label" htmlFor="subject">
                            <span>Subject</span>
                        </label>
                    </div>
                    <div className="form__input--holder">
                        <input
                            className="form__input"
                            id="subject"
                            name="subject"
                            type="text"
                            value={subject}
                            onChange={subjectChangeAction}></input>
                    </div>
                </div>
                <div className="form__field">
                    <div className="form__label--holder">
                        <label className="form__label" aria-label="message label" htmlFor="message">
                            <span>Message</span>
                        </label>
                    </div>
                    <div className="form__input--holder">
                        <textarea className="form__message__input" id="message"
                            name="message" type="text" value={message} onChange={messageChangeAction}>
                        </textarea>
                        {messageError && < span className="form--error">Message is missing</span>}
                    </div>
                </div>
                <Button
                    aria-label="submit form"
                    className="form__submit"
                    type="submit"
                >
                    Send message
                </Button>
            </form>
            <dialog className="dialog" ref={dialogRef}>
                <span className="dialog__heading">Message sent successfully!</span>
                <Button
                    aria-label="close dialog"
                    className="dialog__close"
                    onClick={() => dialogRef.current.close()}
                >
                    Close
                </Button>
            </dialog>
        </>
    );
}

export default Form;