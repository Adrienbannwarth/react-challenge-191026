import React from 'react';

const RadioInput = props => {
    return <>
        <input 
            type="radio" 
            className={props.name} 
            name={props.name} 
            value={props.name} />
        <label 
            for={props.name} 
        >
            {props.name}
        </label>
    </>
}

export default RadioInput;