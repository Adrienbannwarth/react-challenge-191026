import React from 'react';
import svg from '../../../assets/svg/sprite.svg';

const Svg = ({ className, id, onClick }) =>
  <svg className={className} onClick={onClick}>
    <use xlinkHref={`${svg}#${id}`} aria-hidden="true" />
  </svg>;


Svg.defaultProps = {
  className: '',
  onClick: null,
};

export default Svg;
