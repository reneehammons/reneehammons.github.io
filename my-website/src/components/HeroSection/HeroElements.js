import styled from 'styled-components';
import { VscArrowSmallRight } from 'react-icons/vsc';
import { VscArrowSmallDown } from 'react-icons/vsc';
import desktopImage from '../../images/HeroImageDesktop.jpeg'; 

export const HeroContainer =styled.div`
    background-color: #F9F7EF;
    width: 100%;
`
export const HeroBackground = styled.div`
    position: relative;
    height: 850px;
    overflow: hidden;
    background: url(${desktopImage}) no-repeat center;
    background-size: cover;
`

export const HeroContent = styled.div`
    color: #F9F7EF; 
    position: absolute;
    text-align: center;
    transform: translate(-50%, -70%);
    top: 60%;
    left: 50%;
    justify-content: center;
`

export const HeroHeading = styled.p`
    font-size: 40px;
    padding: 0px;

    @media screen and (max-width: 760px){
        font-size: 35px; 
    }

    @media screen and (max-width: 480px){
        font-size: 30px;  
    }  
`

export const HeroBtnWrapper = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowRight = styled(VscArrowSmallRight)`
    transform: translate(0%, 5%);
    font-size: 2rem;

    @media screen and (max-width: 760px){
        transform: translate(0%, 0%);
    } 
`

export const ArrowDown = styled(VscArrowSmallDown)`
    transform: translate(0%, 5%);   
    font-size: 2rem; 
    
    @media screen and (max-width: 760px){
        transform: translate(0%, 0%);
    } 
`

