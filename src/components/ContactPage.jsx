function Contact() {
    const user = 'hi';
    const domain = 'stanstrawa';
    const tld = 'dev';

    const handleClick = (e) => {
        e.preventDefault();
        window.location.href = `mailto:${user}@${domain}.${tld}`;
    };

    return (
        <div className="text container" data-id="contact">
            <div className="text__content text__content--contact">
                <a href="#" onClick={handleClick} className={"contact-link"} aria-label="Send an email to hi at stanstrawa dot dev" rel={"nofollow"}>
                    hi[at]stanstrawa[dot]dev
                </a>
                <a href="https://www.linkedin.com/in/stan-strawa/" className={"contact-link"} target="_blank" rel={"noreferrer"}> linkedin.com</a>
                <a href="https://github.com/Stanjo84" className={"contact-link"} target="_blank" rel={"noreferrer"}> github.com</a>
                <a href="https://codepen.io/stanjo_1421/" className={"contact-link"} target="_blank" rel={"noreferrer"}> codepen.io</a>
            </div>
        </div>
    );
}

export default Contact;
