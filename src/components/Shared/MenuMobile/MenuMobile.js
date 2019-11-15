import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { Header, StyledLogoContainer, MenuIcon } from './StyledMenuMobile';
import { NavLink } from 'react-router-dom';
import heticLogo from '../../../assets/imgs/logo-hetic.png'
import Svg from '../Svg'

const MenuMobile = ({ }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Header>
        <StyledLogoContainer>
            <img src={heticLogo} alt=""/>
        </StyledLogoContainer>
            <Svg
              isOpen={isOpen}
              onClick={() => {
                return setIsOpen(!isOpen)
              }}
              id="menu"
              style={{fill: isOpen ? 'red' : 'blue'}}
            />

   </Header>
  );
}

export default MenuMobile;