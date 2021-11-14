import styled from 'styled-components';
import { VscArrowSmallRight } from 'react-icons/vsc';
import { VscArrowSmallDown } from 'react-icons/vsc';
import desktopImage from '../../images/HeroImageDesktop.jpeg'; 

export const HeroContainer =styled.div`
    background-color: #F9F7EF;
`
export const HeroBackground = styled.div`
    position: relative;
    height: 700px;
    overflow: hidden;
    background: url(${desktopImage}) no-repeat center;
    background-size: cover;
`

export const HeroContent = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #F9F7EF; 
`

export const HeroHeading = styled.p`
    font-size: 40px;

    @media screen and (max-width: 760px){
        font-size: 35px; 
    }

    @media screen and (max-width: 480px){
        font-size: 30px;  
    }  
`

export const HeroBtnWrapper = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowRight = styled(VscArrowSmallRight)`
    transform: translate(-10%, 33%);
    font-size: 2rem;
`

export const ArrowDown = styled(VscArrowSmallDown)`
    transform: translate(-10%, 33%);    
    font-size: 2rem;    
`

