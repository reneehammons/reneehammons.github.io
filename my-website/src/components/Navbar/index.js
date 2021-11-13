import React from 'react';
import {
    Nav, 
    NavbarContainer,  
    MobileIcon, 
    NavMenu,  
    NavLinks
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';

const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavLinks to="home">Home</NavLinks>
                        <NavLinks to="about">About</NavLinks>
                        <NavLinks to="projects">Projects</NavLinks>
                        <NavLinks to="resume">Resume</NavLinks>
                        <NavLinks to="contact">Contact</NavLinks>
                    </NavMenu>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                </NavbarContainer>
            </Nav>
        </>
    );
} 

export default NavBar;
