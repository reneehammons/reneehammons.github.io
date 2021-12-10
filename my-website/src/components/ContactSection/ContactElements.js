import styled from 'styled-components'

export const ContactContainer = styled.div`
    height: 750px;
    width: 100%;
    background: linear-gradient(to right, #108A69, white);
    color: #E27D60;
    text-align: center;
`
export const ContactContentWrapper = styled.div`
    width: auto;
    height: auto;
    display: inline-block;

    @media screen and (max-width: 650px){
        width: 350px;
    }

    @media screen and (max-width: 540px){
        width: 300px;
    }

   @media screen and (max-width: 330px){
        width: 250px;
    }
`
export const ContactHeader = styled.h1`
    width: 300px;
    margin: 160px;
    margin-bottom: 30px;
    position: relative;
    font-size: 30px;
    color: #E27D60;
    font-weight: bold;
    text-align: center;   

    @media screen and (max-width: 650px){
        left: -40%;
    }

    @media screen and (max-width: 540px){
        left: -53%;
        font-size: 30px;
    }

    @media screen and (max-width: 440px){
        left: -53%;
        font-size: 20px;
    }

    @media screen and (max-width: 330px){
        left: -53%;
        width: 200px;
    }

`
export const ContactEmail = styled.h3`
    margin: 50px;
    position: relative; 
    font-size: 20px;
    text-align: center;

    @media screen and (max-width: 650px){
        left: -5%;
    }

    @media screen and (max-width: 540px){
        left: -10%;
    }

    @media screen and (max-width: 440px){
        left: -5%;
        font-size: 17px;
    }

    @media screen and (max-width: 330px){
        left: -10%;
        font-size: 15px;
    }
`
export const ContactLinksContainer = styled.h1`
    margin: 20px;
    position: relative;
    text-align: center;
`