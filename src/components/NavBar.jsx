import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {handleChangeCurrentPage} from '../redux/actions';

const Wrapper = styled.div `
    width:50%;
    max-width:calc(1300px - 5%);
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const WrapLink = styled(NavLink)`
    position:relative;
    text-decoration: none;
    background:none;
    padding:10px 5px;
    color:${variables.tabClr};
    font-size:${variables.mainFZ};
    cursor: ${props => props.disable
    ? 'default'
    : 'pointer'};
    transition:0.2s;
    :hover{
       color:${variables.hoverClr};
    }
`;

const activeStyle = {
    fontSize: `${variables.accentFZ}`,
    color: `${variables.hoverClr}`,
    transition: '0.2s'
}

const NavBar = ({
    currentPage = '',
    namesTab = [],
    fnClick = () => {}
}) => {

    return (
        <Wrapper>
            {
                namesTab && namesTab.map(name => (
                    <WrapLink
                        key={name}
                        to={`/${name}`}
                        active={name === currentPage}
                        onClick={() => fnClick(name)}
                        activeStyle={activeStyle}>
                        {name}
                    </WrapLink>
                ))
            }
        </Wrapper>
    )
};

const STP = state => ({namesTab: state.titles, currentPage: state.currentPage});

const DTP = dispatch => ({
    fnClick: name => dispatch(handleChangeCurrentPage(name))
});

export default connect(STP, DTP,)(NavBar);
