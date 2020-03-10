import axios from 'axios';
import {Type} from './types';
import {standartReq} from '../constants';

function isAutorization(bool) {
    return {type: Type.IS_AUTORIZATION, payload: bool};
};

function changeCurrentPage(string) {
    return {type: Type.CHANGE_CURRENT_PAGE, payload: string};
};

function uploadDataInStore(arr) {
    return {type: Type.GET_DATA, payload: arr};
};

export const handleChangeCurrentPage = function (name) {
    return changeCurrentPage(name);
};

export const getNews = function () {

    return async function (dispatch) {
        const result = await axios
            .get(standartReq)
            .catch(error => {
                return error;
            });
        if (result.status === 200) {
            dispatch(uploadDataInStore(result.data.articles));
        }

    };
};

export const getStatusAutorization = function () {

    return async function (dispatch) {
        const result = await localStorage.getItem('goodNews');

        if (result === undefined) {
            dispatch(isAutorization(false));
        } else {
            dispatch(isAutorization(
                result === 'true'
                    ? Boolean(1)
                    : Boolean(0)
            ));
        }
    };

};

export const changeIsAutorization = function (bool) {
    localStorage.setItem('goodNews', bool);
    return isAutorization(bool)
}

export const logOut = function () {
    localStorage.setItem('goodNews', false);
    return isAutorization(false);
}
