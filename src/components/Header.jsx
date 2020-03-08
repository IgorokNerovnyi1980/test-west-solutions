import React from 'react';
import styled from 'styled-components';
//components
import NavBar from "./NavBar"

const Wrapper = styled.header `
    width:100%;
    min-height:6vh;
    position: sticky;
    top:0;
    background-color:#a3bad9;
    display:flex;
    justify-content:space-around;
    align-items:center;
    box-shadow: 0px 5px 5px 0px rgba(163,186,217,0.25);
`;

const Header = ({title, fnClick}) => {

    return (
    <Wrapper>
        <NavBar 
            activeName={title}
            fnClick={fnClick}
        />
    </Wrapper>
    )
};

export default Header;
