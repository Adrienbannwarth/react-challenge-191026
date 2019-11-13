import React, { useState } from 'react'

const GradeInput = props => {
    const [grades, setGrades] = useState([
        'A', 'B', 'C', 'D', 'E'
    ])

    return <>
        <div className="GradeInput">
            <h2 className="title">{props.title}</h2>
            <nav>
                {
                    grades.map(grade => {
                        return <button
                            name={props.label}
                            key={grade}
                            data-grade={grade}
                            onClick={props.handleClick}
                        >
                            {grade}
                        </button>
                    })
                }
            </nav>
        </div>
    </>
}

export default GradeInput;