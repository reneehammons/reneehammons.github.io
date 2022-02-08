import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';


export const Nav = styled.div`
    background: #108A69;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size; 1rem;
    top: 0;
    position: sticky;
    z-index: 10;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`

export const MobileIcon = styled.div`
    display: none;

    /* Displays hamburger icon at 760px screen width */
    @media screen and (max-width: 760px){
       display: block;
       position: absolute;
       top: 0;
       right: 0;
       transform: translate(-100%, 50%); 
       font-size: 2.5rem;
       cursor: pointer;
       color: #F9F7EF;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-top: 12px;
    margin-right: -22px;

    /* Hides Nav menu links at 760px screen width */
    @media screen and (max-width: 760px){
        display: none;
    }
`

export const NavLink = styled(LinkScroll)`
    color: #F9F7EF;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    font-size: 15px;
    height: 100%;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:active, &:hover {
        color: #E27D60;
        border-bottom: 5px solid #E27D60;
        text-decoration: none;
    }
`