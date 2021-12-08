import React, {useState, useEffect} from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLinks
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    const [sidebarColor,setSidebarColor] = useState(false);

    const setSidebarColorDark = () =>{
        setSidebarColor(false)
        
    }

    const setSidebarColorLight = () =>{
        setSidebarColor(true)
    }

    const scrollSidebarColor = () => {
        if (window.scrollY >= 1300){
            setSidebarColor(true)
        } else {
            setSidebarColor(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', scrollSidebarColor)
    },[]) 

    return (
        <SidebarContainer 
            isOpen={isOpen} 
            onClick={toggle} 
            sidebarColorChange={sidebarColor} >
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarMenu>
                <SidebarLinks
                    to="home"
                    onClick={setSidebarColorDark} 
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
                    onClick={setSidebarColorDark} 
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
                    onClick={setSidebarColorLight} 
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
                    onClick={setSidebarColorLight} 
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
                    onClick={setSidebarColorLight} 
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
