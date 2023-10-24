import { h } from 'preact';

function Contact() {
    return (
        <div className="text container" data-id="contact">
            <div className="text__content text__content--contact">
                <a href="mailto:hi@stanstrawa.dev" className="contact-link"> hi@stanstrawa.dev</a>
                <a href="https://www.linkedin.com/in/stan-strawa/" className="contact-link" target="_blank"> linkedin.com</a>
                <a href="https://github.com/Stanjo84" className="contact-link" target="_blank"> github.com</a>
            </div>
        </div>
    );
}

export default Contact;
