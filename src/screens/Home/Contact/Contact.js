import { useState } from 'react';
import Button from './Button/Button';
import './Contact.scss';

const Contact = (
        {
            contact = "Contact Me",
            contactText = "Fill up the form and I will be in contact with you in no time!",
            phone,
            email
        }
    ) => {
        const [name, setName] = useState('');
        const [senderMail, setSenderMail] = useState('');
        const [message, setMessage] = useState('');
        
        const onSubmit = (e) => {
            e.preventDefault();
            console.log(name, senderMail, message)
        }
        return (
            <div className="contact-container">
                <div className="contact-details">
                    <div>
                        <span className="contact-title">{contact}</span>
                        <span className="contact-subtitle">{contactText}</span>
                        <div className="contact-button-list">
                            {email && <Button text={email} type="email" />}
                            {phone && <Button text={phone} type="phone" />}
                        </div>
                    </div>
                </div>
                <div className="contact-form">
                    <div className="contact-card">
                        <form onSubmit={onSubmit}>
                            <div className="contact-card-input-container">
                                <span>Your Name</span>
                                <input value={name} onChange={e => setName(e.target.value)} className="contact-input" />
                            </div>

                            <div className="contact-card-input-container">
                                <span>Email</span>
                                <input value={senderMail} onChange={e => setSenderMail(e.target.value)} className="contact-input" />
                            </div>

                            <div className="contact-card-input-container">
                                <span>Message</span>
                                <textarea value={message} onChange={e => setMessage(e.target.value)} className="contact-input" />
                            </div>
                            <input className="contact-form-button" type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Contact;