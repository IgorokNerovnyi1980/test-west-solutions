import React from 'react';
import styled from 'styled-components';
import { variables } from '../../variables';
import Moment from 'react-moment';

const Wrapper = styled.div `
    width:95%;
    min-height:550px;
    margin:20px auto;
    padding:10px 20px;
    box-shadow: ${ variables.boxShadow };
`;

const Title = styled.h2 `
    text-align:center;
    font-size:1.8em;
    color:${ variables.titleClr };
    font-weight:bold;
`;

const Image = styled.img `
    display: block;
    margin:10px auto;
    width:100%;
`;

const Autor = styled.h6 `
    font-style:italic;
    color:${ variables.hoverClr };
    font-size:${ variables.secondayFZ };
`;

const Text = styled.p `
    margin-top:10px;
    text-align:justify;
`;

const Topicality = styled(Autor)`
`;

const Source = styled(Autor)`
    margin-top:10px;
`;

const WrapLink = styled.a`
    text-decoration: none;
    padding:3px 3px 3px 0;
    color:${ variables.linkClr };
    font-size:${ variables.secondayFZ };
    font-style:italic;  
`;

const ArticleMobile = ({
    title = '',
    autor = '',
    publishedAt = '',
    urlToImage = '',
    content = '',
    source = '',
    url = ''
}) => {

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Image src={urlToImage}/>    
            <Autor>{autor}</Autor>
            <Topicality>
                <Moment date ={publishedAt} format={variables.formatDate}/>
            </Topicality>
            <Text>{content}</Text>
            <Source>
                article taken from {source}
            </Source>
            <WrapLink 
                href={url}
                target={variables.targetLink}
                rel='up'
            >
                Go to original
            </WrapLink>     
        </Wrapper>
    )
}
export default ArticleMobile;