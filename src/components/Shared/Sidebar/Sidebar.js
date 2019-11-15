import React, { useState, useEffect } from 'react';
import { bool } from 'prop-types';
import { StyledSidebar, StyledLogoContainer, StyledTabContainer, ProfileCard, DisconnectBtn } from './StyledSidebar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import heticLogo from '../../../assets/imgs/logo-hetic.png'
import Svg from '../Svg'

const Links = [
  { text: 'Home', icon: 'home', url: '/' },
  { text: 'Liste des etudiants', icon: 'icon_list', url: '/student-list' },
  { text: 'Création de groupe', icon: 'pen', url: '/create-group' },
  { text: 'Groupe', icon: 'multiple_users', url: '/group'}
];

const Sidebar = ({ profilePicture, open }) => {
  const [ width, setWidth ] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  const isMobile = width <= 768;

  let isOpen = false

  return (
    <StyledSidebar open={open} isSidebarMobile={isMobile ? true : false}>
      {isMobile ?
            null
          :
            <StyledLogoContainer>
              <img src={heticLogo} alt="logo hetic"/>
            </StyledLogoContainer>
          }
        <ProfileCard>
            <div />
            <p>PRIOU Eric</p>
        </ProfileCard>
        <StyledTabContainer>
          {Links.map((link, i) => (
            <NavLink exact to={link.url} key={i}>
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
};

const mapStateToProps = (state) => {
  return {
    profilePicture: state.profilePicture,
  };
};

Sidebar.propTypes = {
  open: bool.isRequired,
}

Sidebar.defaultProps = {
  profilePicture: null,
}

export default connect(mapStateToProps, null)(Sidebar);
