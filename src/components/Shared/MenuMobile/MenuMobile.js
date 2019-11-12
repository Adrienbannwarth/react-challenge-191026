import React from 'react';
import { StyledSidebar, StyledLogoContainer, StyledTabContainer, ProfileCard, DisconnectBtn } from './StyledSidebar';
import { NavLink } from 'react-router-dom';
import heticLogo from '../../../assets/imgs/logo-hetic.png'
import Svg from '../Svg'

const Links = [{ text: 'Home', icon: 'home', url: '/'  },  {text: 'Liste des etudiants', icon: 'icon_list', url: '/'}, {text: 'Création de groupe', icon: 'pen', url: '/'}, {text: 'Groupe', icon: 'multiple_users', url: '/'}];
