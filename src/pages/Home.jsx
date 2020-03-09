import React from 'react';
import styled from 'styled-components';
import { variables } from '../variables';
import { connect } from 'react-redux';
//component
import Article from '../components/Article/ArticleVertical'

const Wrapper = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Text = styled.p`
    min-height:14vh;
    text-align:center;
    padding:30px 10px 20px;
    font-size:${variables.accentFZ};
    
`;

const Box = styled.div`
    min-height: 80vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
`;

const Item = styled.div`
    width:32%;
    @media (max-width: ${variables.mediaW_1}) {
        width:95%;
    }

    @media (min-width: ${variables.mediaW_11})and (max-width: ${variables.mediaW_3})   {
            width:44%;
    }
`;

const HomePage = (
    {
        greeting = 'Hi!',
        individualGreeting = 'Hi admin',
        isAutorization = false,
        news = []
    }) => {

    return (
        <Wrapper>
            <Text>
                { isAutorization ? individualGreeting : greeting }
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
    greeting: state.greeting,
    individualGreeting: state.individualGreeting,
    isAutorization: state.isAutorization
  });
  
  export default connect(
    STP,
    null,
  )(HomePage);