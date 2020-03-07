import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div `
    width:50%;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;

const Tab = styled.button `
    
`;

const WrapLink = styled(Link)`
    position:relative;
    text-decoration: none;
    background:none;
    padding:10px 5px;
    color:white;
    font-size: ${ props=>props.active ? '1.2em' : '1em' };
    cursor: ${ props => props.disable ? 'default' : 'pointer' };
    transition:0.2s;
    :after{
        content:'';
        position:absolute;
        width:100%;
        height:2px;
        bottom:5px;
        left:0;
        background-color: ${ props => props.active ? 'white' : 'grey' };
        opacity: ${ props => props.active ? 1 : 0 }; 
        transition:0.2s; 
    }

    :hover{
       color:${ props => props.disable ? 'white' : 'grey' };
       :after {
        opacity:${ props => props.disable ? 0 : 1 }
       }
    }
    :active{
        transform:${ props => props.disable ? 'unset' : 'translateY(2px)' };
    }
`;

const DP = {
    titles: [
        'home', 'news', 'login', 'profile'
    ],
    fnAlert: name => {
        alert(name)
    }
}

const NavBar = ({
    activeName = '',
    titles = DP.titles,
    fnClick = DP.fnAlert
}) => {

    return (
        <Wrapper>
            {
                titles && titles.map(
                    name => (
                        <WrapLink 
                            key={name}
                            to={`/${name}`}
                            active={name === activeName}
                            // disable={name==='profile'}
                        >
                            {name}
                    </WrapLink>
                        )
                )
            }
        </Wrapper>
    )
};

export default NavBar;