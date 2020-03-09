import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { variables } from '../../variables';
import Moment from 'react-moment';

const Wrapper = styled.div `
    width:90%;
    max-width:1300px;
    min-height:100px;
    margin:20px auto;
    padding:10px;
    box-shadow:${ variables.boxShadow };
`;

const Content = styled.div `
    margin-top:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const Title = styled.h2 `
    padding-right:20px;
    padding-top:10px;
    text-align:right;
    font-size:${ variables.titleFZ };
    color:${ variables.titleClr };
    font-weight:bold;
`;

const Image = styled.img `
    width:300px;
    max-height:200px;
`;

const TextBox = styled.div `
     min-width:50%;
     max-width:70%;
     padding-left:10px;
`;
const Autor = styled.h6 `
    font-style:italic;
    color:${ variables.hoverClr };
    font-size:${ variables.secondayFZ };
`;

const Text = styled.p `
    margin-top:10px;
    text-align:justify;
    font-size:${ variables.mainFZ };
`;

const Topicality = styled(Autor)`
`;

const Source = styled(Autor)`
    margin-top:10px;
`;

const WrapLink = styled(Link)`
    text-decoration: none;
    padding:3px 3px 3px 0;
    color:${ variables.linkClr };
    font-size:${ variables.secondayFZ };
    font-style:italic;  
`;

const ArticleDesktop = ({
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
            <Content>
                <Image src={urlToImage}/>
                <TextBox>
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
                    >
                        Go to original
                    </WrapLink>
                    
                </TextBox>
            </Content>

        </Wrapper>
    )
}
export default ArticleDesktop;