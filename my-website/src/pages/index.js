import React, {useState} from 'react';
import NavBar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ResumeSection from '../components/ResumeSection';
import Footer from 'components/Footer';
import ContactSection from 'components/ContactSection';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ResumeSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home
