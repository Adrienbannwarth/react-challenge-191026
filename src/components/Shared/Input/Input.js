import React from 'react';
import StyledInput from './StyledInput';

const Input = ({ type, onChange, placeholder, name, value }) => (
    <StyledInput type={type} value={value} name={name} onChange={onChange} placeholder={placeholder} />
)

export default Input;
