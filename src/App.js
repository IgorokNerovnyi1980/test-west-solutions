import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
//pages
import Base from './pages/Base';

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
  @media screen and (min-width: 1921px) {
  body {
    font-size: 16px;
  }
}
`;

const DP = ['home', 'news', 'login', 'profile' ];
const notFound = 'Sorry, Page not found';
const defaultPage = null;


function App() {
  return (
    <>
    <GlobalStyle />
      
      <Switch>
        <Route path='/' exact render={props => <Base {...{...props, title:defaultPage}}/>} />
          {DP.map(name =>(
            <Route 
              key={name}
              path={`/${name}`}
              render={props => <Base {...{...props, title:name}} />}
            />
          ))}
        <Route render={() => <Base title={notFound} />} />
      </Switch>
    </>
  );
}

export default App;
