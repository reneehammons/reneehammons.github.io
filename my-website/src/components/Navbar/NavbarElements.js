import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';


export const Nav = styled.div`
    background: #41B3A3;
    height: 60px;
    /* margin-top: -80px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size; 1rem;
    top: 0;
    position: sticky;
    z-index: 10;

    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    } 
`;
//Nav will trigger the transtion at 960px screen size

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 80px;
    z-index: 1;
    max-width: 1100px;
    width: 100%;
    padding: 0 24px;
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px){
       display: block;
       position: absolute;
       top: 0;
       right: 0;
       transform: translate(-100%, 45%); 
       font-size: 1.8rem;
       cursor: pointer;
       color: #F9F7EF;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 760px){
        display: none;
    }
`;

export const NavLinks = styled(LinkScroll)`
    height: 80px;
    color: #F9F7EF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5rem;
    font-size: 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:active, &:hover {
        color: #E27D60;
        border-bottom: 3px solid #E27D60;
    }
`;