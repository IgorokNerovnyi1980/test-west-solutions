import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNews } from './redux/actions';
//components
import Header from './components/Header';
import Content from './components/Content'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  *:after, *:before {
    box-sizing: inherit;
  }

  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: normal;
  }

  body{
    font-family: 'Helvetica', sans-serif;
    font-size: 14px;
    color: #000000;
    font-weight: 400;
    min-width: 320px;
    overflow-x: hidden;
    background: #ffffff;
    line-height: normal;
  }

  input, textarea{
    outline: none;
  }

  @media (min-width: 1921px) {
  body {
    font-size: 16px;
  }
}
`;

function App(
    {
      namesTab,
      notFound,
      currentPage,
      getData
    }
  ) {
    getData();

  return (
    <>
    <GlobalStyle />

    <Header />
      <Switch>
        <Route path='/' exact render={props => <Content {...{...props, title:currentPage}}/>} />
          {namesTab.map(name =>(
            <Route 
              key={name}
              path={`/${name}`}
              render={props => <Content {...{...props, title:name}} />}
            />
          ))}
        <Route render={() => <Content title={notFound} />} />
      </Switch>
    </>
  );
}

const STP = state => ({
  namesTab: state.titles,
  notFound: state.notFound,
  currentPage: state.currentPage
});

const DTP = dispatch => ({
  getData: () => dispatch(getNews()),
});

export default connect(
  STP,
  DTP,
)(App);

