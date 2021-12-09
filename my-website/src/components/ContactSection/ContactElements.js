import styled from 'styled-components'

export const ContactContainer = styled.div`
    height: 750px;
    width: 100%;
    background: linear-gradient(to right, #108A69, white);
    color: #E27D60;
    text-align: center;
`
export const ContactContentWrapper = styled.div`
    width: 600px;
    height: 300px;
    display: inline-block;

    @media screen and (max-width: 480px){
        transform: translate(-10%, 0%);
    }

    @media screen and (max-width: 414px){
        transform: translate(-15%, 0%);
    }

    @media screen and (max-width: 400px){
        transform: translate(-17%, 0%);
    }

    @media screen and (max-width: 375px){
        transform: translate(-20%, 0%);
    }

    @media screen and (max-width: 350px){
        transform: translate(-23%, 0%);
    }

    @media screen and (max-width: 320px){
        transform: translate(-25%, 0%);
    }
`
export const ContactHeader = styled.h1`
    margin: 160px;
    margin-bottom: 30px;
    position: relative;
    font-size: 30px;
    color: #E27D60;
    font-weight: bold;
    text-align: center;   
`
export const ContactEmail = styled.h3`
    margin: 50px;
    position: relative; 
    font-size: 20px;
    text-align: center;
    
`
export const ContactLinksContainer = styled.h1`
    margin: 20px;
    position: relative;
    text-align: center;
`