import React from 'react';
import styled from 'styled-components';
//components
import NavBar from "./NavBar"

const Wrapper = styled.header `
    width:100%;
    min-height:50px;
    position: sticky;
    top:0;
    background-color:#a3bad9;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const Header = ({title}) => {

    return (
    <Wrapper>
        <NavBar activeName={title}/>
    </Wrapper>
    )
};

export default Header;
