import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLinks
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarMenu>
                <SidebarLinks to="home" onClick={toggle}>Home</SidebarLinks>
                <SidebarLinks to="about" onClick={toggle}>About</SidebarLinks>
                <SidebarLinks to="projects" onClick={toggle}>Projects</SidebarLinks>
                <SidebarLinks to="resume" onClick={toggle}>Resume</SidebarLinks>
                <SidebarLinks to="contact" onClick={toggle}>Contact</SidebarLinks>
            </SidebarMenu> 
        </SidebarContainer>
    )
}

export default Sidebar
