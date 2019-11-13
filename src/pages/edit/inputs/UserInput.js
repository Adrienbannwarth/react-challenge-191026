import React from 'react';

import { ScInput } from '../styledEditPageComponents';

const UserInput = props => {
    return <ScInput
        className={props.label}
        type={props.type}
        placeholder={props.name}
        name={props.label}
        onChange={props.handleChanges}
    />
}

export default UserInput;