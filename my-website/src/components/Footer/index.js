import React from 'react';
import {
    FooterContainer,
    FooterWrapper,
    FooterHeader,
    FooterBar,
    FooterLinksContainer
} from './FooterElements';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <a href="https://www.linkedin.com/in/renee-hammons-3b7652123"
                        className="linkedin social">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" color="#E27D60"/>
                    </a>
                    <a href="https://github.com/reneehammons"
                        className="github social">
                        <FontAwesomeIcon icon={faGithub} size="2x" color="#E27D60" />
                    </a>
                </FooterLinksContainer>
                <FooterBar></FooterBar>
                <FooterHeader>
                    Copyright @2021 | Renee Hammons.
                </FooterHeader>
            </FooterWrapper>
        </FooterContainer> 
    )
}

export default Footer
