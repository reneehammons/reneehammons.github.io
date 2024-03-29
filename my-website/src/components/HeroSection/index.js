import React, {useState} from 'react';
import {
    HeroContainer,
    HeroBackground,
    HeroContent,
    HeroHeading,
    HeroBtnWrapper,
    ArrowRight,
    ArrowDown
} from './HeroElements';
import { Button } from '../ButtonElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBackground></HeroBackground>
            <HeroContent>
                <HeroHeading>
                    Hello, I'm 
                    <span style={{color: '#E27D60'}}> Renee Hammons. </span>
                    I'm a software engineer.
                </HeroHeading>
                <HeroBtnWrapper>
                    <Button 
                        to="projects" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-60}>
                        View my work {hover ? <ArrowDown /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    )
}

export default HeroSection
