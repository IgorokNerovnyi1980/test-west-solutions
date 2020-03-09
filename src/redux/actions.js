import axios from 'axios';
import { Type } from './types';
import { standartReq } from '../constants';

export function changeIsAutorization(bool){
  return {
    type: Type.IS_AUTORIZATION,
    payload: bool,
  };
};

function changeCurrentPage(string) {
    return {
      type: Type.CHANGE_CURRENT_PAGE,
      payload: string,
    };
  };

function autorization(bool) {
    return {
      type: Type.AUTORIZATION,
      payload: bool,
    };
  };

function uploadDataInStore(arr) {
    return {
      type: Type.GET_DATA,
      payload: arr,
    };
  };

export const handleChangeCurrentPage = name => {
    return changeCurrentPage(name);
};

export const getNews = function() {

    return async function(dispatch, getStore) {
      const result = await axios.get(standartReq)
        .catch(error => {
          return error;
        });
        if(result.status === 200){
            console.log('good')
            dispatch(uploadDataInStore(result.data.articles));
        }else{
            console.log('bed')
        }
     
  
    };
  };
