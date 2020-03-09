import React from 'react';
import styled from 'styled-components';
import { variables } from '../variables';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleChangeCurrentPage } from '../redux/actions';

const Wrapper = styled.div `
    width:50%;
    max-width:calc(1300px - 5%);
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const WrapLink = styled(Link)`
    position:relative;
    text-decoration: none;
    background:none;
    padding:10px 5px;
    color:${ variables.tabClr };
    font-size: ${ props=>  variables[ props.active ? 'accentFZ' : 'mainFZ']};
    cursor: ${ props => props.disable ? 'default' : 'pointer' };
    transition:0.2s;
    :after{
        content:'';
        position:absolute;
        width:100%;
        height:2px;
        bottom:5px;
        left:0;
        background-color: ${ props => variables[props.active ? 'tabClr' : 'hoverClr'] };
        opacity: ${ props => props.active ? 1 : 0 }; 
        transition:0.2s; 
    }

    :hover{
       color:${ props => variables[props.disable ? 'tabClr' : 'hoverClr'] };
       :after {
        opacity:${ props => props.disable ? 0 : 1 };
        background-color: ${ variables.hoverClr };
       }
    }
    :active{
        transform:${ props => props.disable ? 'unset' : 'translateY(2px)' };
    }
`;


const NavBar = ({
    currentPage ='',
    namesTab = [],
    fnClick = () => { },
}) => {

    return (
        <Wrapper>
            {
                namesTab && namesTab.map(
                    name => (
                        <WrapLink 
                            key={name}
                            to={`/${name}`}
                            active={name === currentPage}
                            onClick={()=> fnClick( name )}
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

const STP = state => ({
    namesTab: state.titles,
    currentPage: state.currentPage
  });

const DTP = dispatch => ({
    fnClick: name => dispatch(handleChangeCurrentPage(name)),
  });
  
  export default connect(
    STP,
    DTP,
  )(NavBar);
