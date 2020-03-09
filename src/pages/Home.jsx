import React from 'react';
import styled from 'styled-components';
import { variables } from '../variables';
import { connect } from 'react-redux';
//component
import Article from '../components/Article/ArticleVertical'

const Wrapper = styled.div `
    /* width:100%; */
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Text = styled.p`
    text-align:center;
    padding:30px 10px 20px;
    font-size:${variables.accentFZ};
    
`;

const Box = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
`;

const Item = styled.div`
    width:32%;
    @media (max-width: 720px) {
        width:95%;
    }

    @media (min-width: 721px)and (max-width: 1200px)   {
            width:44%;
    }
`;

const HomePage = (
    {
        greeting = 'Hi!',
        news = []
    }) => {

    return (
        <Wrapper>
            <Text>
                {greeting}
            </Text>
            <Box>
                {news && news.map(item =>(
                    <Item key={item.title}>
                        <Article {...{...item,source:item.source.name }} />
                    </Item>
                ))}
            </Box>

            
        </Wrapper>
    )
};

const STP = state => ({
    news: state.news,
    greeting: state.greeting
  });
  
  export default connect(
    STP,
    null,
  )(HomePage);