import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
    background: #108A69;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 150px;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.4s ease-in-out;
    opacity: ${ ({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${ ({ isOpen }) => (isOpen ? '0' : '-100%')}; 
`
export const CloseIcon = styled(FaTimes)`
    color: white;

    &:hover{
        color: #E27D60;
        transition: 0.2s ease-in-out;
    }
`
export const Icon = styled.div`
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;

   
`
export const SidebarMenu = styled.div`
    color: #F9F7EF;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 25px);
    text-align: center;
`
export const SidebarLinks = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    color: white;
    margin: 5px;

    &:active {
        color: #E27D60;
    }

    &:hover{
        color: #E27D60;
        transition: 0.3s ease-in-out;
        text-decoration: none;
    }
`