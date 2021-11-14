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
import { Button } from '../ButtonElement';


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBackground></HeroBackground>
            <HeroContent>
                <HeroHeading>Hello, I'm <span style={{color: '#E27D60'}}>Renee Hammons</span>.</HeroHeading>
                <HeroHeading>I'm a front-end web developer.</HeroHeading>
                <HeroBtnWrapper>
                    <Button to="viewwork" onMouseEnter={onHover} onMouseLeave={onHover}>
                        View my work {hover ? <ArrowDown /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

    )
}

export default HeroSection
