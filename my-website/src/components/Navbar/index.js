import React from 'react';
import {
    Nav, 
    NavbarContainer,  
    MobileIcon, 
    NavMenu,  
    NavLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';


const NavBar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavMenu>
                        <NavLink to="home"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}
                        >Home</NavLink>
                        <NavLink to="about"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-50}
                        >About</NavLink>
                        <NavLink to="projects"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}
                        >Portfolio</NavLink>
                        <NavLink to="resume"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}
                        >Resume</NavLink>
                        <NavLink to="contact"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}
                        >Contact</NavLink>
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
