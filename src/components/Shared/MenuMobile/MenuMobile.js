import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { Header, StyledLogoContainer, MenuIcon } from './StyledMenuMobile';
import { NavLink } from 'react-router-dom';
import heticLogo from '../../../assets/imgs/logo-hetic.png'
import Svg from '../Svg'

const MenuMobile = ({ }) => {
  const [open, setOpen] = useState(false);
  return (
    <Header>
        <StyledLogoContainer>
            <img src={heticLogo} alt=""/>
        </StyledLogoContainer>
            <Svg open={open} onClick={() => setOpen(!open)} id="menu"/>
    </Header>
  );
}

MenuMobile.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default MenuMobile;