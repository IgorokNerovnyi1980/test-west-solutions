import React from 'react';
import styled from 'styled-components';
import Moment from 'react-moment';

const Wrapper = styled.div `
    width:95%;
    min-height:100px;
    margin:20px auto;
    padding:10px 20px;
    box-shadow: 0px 5px 10px 0px rgba(163,186,217,0.25);
`;

const Title = styled.h2 `
    text-align:center;
    font-size:1.8em;
    color:#2F4F4F;
    font-weight:bold;
`;

const Image = styled.img `
    display: block;
    margin:10px auto;
    width:100%;
    /* min-width:300px; */
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

const Link = styled.a`
    color:blue;
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

const ArticleMobile = ({
    title = DP.title,
    autor = DP.author,
    description,
    publishedAt = DP.publishedAt,
    urlToImage = DP.urlToImage,
    content = DP.content,
    source = DP.source.name,
    url = DP.url
}) => {

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Image src={urlToImage}/>    
            <Autor>{autor}</Autor>
            <Topicality>
                <Moment date ={publishedAt} format="YYYY/MM/DD"/>
            </Topicality>
            <Text>{content}</Text>
            <Source>
                article taken from {source}
            </Source>
            <Link 
                href={url}
                rel='up'
                target='#'
            >
                Go to original
            </Link>     
        </Wrapper>
    )
}
export default ArticleMobile;