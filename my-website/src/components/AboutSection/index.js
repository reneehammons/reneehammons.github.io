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
                        <AboutHeader>A Bit About Me...</AboutHeader>
                        <AboutContent>I'm a self-taught programmer with a degree in biology. 
                            My passion for software developement started when I attempted to 
                            make a website for myself in my last year of college. I tried to read 
                            the source code from an existing site, but I could not understand much 
                            of it. This peaked my interest in coding so I enrolled in some programming 
                            courses at my college, and then some more. I've spent the last couple of years 
                            enhancing my knowledge in JavaScript, HTML, CSS, React, and Java by using online 
                            resources, working on projects, and tutoring others.   
                        </AboutContent>
                        <AboutContent> I'm looking for a front-end or full-stack position in software engineering, 
                                either in person or remote. I'm so excited to continue learning more languages, tools, 
                                and to work on exciting and innovative projects!
                              
                        </AboutContent>
                </AboutContentContainer>
            </AboutBoxWide>
            <AboutBoxNarrow></AboutBoxNarrow>
            <AboutLogoImg></AboutLogoImg>  
        </AboutContainer>
    )
}

export default AboutSection