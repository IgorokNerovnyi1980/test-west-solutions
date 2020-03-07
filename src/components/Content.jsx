import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';
//component
import ArticleDeskTop from './ArticleDesktop';
import ArticleMobile from './ArticleMobile';


const Wrapper = styled.div `
    width:100%;
    min-height:calc(100vh - 6vh);
    background-color:#FFFAFA;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;


const test = [
    {
       source: {
        id: null,
        name: "Seekingalpha.com"
        },
        author: "Vincenzo Furcillo",
        title: "The Present And Future Of The Ethereum Network",
        description: "The adoption and the development of applications interacting with the Ethereum network have never been stronger, opening many possibilities across a variety of industries.The rise of Decentralized Finance (DeFi) is gaining momentum and creating new investment…",
        url: "https://seekingalpha.com/article/4330385-present-and-future-of-ethereum-network",
        urlToImage: "https://static.seekingalpha.com/uploads/2020/3/5/22037261-15834341276070118.png",
        publishedAt: "2020-03-06T22:13:57Z",
        content: "Introduction\r\nStill living in the shade of Bitcoin (BTC-USD), the Ethereum network and its currency, Ether (ETH-USD), currently occupies the second place in the cryptocurrencies market rank by capitalization. Despite the second place, Ethereum continues to be… [+10377 chars]"
        },
    {
           source: {
            id: null,
            name: "Forbes.com"
            },
            author: "Charles Bovaird, Contributor, Charles Bovaird, Contributor https://www.forbes.com/sites/cbovaird/",
            title: "Bitcoin's Momentum Remains Strong As It Faces Resistance",
            description: "Will bitcoin break out of its current range in the coming days?",
            url: "https://www.forbes.com/sites/cbovaird/2020/03/06/bitcoins-momentum-remains-strong-as-it-faces-resistance/",
            urlToImage: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1158187863%2F0x0.jpg",
            publishedAt: "2020-03-06T22:02:54Z",
            content: "Bitcoin prices could break through technical resistance in the next few days, say analysts. (Photo ... [+] by Chesnot/Getty Images)\r\nGetty Images\r\nBitcoin has enjoyed some compelling gains lately, rising in value as the global asset markets respond to concern… [+2122 chars]"
        },
    {
        source: {
        id: null,
        name: "Newsbtc.com"
        },
        author: "Rick Delafont",
        title: "Bitcoin: An Option Call Against the ‘Wrecking Ball’ that is the Dollar",
        description: "The Federal Reserve’s emergency interest rate cut this week highlighted that the central bank is anticipating the troubled times ahead. Raoul Pai, the CEO of Real Vision Group, says Bitcoin, like gold, is emerging as a worthy hedge against the potential demis…",
        url: "https://www.newsbtc.com/2020/03/06/bitcoin-an-option-call-against-the-wrecking-ball-that-is-the-dollar/",
        urlToImage: "https://www.newsbtc.com/wp-content/uploads/2020/03/shutterstock_692687386-1200x780.jpg",
        publishedAt: "2020-03-06T22:00:47Z",
        content: "The Federal Reserve’s emergency interest rate cut this week highlighted that the central bank is anticipating the troubled times ahead. Raoul Pai, the CEO of Real Vision Group, says Bitcoin, like gold, is emerging as a worthy hedge against the potential demis… [+2988 chars]"
        },
    {
        source: {
        id: null,
        name: "Bitcoinist.com"
        },
        author: "Ricardo Martinez",
        title: "Here Are the 7 Mistakes Made by New Bitcoin Traders",
        description: "We are going to take a look at a few mistakes new Bitcoin traders often make when they have real money on the line. How to Stay in Control as a New Bitcoin Trader Let’s take a look at common mistakes made by inexperienced traders: Entering a trade without a p…",
        url: "https://bitcoinist.com/7-mistakes-new-bitcoin-traders-make/",
        urlToImage: "https://bitcoinist.com/wp-content/uploads/2020/03/6-March-2.jpg",
        publishedAt: "2020-03-06T22:00:43Z",
        content: "We are going to take a look at a few mistakes new Bitcoin traders often make when they have real money on the line. \r\nLet’s take a look at common mistakes made by inexperienced traders:\r\n<ul><li>Entering a trade without a plan in place could get you liquidate… [+3928 chars]"
        }
];

const Content = ({title = null}) => {
    return (
        <Wrapper>
            {title ? 
            (<h3>{title}</h3>)
            :
            (test.map(item =>(
                <Media queries={{
                    mobile: '(max-width: 940px)',
                    desktop:'(min-width: 941px)'
                  }}>
                    {matches => (
                      <>
                        {matches.mobile && 
                            <ArticleMobile key={item.name} {...{...item, source:item.source.name}}/>
                            }
                        {matches.desktop && 
                            <ArticleDeskTop key={item.name} {...{...item, source:item.source.name}}/>
                            }
                      </>
                    )}
                  </Media>
                
            )))}
        </Wrapper>
    )
};
export default Content;