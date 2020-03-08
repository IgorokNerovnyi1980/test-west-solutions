export const API = {
    url:'http://newsapi.org/v2/top-headlines?',
    cantry:'country=us&',
    key:'apiKey=d0a98c7bc6be488cabf56ee0e965b091'
};

export const standartReq = `${API.url}${API.cantry}${API.key}`

// http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-07&sortBy=publishedAt&apiKey=API_KEY