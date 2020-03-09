import React from 'react';
import styled from 'styled-components';
import { variables } from '../variables';
import { connect } from 'react-redux';
//pages
import NewsPage from '../pages/News';
import HomePage from "../pages/Home";
import ProfilePage from "../pages/Profile";
import LoginPage from '../pages/Login'


const Wrapper = styled.div `
    width:100%;
    min-height:calc(100vh - 6vh - 10px);
    background-color:${variables.mainBG};
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Content = (
    {
        title = null,
        currentPage = '',
    }) => {

        const Component = () =>{
            switch (currentPage) {
                case 'home':
                  return <HomePage />;
                case 'news':
                    return <NewsPage />;
                case 'login':
                    return <LoginPage />;
                case 'profile':
                    return <ProfilePage />;
                default:
                  return <h3>{currentPage}</h3>;
              }
        };

    return (
        <Wrapper>
            {title ?
            (<h3>Title</h3>)
                :
            (<Component />)
            }
            
        </Wrapper>
    )
};

const STP = state => ({
    news: state.news,
    currentPage: state.currentPage
  });
  
  export default connect(
    STP,
    null,
  )(Content);