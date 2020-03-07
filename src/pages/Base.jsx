import React from 'react';
//components
import Header from '../components/Header';
import Content from '../components/Content';

const Home = ({title}) => {
   return(
    <> 
        <Header title={title} />
        <Content title={title} />
    </>
   )
};
export default Home;