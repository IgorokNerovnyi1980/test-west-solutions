import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';

const Wrapper = styled.input `
    outline:none;
    border:none;
    width:70%;
    min-width:100px;
    min-height:30px;
    margin-top:10px;
    background-color:inherit;
    text-align:center;
    transition:0.2s;
    border-bottom: 1px solid ${variables.hoverClr};
`;

const Input = ({
    type = 'text',
    name = 'input',
    value = '',
    placeholder = '',
    fnChange = () => {}
}) => {
    return (
        <Wrapper
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={fnChange}/>
    )

}

export default Input;