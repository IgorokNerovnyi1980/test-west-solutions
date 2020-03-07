(this["webpackJsonpwest-solutions"]=this["webpackJsonpwest-solutions"]||[]).push([[0],{24:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(17),o=n.n(r),c=n(9),l=n(7),s=n(1),u=n(2);function h(){var e=Object(s.a)(["\n    position:relative;\n    text-decoration: none;\n    background:none;\n    padding:10px 5px;\n    color:white;\n    font-size: ",";\n    cursor: ",";\n    transition:0.2s;\n    :after{\n        content:'';\n        position:absolute;\n        width:100%;\n        height:2px;\n        bottom:5px;\n        left:0;\n        background-color: ",";\n        opacity: ","; \n        transition:0.2s; \n    }\n\n    :hover{\n       color:",";\n       :after {\n        opacity:","\n       }\n    }\n    :active{\n        transform:",";\n    }\n"]);return h=function(){return e},e}function m(){var e=Object(s.a)(["\n    \n"]);return m=function(){return e},e}function d(){var e=Object(s.a)(["\n    width:50%;\n    display:flex;\n    justify-content:space-around;\n    align-items:center;\n"]);return d=function(){return e},e}var p=u.b.div(d()),f=(u.b.button(m()),Object(u.b)(c.b)(h(),(function(e){return e.active?"1.2em":"1em"}),(function(e){return e.disable?"default":"pointer"}),(function(e){return e.active?"white":"grey"}),(function(e){return e.active?1:0}),(function(e){return e.disable?"white":"grey"}),(function(e){return e.disable?0:1}),(function(e){return e.disable?"unset":"translateY(2px)"}))),g={titles:["home","news","login","profile"],fnAlert:function(e){alert(e)}},b=function(e){var t=e.activeName,n=void 0===t?"":t,a=e.titles,r=void 0===a?g.titles:a;e.fnClick;return i.a.createElement(p,null,r&&r.map((function(e){return i.a.createElement(f,{key:e,to:"/".concat(e),active:e===n},e)})))};function v(){var e=Object(s.a)(["\n    width:100%;\n    min-height:50px;\n    position: sticky;\n    top:0;\n    background-color:#a3bad9;\n    display:flex;\n    justify-content:space-around;\n    align-items:center;\n"]);return v=function(){return e},e}var w=u.b.header(v()),y=function(e){var t=e.title;return i.a.createElement(w,null,i.a.createElement(b,{activeName:t}))},k=n(22),E=n.n(k);function x(){var e=Object(s.a)(["\n    color:blue;\n    font-size:0.7em;\n    font-style:italic;\n"]);return x=function(){return e},e}function j(){var e=Object(s.a)(["\n    margin-top:10px;\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\n    font-size:0.7em;\n"]);return O=function(){return e},e}function T(){var e=Object(s.a)(["\n    margin-top:10px;\n    text-align:left;\n"]);return T=function(){return e},e}function B(){var e=Object(s.a)(["\n    font-style:italic;\n    color:grey;\n    font-size:0.8em;\n"]);return B=function(){return e},e}function F(){var e=Object(s.a)(["\n     width:50%;\n"]);return F=function(){return e},e}function A(){var e=Object(s.a)(["\n    width:300px;\n    max-height:200px;\n"]);return A=function(){return e},e}function z(){var e=Object(s.a)(["\n    text-align:right;\n    font-size:1.8em;\n    color:#2F4F4F;\n    font-weight:bold;\n"]);return z=function(){return e},e}function C(){var e=Object(s.a)(["\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n"]);return C=function(){return e},e}function I(){var e=Object(s.a)(["\n    width:90%;\n    min-height:100px;\n    margin:20px auto;\n    padding:10px;\n    box-shadow: 0px 5px 10px 0px rgba(163,186,217,0.25);\n"]);return I=function(){return e},e}var M=u.b.div(I()),D=u.b.div(C()),G=u.b.h2(z()),R=u.b.img(A()),Y=u.b.div(F()),N=u.b.h6(B()),S=u.b.p(T()),W=Object(u.b)(N)(O()),Z=(Object(u.b)(N)(j()),u.b.a(x())),H={source:{id:null,name:"Cointelegraph.com"},author:"Cointelegraph By Erhan Kahraman",title:"BitPanda CEO Eric Demuth Says Bitcoin Is Gold 2.0 for Millenials",description:"BitPanda CEO Eric Demuth explains why regulations are necessary to avoid a \u201cWild West\u201d for crypto, and names first stop outside of the EU",url:"https://cointelegraph.com/news/bitpanda-ceo-eric-demuth-says-bitcoin-is-gold-20-for-millenials",urlToImage:"https://images.cointelegraph.com/images/740_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy80MTAxNGI3YjJlZTVmYzM1YTEzNWVmYjU2ZDU0MjQwNS5qcGc=.jpg",publishedAt:"2020-03-07T06:05:00Z",content:"The crypto ecosystem tends to see regulations as \u201cthe big bad wolf.\u201d In this narrative, government and regulators set rules that slow down innovation and damage growth for the crypto industry. That might have been the case a few years ago, but not anymore, ac\u2026 [+3260 chars]"},P=function(e){var t=e.title,n=void 0===t?H.title:t,a=e.autor,r=void 0===a?H.author:a,o=(e.description,e.publishedAt),c=void 0===o?H.publishedAt:o,l=e.urlToImage,s=void 0===l?H.urlToImage:l,u=e.content,h=void 0===u?H.content:u,m=e.source,d=(void 0===m&&H.source.name,e.url),p=void 0===d?H.url:d;return i.a.createElement(M,null,i.a.createElement(G,null,n),i.a.createElement(D,null,i.a.createElement(R,{src:s}),i.a.createElement(Y,null,i.a.createElement(N,null,r),i.a.createElement(W,null,i.a.createElement(E.a,{date:c,format:"YYYY/MM/DD"})),i.a.createElement(S,null,h),i.a.createElement(Z,{href:p,rel:"up",target:"#"},"Go to original"))))};function V(){var e=Object(s.a)(["\n    width:100%;\n    min-height:calc(100vh - 50px);\n    background-color:#FFFAFA;\n    display:flex;\n    flex-direction:column;\n    justify-content:center;\n    align-items:center;\n"]);return V=function(){return e},e}var L=u.b.div(V()),U=[{source:{id:null,name:"Seekingalpha.com"},author:"Vincenzo Furcillo",title:"The Present And Future Of The Ethereum Network",description:"The adoption and the development of applications interacting with the Ethereum network have never been stronger, opening many possibilities across a variety of industries.The rise of Decentralized Finance (DeFi) is gaining momentum and creating new investment\u2026",url:"https://seekingalpha.com/article/4330385-present-and-future-of-ethereum-network",urlToImage:"https://static.seekingalpha.com/uploads/2020/3/5/22037261-15834341276070118.png",publishedAt:"2020-03-06T22:13:57Z",content:"Introduction\r\nStill living in the shade of Bitcoin (BTC-USD), the Ethereum network and its currency, Ether (ETH-USD), currently occupies the second place in the cryptocurrencies market rank by capitalization. Despite the second place, Ethereum continues to be\u2026 [+10377 chars]"},{source:{id:null,name:"Forbes.com"},author:"Charles Bovaird, Contributor, Charles Bovaird, Contributor https://www.forbes.com/sites/cbovaird/",title:"Bitcoin's Momentum Remains Strong As It Faces Resistance",description:"Will bitcoin break out of its current range in the coming days?",url:"https://www.forbes.com/sites/cbovaird/2020/03/06/bitcoins-momentum-remains-strong-as-it-faces-resistance/",urlToImage:"https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F1158187863%2F0x0.jpg",publishedAt:"2020-03-06T22:02:54Z",content:"Bitcoin prices could break through technical resistance in the next few days, say analysts. (Photo ... [+] by Chesnot/Getty Images)\r\nGetty Images\r\nBitcoin has enjoyed some compelling gains lately, rising in value as the global asset markets respond to concern\u2026 [+2122 chars]"},{source:{id:null,name:"Newsbtc.com"},author:"Rick Delafont",title:"Bitcoin: An Option Call Against the \u2018Wrecking Ball\u2019 that is the Dollar",description:"The Federal Reserve\u2019s emergency interest rate cut this week highlighted that the central bank is anticipating the troubled times ahead. Raoul Pai, the CEO of Real Vision Group, says Bitcoin, like gold, is emerging as a worthy hedge against the potential demis\u2026",url:"https://www.newsbtc.com/2020/03/06/bitcoin-an-option-call-against-the-wrecking-ball-that-is-the-dollar/",urlToImage:"https://www.newsbtc.com/wp-content/uploads/2020/03/shutterstock_692687386-1200x780.jpg",publishedAt:"2020-03-06T22:00:47Z",content:"The Federal Reserve\u2019s emergency interest rate cut this week highlighted that the central bank is anticipating the troubled times ahead. Raoul Pai, the CEO of Real Vision Group, says Bitcoin, like gold, is emerging as a worthy hedge against the potential demis\u2026 [+2988 chars]"},{source:{id:null,name:"Bitcoinist.com"},author:"Ricardo Martinez",title:"Here Are the 7 Mistakes Made by New Bitcoin Traders",description:"We are going to take a look at a few mistakes new Bitcoin traders often make when they have real money on the line. How to Stay in Control as a New Bitcoin Trader Let\u2019s take a look at common mistakes made by inexperienced traders: Entering a trade without a p\u2026",url:"https://bitcoinist.com/7-mistakes-new-bitcoin-traders-make/",urlToImage:"https://bitcoinist.com/wp-content/uploads/2020/03/6-March-2.jpg",publishedAt:"2020-03-06T22:00:43Z",content:"We are going to take a look at a few mistakes new Bitcoin traders often make when they have real money on the line. \r\nLet\u2019s take a look at common mistakes made by inexperienced traders:\r\n<ul><li>Entering a trade without a plan in place could get you liquidate\u2026 [+3928 chars]"}],J=function(e){var t=e.title,n=void 0===t?null:t;return i.a.createElement(L,null,n?i.a.createElement("h3",null,n):U.map((function(e){return i.a.createElement(P,Object.assign({key:e.name},e))})))},q=function(e){var t=e.title;return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,{title:t}),i.a.createElement(J,{title:t}))};function _(){var e=Object(s.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  *:after, *:before {\n    box-sizing: inherit;\n  }\n\n  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{\n    margin: 0;\n    padding: 0;\n  }\n  h1, h2, h3, h4,h5, h6{\n    font-weight: normal;\n  }\n\n  body{\n    font-family: 'Helvetica', sans-serif;\n    font-size: 14px;\n    color: #000000;\n    font-weight: 400;\n    min-width: 320px;\n    overflow-x: hidden;\n    background: #ffffff;\n    line-height: normal;\n  }\n\n  input, textarea{\n    outline: none;\n  }\n"]);return _=function(){return e},e}var K=Object(u.a)(_()),Q=["home","news","login","profile"];var X=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(K,null),i.a.createElement(l.c,null,i.a.createElement(l.a,{path:"/",exact:!0,render:function(e){return i.a.createElement(q,Object.assign({},e,{title:"Home"}))}}),Q.map((function(e){return i.a.createElement(l.a,{key:e,path:"/".concat(e),render:function(t){return i.a.createElement(q,Object.assign({},t,{title:e}))}})})),i.a.createElement(l.a,{render:function(){return i.a.createElement(q,{title:"Sorry, Page not found"})}})))};o.a.render(i.a.createElement(c.a,{basename:"/"},i.a.createElement(l.a,{component:X})),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f7720f06.chunk.js.map