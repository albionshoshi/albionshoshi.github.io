import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <body className="contBod">
        <div className="contDiv">
            <h1 className="contactTitle">Contact Me</h1>
            <a href="https://www.linkedin.com/in/albion-shoshi-334182252/">
                <img className= "LinkedIn" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"/>
            </a>
            <a href="https://github.com/albionshoshi">
                <img className = "GHub" src="/ghubby.png"/>
            </a>
        </div>
        </body>
    )
}

export default Contact;
