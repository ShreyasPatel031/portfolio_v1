import React from 'react'
import {
    SidebarContainer,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink,
} from './SidebarElements'

const isVisible = ( isOpen,toggle ) => {
    if( isOpen ){
        return (
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                {/* <Icon onClick={toggle} >
                    <CloseIcon />
                </Icon> */}
                <SideBarWrapper>
                    <SideBarMenu>
                        <SideBarLink to="about" onClick={toggle}>
                            About
                        </SideBarLink>
                        <SideBarLink to="discover" onClick={toggle}>
                            Discover
                        </SideBarLink>
                        <SideBarLink to="services" onClick={toggle}>
                            Services
                        </SideBarLink>
                        <SideBarLink to="signup" onClick={toggle}>
                            Sign Up
                        </SideBarLink> 
                    </SideBarMenu>
                    {/* <SideBtnWrap>
                        <SideBarRoute to='/sigin'>Sign In</SideBarRoute>
                    </SideBtnWrap> */}
                </SideBarWrapper>
            </SidebarContainer>
        )
    }
    else return null
}

const Sidebar = ( {isOpen, toggle}) => {    
    return (
        isVisible(isOpen,toggle)
    );
};

export default Sidebar;
