import {CATEGORY_CHANGE, CATEGORY_FAILED,
CATEGORY_FETCHED} from '../types';

const INITIAL_STATE = {
    categoryName: 'qweqwe',
    products: [{
        name: 'qwe',
        imgUrl: '',
    }]
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CATEGORY_CHANGE:
            return {
                ...state,
                categoryName: action.payload
            };
        case CATEGORY_FETCHED:
            console.log(action.payload);
            return {
                ...state,
                products: action.payload
            };
        case CATEGORY_FAILED:
            return {
                ...state
            };
        default: return state
    }
}