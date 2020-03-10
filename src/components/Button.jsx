import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';

const Wrapper = styled.button `
    outline:none;
    border:none;
    min-width:70px;
    margin-top:10px;
    margin-bottom:10px;
    padding:10px 5px;
    background-color:${variables.secondaryBG};
    color:${variables.tabClr};
    cursor: pointer;
    transition:0.2s;
    :hover{
       color:${variables.hoverClr};
    }
    :active{
        transform:translateY(2px);
    }
    :disabled{
        background-color: unset;
        border: 1px solid  ${variables.secondaryBG};
        color:${variables.hoverClr};
        cursor:default;
    }

`;

const Button = ({
    text = 'default',
    type = 'button',
    disabled = false,
    fnClick = () => {},
    fnChange = () => {}
}) => {
    return (
        <Wrapper type={type} onClick={fnClick} onChange={fnChange} disabled={disabled}>
            {text}
        </Wrapper>
    )

}

export default Button;