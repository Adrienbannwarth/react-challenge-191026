import React from 'react';
import { StyledSidebar, StyledLogoContainer, StyledTabContainer, ProfileCard, DisconnectBtn } from './StyledSidebar';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import heticLogo from '../../../assets/imgs/logo-hetic.png'
import Svg from '../Svg'

const Links = [
  { text: 'Home', icon: 'home', url: '/' },
  { text: 'Liste des etudiants', icon: 'icon_list', url: '/student-list' },
  { text: 'Création de groupe', icon: 'pen', url: '/create-group' },
  { text: 'Groupe', icon: 'multiple_users', url: '/group'}
];


const Sidebar = ({ profilePicture, firstName, lastName }) => (
    <StyledSidebar>
        <StyledLogoContainer>
            <img src={heticLogo} alt="logo hetic"/>
        </StyledLogoContainer>
        <ProfileCard>
            <div />
            <p>{`${firstName} ${lastName}`}</p>
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
            <p>Se déconnecter</p>
        </DisconnectBtn>
    </StyledSidebar>
);

const mapStateToProps = (state) => {
  return {
    profilePicture: state.profilePicture,
    firstName: state.user.user.firstName,
    lastName: state.user.user.lastName,
  };
};

Sidebar.defaultProps = {
  profilePicture: null,
}

export default connect(mapStateToProps, null)(Sidebar);
