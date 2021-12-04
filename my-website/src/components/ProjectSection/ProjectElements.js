import styled from 'styled-components';

export const ProjectContainer = styled.div`
    height: 850px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
`
export const ProjectWrapperWide = styled.div`
    width: 65%;
    background-image: linear-gradient(#a3d9d5, white);
`

export const ProjectWrapperNarrow = styled.div`
    width: 35%;
    background-image: linear-gradient(#c38d9e, white);
`
export const ProjectHeader = styled.h1`
    position: absolute;
    text-align: center;
    font-size: 30px;
    color: white;

    @media screen and (max-width: 1800px){
        top: 5%;
        left: 75%;
    } 

    @media screen and (max-width: 1000px ){
        top: 5%;
        left: 73%;
    }


    @media screen and (max-width: 760px ){
        top: 5%;
        left: 71%;
    }
`
export const Line = styled.hr`
    margin: 10px;
    width: 170px;
    height: 3px;
    border: none;
    background-color: white;
`
export const TaskAppHeader = styled.h3`
    position: absolute;
    top: 14.5%;
    left: 72%;
    font-size: 25px;
    color: white;

    @media screen and (max-width: 1800px){
        top: 14.5%;
        left: 75%;
    } 

    @media screen and (max-width: 1000px ){
        top: 14.5%;
        left: 73%;
    }

    @media screen and (max-width: 760px ){
        top: 14.5%;
        left: 71%;
    }
`

export const TaskOrganizerContainer = styled.div`
    position: absolute;
    left: 0%;

    @media screen and (max-width: 900px ){
        left: -10%;
    }

    @media screen and (max-width: 760px ){
        left: -10%;
        width: 80%;
    }
`

export const Arrow = styled.div`
    position: absolute;
    top: 13%;
    left: 60%;
    font-size: 80px;
    color: whitesmoke;
`
export const TaskOrganizerList = styled.ul`
    margin: 10px;
    font-size: 20px;
`
