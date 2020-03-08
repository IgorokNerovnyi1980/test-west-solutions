import { Type } from './types';

const initialState = {
  news: null,
  titles:['home', 'news', 'login', 'profile' ],
  currentPage : 'home',
  notFound : 'Sorry, Page not found',
  isAutorization: false,

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.AUTORIZATION:
      return { ...state, isAutorization: action.payload };
    case Type.GET_DATA:
      return { ...state, news: action.payload };
    case Type.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
export default reducer;