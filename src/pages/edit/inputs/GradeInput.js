import React, { useState } from 'react';

import { ScGradeInput, ScGradebutton } from '../styledEditPageComponents'

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
        </ScGradeInput>
    </>
}

export default GradeInput;