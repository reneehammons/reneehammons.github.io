import React, {useState} from 'react';
import Image from '../../images/HeroImage.jpeg';
import {
    HeroContainer,
    HeroBackground,
    HeroImage,
    HeroContent,
    HeroH1,
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
            <HeroBackground>
                <HeroImage>
                    <img src={Image} alt="Me in Vancouver" />
                </HeroImage>
            </HeroBackground>
            <HeroContent>
                <HeroH1>Hello, I'm <span style={{color: '#E27D60'}}>Renee Hammons</span>.</HeroH1>
                <HeroH1>I'm a front-end web developer.</HeroH1>
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
