import React from 'react';

const RadioInput = props => {
    return <button 
        className={props.name} 
        data-group={props.name}
        onClick={props.handleClick}
    >
        {props.name}
    </button>
}

export default RadioInput;