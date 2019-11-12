import React from 'react';
import { StyledSidebar, StyledLogoContainer, StyledTabContainer, StyledTab } from './StyledSidebar';
import { NavLink } from 'react-router-dom';
// import heticLogo from ''
// import homeIcon from ''

const Links = [{ text: 'home', icon: '', url: '/'  },  {text: 'list', icon: '', url: '/'}];


const Sidebar = ({ }) => (
    <StyledSidebar>
        <StyledLogoContainer>
            <img src="" alt=""/>
        </StyledLogoContainer>

        <StyledTabContainer>{
                Links.map(link => (
                    <StyledTab>
                        <img src={link.icon} alt=""/>
                        <NavLink to={link.url}>{link.text}</NavLink>
                    </StyledTab>
                ))
            }
        </StyledTabContainer>
    </StyledSidebar>
)

export default Sidebar;