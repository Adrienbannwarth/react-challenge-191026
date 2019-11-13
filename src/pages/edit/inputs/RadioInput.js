import React from 'react';

import { ScButton } from '../styledEditPageComponents'

const RadioInput = props => {
    return <ScButton 
        className={props.name} 
        data-group={props.name}
        onClick={props.handleClick}
        isSelected={props.isSelected}
    >
        {props.name}
    </ScButton>
}

export default RadioInput;