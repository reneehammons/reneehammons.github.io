import styled from 'styled-components';
import AboutLogo from '../../images/undraw_programmer.svg';

export const AboutContainer = styled.div`
    height: 850px;
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
`
export const AboutBoxNarrow = styled.div`
    background: linear-gradient(white, #C38D9E);
    width: 35%;
`

export const AboutLogoImg = styled.div`
    background: url(${AboutLogo}) no-repeat center;
    width: 400px;
    height: 400px; 
    position: absolute;
    transform: translate(65%,35%);
    
    @media screen and (max-width: 1100px){
        width: 350px;
        height: 350px;
        transform: translate(80%,45%);
    }

    @media screen and (max-width: 860px){
        width: 300px;
        height: 300px;
        transform: translate(80%,60%);
    }

    @media screen and (max-width: 720px){
        width: 280px;
        height: 280px; 
        transform: translate(80%,60%);
    }

    @media screen and (max-width: 600px){
        width: 230px;
        height: 230px;
        transform: translate(85%,100%);
    }

    @media screen and (max-width: 490px){
        width: 180px;
        height: 180px;
        transform: translate(85%,150%);
    } 
`

export const AboutContentContainer = styled.div`
    position: absolute;
    transform: translate(0%,65%);
    height: 100px;
    width: 500px;

    @media screen and (max-width: 860px){
        width: 400px;
    }

    @media screen and (max-width: 760px){
        width: 350px;
    }

    @media screen and (max-width: 600px){
        width: 300px;
    }
    @media screen and (max-width: 490px){
        width: 200px;
    } 
`

export const AboutHeader = styled.h1`
    font-size: 30px;
    text-align: center;
    color: #C38D9E;
    font-weight: bold;

    @media screen and (max-width: 860px){
        font-size: 25px;
    }


    @media screen and (max-width: 760px){
        font-size: 20px;
    }

    @media screen and (max-width: 490px){
        font-size: 15px;
    } 
`

export const AboutContent = styled.p`
    color: white;
    font-size: 20px;
    margin-top: 10px;
    margin-left: 0px;
    text-indent: 40px;


    @media screen and (max-width: 760px){
        font-size: 17px;
    }

    @media screen and (max-width: 490px){
        font-size: 14px;
    } 
`
