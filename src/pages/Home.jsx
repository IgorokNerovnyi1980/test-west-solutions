import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {connect} from 'react-redux';
//component
import Article from '../components/Article/ArticleVertical'

const Wrapper = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Text = styled.p `
    width:90%;
    max-width:1300px;
    min-height:14vh;
    margin-top:10px;
    padding: 0 5px;
    text-align:center;
    font-size:${variables.accentFZ};
    box-shadow:${variables.boxShadow};
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width:${variables.mediaW_2}) {
        width:90%;
    }
    
`;

const Box = styled.div `
    width:92%;
    max-width:1300px;
    min-height: 80vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:center;
    @media (max-width:${variables.mediaW_2}) {
        width:100%;
        justify-content:center;
    }
`;

const Item = styled.div `
    width:33%;
    @media (max-width: ${variables.mediaW_1}) {
        width:95%;
    }

    @media (min-width: ${variables.mediaW_11})and (max-width: ${variables.mediaW_3})   {
            width:46%;
    }
`;

const HomePage = ({
    greeting = 'Hi!',
    individualGreeting = 'Hi admin',
    isAutorization = false,
    news = []
}) => {

    return (
        <Wrapper>
            <Text>
                {
                    isAutorization
                        ? individualGreeting
                        : greeting
                }
            </Text>
            <Box>
                {
                    news && news.map(item => (
                        <Item key={item.title}>
                            <Article {...{...item,source:item.source.name }}/>
                        </Item>
                    ))
                }
            </Box>

        </Wrapper>
    )
};

const STP = state => (
    {news: state.news, greeting: state.greeting, individualGreeting: state.individualGreeting, isAutorization: state.isAutorization}
);

export default connect(STP, null,)(HomePage);