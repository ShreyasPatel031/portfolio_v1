import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { Nav,NavbarContainer,NavLogo,
	MobileIcon,
	NavMenu, 
	NavItem, 
	NavLinks,
 } from './NavbarElements'
 import logo from '../../logo components/logo-original.png'
 import logo_hov from '../../logo components/logo-higlighted.png'



const Navbar = ( {toggle} ) => {
	const [scrollNav, setScrollNav] = useState(false)
	const [hovstate, setLogoHov] = useState(logo)

	const changeNav = () => {
		if( window.scrollY >= 80 ){
			setScrollNav(true)
		}
		else setScrollNav(false)
	}

	useEffect(() => {
		window.addEventListener('scroll',changeNav)
	}, [])

	const toggleHome = () => {
		scroll.scrollToTop();
	}

	const logoHov = () => {
		setLogoHov( hovstate === logo ? logo_hov : logo );
	}
    return (
		<>
			<IconContext.Provider value={ {color: 'white'}} >
				<Nav scrollNav={scrollNav} >
					<NavbarContainer>
						<NavLogo to='/' onClick={toggleHome}  scrollNav={scrollNav} > 
							<a href="/#" className='logo'>
								<img onMouseEnter={logoHov} onMouseOut={logoHov} height={'50px'} src={hovstate} className='logo' alt={''}/>
							</a> 
						</NavLogo>
						<MobileIcon >
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLinks 
									to='about'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
								> 
									About
								</NavLinks>
							</NavItem>
							<NavItem>
								<NavLinks 
									to='case_studies'
									smooth={true}
									duration={500}
									spy={true}
									exact='true'
									offset={-80}
									onClick={toggle}
								>
									Work
								</NavLinks>
							</NavItem>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
    )
}

export default Navbar
 