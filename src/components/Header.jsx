import React from 'react';
import styled from 'styled-components';
import { variables } from '../variables';
//components
import NavBar from "./NavBar"

const Wrapper = styled.header `
    width:100%;
    min-height:6vh;
    position: sticky;
    top:0;
    background-color:${ variables.secondaryBG };
    display:flex;
    justify-content:space-around;
    align-items:center;
    box-shadow: ${ variables.headerBoxShadow };
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
