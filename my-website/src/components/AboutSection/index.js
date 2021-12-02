import React from 'react';
import { 
    AboutContainer,
    AboutBoxWide,
    AboutBoxNarrow,
    AboutLogoImg,
    AboutContentContainer,
    AboutHeader,
    AboutContent
} from './AboutElements';


const AboutSection = () => {
    return (
        <AboutContainer id='about'>
            <AboutBoxWide>
                <AboutContentContainer>
                        <AboutHeader>A Bit About Me</AboutHeader>
                        <AboutContent>Hello</AboutContent>
                </AboutContentContainer>
            </AboutBoxWide>
            <AboutBoxNarrow></AboutBoxNarrow>
            <AboutLogoImg></AboutLogoImg>  
        </AboutContainer>
    )
}

export default AboutSection