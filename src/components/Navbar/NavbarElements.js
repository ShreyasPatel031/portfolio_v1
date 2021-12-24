import styled from 'styled-components'
import { Link as linkRouter } from 'react-router-dom'
import { Link as linkScroll } from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => scrollNav ? '#0C0E14' : 'transparent' };
    /* background: #0C0E14; */
    height:10%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    

    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height:80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1108px;
`;

export const NavLogo = styled(linkRouter)`
    justify-self:left;
    cursor: pointer;
    /* display: flex; */
    align-items: center;
    /* padding-top:40px; */
    padding-top: ${({scrollNav}) => scrollNav ? '14px' : '30px' };
    padding-left: ${({scrollNav}) => scrollNav ? '10px' : '15px' };
    transform: ${({scrollNav}) => scrollNav ? 'scale(1)' : 'scale(1.4)' };
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        postion: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 30%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-left: 65rem; */
    padding: 0 0 0 58rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(linkScroll)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 3rem;
    height: 100%;
    cursor: pointer;
    font-family: 'Allerta Stencil', sans-serif;
    font-size:15px;

    &.active{
        border-bottom: 3px solid #4ADDC2;
    }
    &:hover{
        transition: all 0.2s ease-in-out;
        color: #58FFE1;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

