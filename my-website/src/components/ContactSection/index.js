import React from 'react'
import { 
    ContactContainer,
    ContactContentWrapper,
    ContactHeader,
    ContactEmail,
    ContactLinksContainer
 } from './ContactElements'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

const ContactSection = () => {
    return (
        <ContactContainer id="contact">
            <ContactContentWrapper>
                <ContactHeader>Let's Get In Touch</ContactHeader>
                <ContactEmail> reneehammons29@gmail.com </ContactEmail>
                <ContactLinksContainer>
                    <a href="https://www.linkedin.com/in/renee-hammons-3b7652123"
                        className="linkedin social"
                        style={{paddingRight: 5}}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#E27D60"/>
                    </a>
                    <a href="https://github.com/reneehammons"
                        className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="#E27D60" />
                    </a>
                </ContactLinksContainer>
            </ContactContentWrapper>
        </ContactContainer>
    )
}

export default ContactSection
