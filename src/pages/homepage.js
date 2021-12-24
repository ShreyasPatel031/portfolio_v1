import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/About';
import Projects from '../components/Case Studies';
import Footer from '../components/Footer';
// import ReactPageScroller from 'react-page-scroller';

const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    
    const toggle = () => {
        setIsOpen( !isOpen )
    }
    return (
        <>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection /> 
            <Projects/>
            <Footer/>
        </> 
    )
}

export default Home
