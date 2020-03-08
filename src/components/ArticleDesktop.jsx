import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Moment from 'react-moment';

const Wrapper = styled.div `
    width:90%;
    max-width:1300px;
    min-height:100px;
    margin:20px auto;
    padding:10px;
    box-shadow: 0px 5px 10px 0px rgba(163,186,217,0.25);
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
    font-size:1.8em;
    color:#2F4F4F;
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
    color:grey;
    font-size:0.8em;
`;

const Text = styled.p `
    margin-top:10px;
    text-align:justify;
`;

const Topicality = styled(Autor)`
    font-size:0.7em;
`;

const Source = styled(Autor)`
    margin-top:10px;
`;

const WrapLink = styled(Link)`
    text-decoration: none;
    padding:3px 3px 3px 0;
    color:#a3bad9;
    font-size:0.7em;
    font-style:italic;  
`;


const DP = {
    source: {
        id: null,
        name: "Cointelegraph.com"
    },
    author: "Cointelegraph By Erhan Kahraman",
    title: "BitPanda CEO Eric Demuth Says Bitcoin Is Gold 2.0 for Millenials",
    description: "BitPanda CEO Eric Demuth explains why regulations are necessary to avoid a “Wi" +
            "ld West” for crypto, and names first stop outside of the EU",
    url: "https://cointelegraph.com/news/bitpanda-ceo-eric-demuth-says-bitcoin-is-gold-2" +
            "0-for-millenials",
    urlToImage: "https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLm" +
            "NvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MTAxNGI3YjJlZTVmYzM1YTEzNWVmYjU2ZDU0MjQwNS5q" +
            "cGc=.jpg",
    publishedAt: "2020-03-07T06:05:00Z",
    content: "The crypto ecosystem tends to see regulations as “the big bad wolf.” In this n" +
            "arrative, government and regulators set rules that slow down innovation and da" +
            "mage growth for the crypto industry. That might have been the case a few years" +
            " ago, but not anymore, ac… [+3260 chars]"
}

const ArticleDesktop = ({
    title = DP.title,
    autor = DP.author,
    publishedAt = DP.publishedAt,
    urlToImage = DP.urlToImage,
    content = DP.content,
    source = DP.source.name,
    url = DP.url
}) => {

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Content>
                <Image src={urlToImage}/>
                <TextBox>
                    <Autor>{autor}</Autor>
                    <Topicality>
                        <Moment date ={publishedAt} format="YYYY/MM/DD"/>
                    </Topicality>
                    <Text>{content}</Text>

                    <Source>
                        article taken from {source}
                    </Source>
                    <WrapLink 
                        href={url}
                        rel='up'
                        target='#'
                    >
                        Go to original
                    </WrapLink>
                    
                </TextBox>
            </Content>

        </Wrapper>
    )
}
export default ArticleDesktop;