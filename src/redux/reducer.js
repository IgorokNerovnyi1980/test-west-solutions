import { Type } from './types';

const initialState = {
  news: null,
  titles:['home', 'news', 'login', 'profile' ],
  currentPage : 'login',
  notFound : 'Sorry, Page not found',
  notValid : 'Not valid login or password',
  greeting:'Hello! This application will help you to keep abreast of current news. To use individual filters please log in.',
  individualGreeting: 'Glad to see you again! Good news for you - news filters have been added to the news section.',
  isAutorization: false,
  profile : { 
    name:'admin',
    location: 'USA',
    password:'12345',
    filters: ['javaScript', 'react', 'motorcycles'],
   }

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.AUTORIZATION:
      return { ...state, isAutorization: action.payload };
    case Type.GET_DATA:
      return { ...state, news: action.payload };
    case Type.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case Type.IS_AUTORIZATION:
      return { ...state, isAutorization: action.payload };
    default:
      return state;
  }
};
export default reducer;