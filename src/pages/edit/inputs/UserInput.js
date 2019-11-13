import React from 'react';

const UserInput = props => {
    return <input
        className={props.label}
        type={props.type}
        placeholder={props.name}
        name={props.label}
        onChange={props.handleChanges}
    />
}

export default UserInput;