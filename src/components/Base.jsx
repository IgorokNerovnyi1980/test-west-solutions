import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';

const Wrapper = styled.div `
    width:100%;
    min-height:calc(100vh - 6vh - 10px);
    background-color:${variables.mainBG};
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Base = ({
    title = null,
    Children = () => {}
}) => {

    return (
        <Wrapper>
            {
                title
                    ? (<h3>{title}</h3>)
                    : (<Children/>)
            }
        </Wrapper>
    )
};

export default Base;