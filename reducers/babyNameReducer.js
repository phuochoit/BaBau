import { FETCH_BABYNAME, FETCH_BABYNAME_SUCCEEDED, FETCH_BABYNAME_FAILED } from "../actions/actionsTypes";
import { filter } from "lodash";

const initialState = {
    error: '',
    currentlySending: false,
    babyName: {
        boy: [],
        girl: [],
        favourite: []
    }
};

const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BABYNAME:
            return { ...state, currentlySending: true }
        case FETCH_BABYNAME_SUCCEEDED:
            return {
                ...state, currentlySending: false, babyName: {
                    boy: filter(action.result, ['sex', 1]),
                    girl: filter(action.result, ['sex', 0]),
                    favourite: filter(action.result, ['is_favourite', 1])
                }
            }
        case FETCH_BABYNAME_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default balanceReducer;