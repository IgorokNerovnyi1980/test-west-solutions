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
    position:relative;
    outline:none;
    border:none;
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
        'Home', 'News', 'Login', 'Profile'
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
                        <Link to={`/${name}`}>
                    <Tab 
                        key={name}
                        active={name === activeName}
                        // disable={name==='profile'}
                        >
                            {name}
                    </Tab>
                    </Link>
                        )
                )
            }
        </Wrapper>
    )
};

export default NavBar;