import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
//component
import Article from '../components/Article'

const Wrapper = styled.div `
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const ArticlesList = (
    {
        news = []
    }) => {

    return (
        <Wrapper>

            {news && news.map(item =>(
                <Article key={item.title} data={item} source={item.source.name}/>
                
            ))}
        </Wrapper>
    )
};

const STP = state => ({
    news: state.news,
  });
  
  export default connect(
    STP,
    null,
  )(ArticlesList);