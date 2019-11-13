import React, { useState } from 'react';

import { ScGradeInput, ScGradebutton, ScLock } from '../styledEditPageComponents'

const GradeInput = props => {
    const [grades, setGrades] = useState([
        'A', 'B', 'C', 'D', 'E'
    ])

    return <>
        <ScGradeInput className="GradeInput">
            <h3 className="title">{props.title}</h3>
            <nav>
                {
                    grades.map(grade => {
                        return <ScGradebutton
                            name={props.label}
                            key={grade}
                            data-grade={grade}
                            onClick={props.handleClick}
                        >
                            {grade}
                        </ScGradebutton>
                    })
                }
            </nav>
            <ScLock isLocked={props.isLocked}> 
                <i className="fas fa-lock"></i>
            </ScLock>
        </ScGradeInput>
    </>
}

export default GradeInput;