import axios from 'axios';
import { Type } from './types';
import { standartReq } from '../constants';

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
      dispatch(uploadDataInStore(result.data.articles));
  
    };
  };
