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
        <SidebarContainer 
            isOpen={isOpen} 
            onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarMenu>
                <SidebarLinks
                    to="home"
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-60}
                    >Home
                </SidebarLinks>
                <SidebarLinks 
                    to="about"
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-50} 
                    >About
                </SidebarLinks>
                <SidebarLinks 
                    to="projects" 
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-60}
                    >Portfolio
                </SidebarLinks>
                <SidebarLinks 
                    to="resume" 
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-60}
                    >Resume
                </SidebarLinks>
                <SidebarLinks 
                    to="contact"
                    onClick={toggle}
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-60}>
                    Contact
                </SidebarLinks>
            </SidebarMenu> 
        </SidebarContainer>
    )
}

export default Sidebar
