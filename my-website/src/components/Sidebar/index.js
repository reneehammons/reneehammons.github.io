import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLinks
} from './SidebarElements';
import { Link } from "react-scroll";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarMenu>
                <SidebarLinks onClick={toggle}>
                    <Link to="home"
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-30}
                    >Home</Link>
                </SidebarLinks>
                <SidebarLinks onClick={toggle}>
                    <Link to="about"
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-30}
                    >About</Link>
                </SidebarLinks>
                <SidebarLinks onClick={toggle}>
                    <Link to="projects"
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-30}
                    >Projects</Link>
                </SidebarLinks>
                <SidebarLinks onClick={toggle}>
                    <Link to="resume"
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-30}
                    >Resume</Link>
                </SidebarLinks>
                <SidebarLinks onClick={toggle}>
                    <Link to="contact"
                        onClick={toggle}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-30}
                    >Contact</Link>
                </SidebarLinks>
            </SidebarMenu> 
        </SidebarContainer>
    )
}

export default Sidebar
