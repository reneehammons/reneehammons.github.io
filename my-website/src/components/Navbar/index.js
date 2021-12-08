import React, {useState, useEffect} from 'react';
import {
    Nav, 
    NavbarContainer,  
    MobileIcon, 
    NavMenu,  
    NavLink
} from './NavbarElements';
import { FaBars } from 'react-icons/fa';


const NavBar = ({ toggle }) => {
    const [navColor,setNavColor] = useState(false);

    const setNavColorDark = () =>{
        setNavColor(false)
    }

    const setNavColorLight = () =>{
        setNavColor(true)
    }

    const scrollNavColor = () => {
        if (window.scrollY >= 1300){
            setNavColor(true)
        } else {
            setNavColor(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', scrollNavColor)
    },[]) 

    return (
        <>
            <Nav navColorChange={navColor}>
                <NavbarContainer>
                    <NavMenu>
                        <NavLink to="home"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}
                            onClick={setNavColorDark}
                        >Home</NavLink>
                        <NavLink to="about"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-50}
                            onClick={setNavColorDark}
                        >About</NavLink>
                        <NavLink to="projects"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}
                            onClick={setNavColorLight}
                        >Portfolio</NavLink>
                        <NavLink to="resume"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}
                            onClick={setNavColorLight}
                        >Resume</NavLink>
                        <NavLink to="contact"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-60}
                            onClick={setNavColorLight}
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
