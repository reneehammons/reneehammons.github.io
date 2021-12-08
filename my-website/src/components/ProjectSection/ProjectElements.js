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
    font-size: 33px;
    color: white;

    @media screen and (max-width: 1800px){
        top: 5%;
        left: 74%;
    } 

    @media screen and (max-width: 1100px ){
        top: 5%;
        left: 72%;
    }

    @media screen and (max-width: 930px ){
        top: 5%;
        left: 70%;
    }
    @media screen and (max-width: 760px ){
        top: 5%;
        left: 68%;
    }
`
export const Line = styled.hr`
    margin: 10px;
    width: 220px;
    height: 3px;
    border: none;
    background-color: white;
`
export const TaskAppHeader = styled.h3`
    position: absolute;
    font-size: 28px;
    color: white;

    @media screen and (max-width: 1800px){
        top: 14.5%;
        left: 72%;
    } 

    @media screen and (max-width: 1100px ){
        top: 14.5%;
        left: 74%;
    }

    @media screen and (max-width: 930px ){
        top: 14.5%;
        left: 73%;
    }

    @media screen and (max-width: 760px ){
        top: 14.5%;
        left: 72%;
    }

    @media screen and (max-width: 700px ){
        //make iphone responsive
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
export const TaskOrganizerNotableFeature = styled.h3`
    margin: 30px 0px 7px 0px;
    font-size: 20px;
    color: #E27D60;
    font-weight: bold;
`
export const TaskOrganizerList = styled.ul`
    margin-top: 5px;
    font-size: 15px;
    color: #E27D60;
    font-weight: bold;
`
export const GithubLink = styled.a`
    margin: 40px 20px 20px 20px;
    background-color: white;
    color: #E27D60;
    font-size: 15px;
    padding: 10px 10px 10px 10px;
    text-decoration: none;

    &:hover{
        background-color: #C38D9E;
        color: white;
    }
`
