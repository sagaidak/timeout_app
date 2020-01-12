import {CATEGORY_CHANGE,
        CATEGORY_FETCHED,
        CATEGORY_FAILED} from '../types';
import {api} from '../API';

export const categoryChanged = (category) => {
    return {
        type: CATEGORY_CHANGE,
        payload: category,
    }
};

export const getCategory = (category) => async (dispatch) => {
    function onSuccess(success) {
        dispatch({type: CATEGORY_FETCHED, payload: success});
        return success
    }
    function onError(error) {
        dispatch({type: CATEGORY_FAILED, payload: error});
        return error
    }
    try {
        const success = await api.getCategoryProducts(category);
        return onSuccess(success)
    } catch (e) {
        return onError(e)
    }
};
