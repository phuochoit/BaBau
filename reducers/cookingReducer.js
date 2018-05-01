import { FETCH_COOKING, FETCH_COOKING_FAVOURITE, FETCH_COOKING_SUCCEEDED, FETCH_COOKING_FAVOURITE_SUCCEEDED, FETCH_COOKING_FAILED, FETCH_COOKING_HINT, FETCH_COOKING_HINT_SUCCEEDED, FETCH_COOKING_BY_SEARCH_TERM, FETCH_COOKING_BY_SEARCH_TERM_SUCCEEDED } from "../actions/actionsTypes";
import { filter } from "lodash";

const initialState = {
    error: '',
    currentlySending: false,
    result_search: [],
    cooking: {
        all: [],
        favourite: [],
        hint: []
    }
};

const cookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COOKING:
            return { ...state, currentlySending: true }
        case FETCH_COOKING_SUCCEEDED:
            return {
                ...state, currentlySending: false, cooking: {
                    ...state.cooking,
                    all: action.result.all,
                    favourite: action.result.favourite
                }
            }
        case FETCH_COOKING_HINT_SUCCEEDED:
            return {
                ...state, currentlySending: false, cooking: {
                    ...state.cooking,
                    hint: action.result.hint
                }
            }
        case FETCH_COOKING_FAVOURITE_SUCCEEDED:
            return {
                ...state, cooking: {
                    ...state.cooking,
                    hint: filter(state.cooking.hint, function (val, key) {
                        if (action.result.id === val._id) {
                            return { ...val, is_favourite: (val.is_favourite === 0) ? 1 : 0 }
                        } else {
                            return val
                        }
                    })
                }
            }
        case FETCH_COOKING_BY_SEARCH_TERM_SUCCEEDED:
            console.log('====================================');
            console.log('FETCH_COOKING_BY_SEARCH_TERM_SUCCEEDED', action.result);
            console.log('====================================');
            return { ...state, result_search: action.result }
        case FETCH_COOKING_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default cookingReducer;