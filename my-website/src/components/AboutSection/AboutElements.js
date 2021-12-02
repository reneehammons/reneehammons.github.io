import styled from 'styled-components';
import AboutLogo from '../../images/undraw_programmer.svg';

export const AboutContainer = styled.div`
    height: 700px;
    width: 100%;
    position: relative;
    display: flex; 
    justify-content: center;
`
export const AboutBoxWide = styled.div`
    background-image: linear-gradient(#108A69, #a3d9d5);
    width: 65%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 760px){
        width: 65%; 
    }

    @media screen and (max-width: 480px){
        width: 65%; 
    } 
    
`
export const AboutBoxNarrow = styled.div`
    background: linear-gradient(white, #C38D9E);
    width: 35%;

    @media screen and (max-width: 760px){
        width: 35%;  
    }

    @media screen and (max-width: 480px){
        width: 35%; 
    } 
`

export const AboutLogoImg = styled.div`
    background: url(${AboutLogo}) no-repeat center;
    width: 400px;
    height: 400px; 
    position: absolute;
    transform: translate(65%,50%);
    

    @media screen and (max-width: 760px){
        width: 280px;
        height: 280px; 
        transform: translate(60%,80%);
    }

    @media screen and (max-width: 480px){
        width: 180px;
        height: 180px;
        transform: translate(60%,150%);
    } 
`

export const AboutContentContainer = styled.div`
    position: absolute;
    transform: translate(-20%,130%);

    @media screen and (max-width: 760px){
        transform: translate(0%,130%);
    }

    @media screen and (max-width: 480px){
        transform: translate(-40%,300%);
    } 
`

export const AboutHeader = styled.h1`
    font-size: 40px;
    color: #C38D9E;

    @media screen and (max-width: 760px){
        font-size: 35px;
    }

    @media screen and (max-width: 480px){
        font-size: 35px;
    } 
`

export const AboutContent = styled.p`
    color: #C38D9E;
`
