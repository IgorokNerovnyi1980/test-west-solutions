import React from 'react';
import styled from 'styled-components';
import { variables } from '../variables';
import { connect } from 'react-redux';
//component
import Article from '../components/Article'

const Wrapper = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const Filters = styled.div`
    width:90%;
    max-width:1300px;
    min-height:14vh;
    margin-top:10px;
    font-size:${variables.accentFZ};
    box-shadow:${variables.boxShadow};
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    @media (max-width:${variables.mediaW_2}) {
        width:95%;
    }
    
`;

const Box = styled.div`
    min-height: 80vh;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
`;

const NewsPage = (
    {
        isAutorization = false,
        news = [],
    }) => {

    return (
        <Wrapper>
             {isAutorization && <Filters><p>Your filters</p></Filters>}
            <Box>
                {news && news.map(item =>(
                    <Article key={item.title} data={item} source={item.source.name}/>
                    
                ))}
            </Box>
        </Wrapper>
        
    )
};

const STP = state => ({
    news: state.news,
    isAutorization: state.isAutorization
  });
  
  export default connect(
    STP,
    null,
  )(NewsPage);