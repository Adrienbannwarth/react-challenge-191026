import styled from 'styled-components'
import React from 'react'

const UniqueChoiceStyled = styled.div`

    display: inline-block;

    label{
        background: none;
        border: none;
        padding: 4px 20px;
        line-height: 50px;
        text-align: center;
        background-color: #E5E5E5;
        border-radius: 6px;
        display: inline-block;
        font-weight: bold;
        color: #A5A5A5;
        width: 100%;
    }

    input{
        display: none
    }

    input:checked ~ label{
        background-color: #FC4448;
        box-shadow: 0px 0px 10px rgba(252, 68, 72, 0.4);
        color: #fff;
    }

`

export const UniqueChoice = ({id, value, selected = false, text = "undefined"}) => {

    return (
        <UniqueChoiceStyled>
            <input defaultChecked={selected} type="radio" name={id} id={id + value} value={value}/>
            <label htmlFor={id+value}>{text}</label>
        </UniqueChoiceStyled>
    )
}


const MultipleChoiceStyled = styled.div`
    display: inline-block;

    label{
        background: none;
        border: none;
        text-align: center;
        background-color: #E5E5E5;
        border-radius: 6px;
        display: inline-block;
        color: #A5A5A5;
        padding: 17px 20px;
        font-size: 14px;
        font-weight: bold;
        width: 100%;
    }

    input{
        display: none
    }

    input:checked ~ label{
        color: #fff;
        background-color: ${props => props.color ? props.color : 'pink'};
        box-shadow: ${props => props.boxShadow};
    }
`

export const MultipleChoice = ({id, value, selected = false, text = "undefined", color}) => {

    let boxShadow = `0 0 10px ${color || '#FF0000'}88` 

    return (
        <MultipleChoiceStyled boxShadow={boxShadow} color={color}>
            <input defaultChecked={selected} type="checkbox" name={id} id={id + value} value={value}/>
            <label htmlFor={id+value}>{text}</label>
        </MultipleChoiceStyled>
    )
}