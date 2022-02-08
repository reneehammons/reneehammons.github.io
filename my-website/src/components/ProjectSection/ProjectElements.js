import styled from 'styled-components';

export const ProjectContainer = styled.div`
    height: 850px;
    width: 100%;
    position: relative;
    background: linear-gradient(white, #108A69);
    display: flex;
    justify-content: center;
`
export const ProjectWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const TaskAppHeader = styled.h3`
    position: relative;
    font-size: 28px;
    color: #108A69;
    text-align: center;
    font-weight: bold;
    margin: 40px;

    @media screen and (max-width: 500px){
        font-size: 21px;
    }
`
export const GithubLink = styled.a`
    position: absolute;
    background-color: white;
    color: #108A69;
    font-size: 15px;
    padding: 5px 5px 5px 5px;
    transform: translate(0%,270%);
    margin: 0px 0px 0px 0px;

    @media screen and (max-width: 500px){
        transform: translate(0%,250%);
    }

    @media screen and (max-width: 390px){
         transform: translate(0%,290%);
    }
    
    @media screen and (max-width: 330px) {
        transform: translate(0%,290%);
    }
    
    &:hover{
        background-color: #C38D9E;
        color: white;
    }
`
export const TaskOrganizerContainer = styled.div`
    position: absolute;
    top: 17%;
`