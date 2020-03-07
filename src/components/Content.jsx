import React from 'react';
import styled from 'styled-components';
//component
import Article from './Article'


const Wrapper = styled.div `
    width:100%;
    min-height:calc(100vh - 50px);
    background-color:#FFFAFA;
`;

const Content = () => {
    return (
        <Wrapper>
            <Article/>
            <Article/>
           
        </Wrapper>
    )
};
export default Content;