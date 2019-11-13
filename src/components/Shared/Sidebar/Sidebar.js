import React from 'react';
import { StyledSidebar, StyledLogoContainer, StyledTabContainer, ProfileCard, DisconnectBtn } from './StyledSidebar';
import { NavLink } from 'react-router-dom';
import heticLogo from '../../../assets/imgs/logo-hetic.png'
import Svg from '../Svg'

const Links = [
  { text: 'Home', icon: 'home', url: '/' },
  { text: 'Liste des etudiants', icon: 'icon_list', url: '/student-list' },
  { text: 'Création de groupe', icon: 'pen', url: '/create-group' },
  { text: 'Groupe', icon: 'multiple_users', url: '/users'}
];


const Sidebar = ({ }) => (
    <StyledSidebar>
        <StyledLogoContainer>
            <img src={heticLogo} alt=""/>
        </StyledLogoContainer>
        <ProfileCard>
            <div />
            <p>PRIOU Eric</p>
        </ProfileCard>
        <StyledTabContainer>
          {Links.map(link => (
            <NavLink exact to={link.url} >
              <Svg id={link.icon}/>
              {link.text}
            </NavLink>
          ))}
        </StyledTabContainer>
        <DisconnectBtn>
            <p>Se deconnecter</p>
        </DisconnectBtn>
    </StyledSidebar>
)

export default Sidebar;
