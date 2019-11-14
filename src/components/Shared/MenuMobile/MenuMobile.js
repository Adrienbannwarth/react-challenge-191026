import React from 'react';
import { Header, StyledLogoContainer, MenuIcon } from './StyledMenuMobile';
import { NavLink } from 'react-router-dom';
import heticLogo from '../../../assets/imgs/logo-hetic.png'
import Svg from '../Svg'

const Links = [{ text: 'Home', icon: 'home', url: '/'  },  {text: 'Liste des etudiants', icon: 'icon_list', url: '/'}, {text: 'Création de groupe', icon: 'pen', url: '/'}, {text: 'Groupe', icon: 'multiple_users', url: '/'}];

const MenuMobile = ({ }) => (
    <Header>
        <StyledLogoContainer>
            <img src={heticLogo} alt=""/>
        </StyledLogoContainer>
            <Svg id="menu"/>
    </Header>
)

export default MenuMobile;