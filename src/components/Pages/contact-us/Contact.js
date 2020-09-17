import React from 'react';



export default function Contact() {
    return (
        <div className="contact-section">
        <div className="border"></div>
        <h1><span>Contact Us</span></h1>
        <form className="contact-form" action="index.html" method="POST">
            <input type="text" className="contact-form-text" placeholder="Your name"/>
            <input type="email" className="contact-form-text" placeholder="Your email"/>
            <input type="text" className="contact-form-text" placeholder="Your text"/>
            <textarea className="contact-form-text" placeholder="Your message"></textarea>
            <input  type="submit" className="contact-form-btn" value="Send"/>
        </form>
    </div>
    )
}
