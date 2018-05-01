import { FETCH_BALANCE, FETCH_BALANCE_SUCCEEDED, FETCH_BALANCE_FAILED } from "../actions/actionsTypes";
import { filter } from "lodash";

const initialState = {
    error: '',
    currentlySending: false,
    balance: []
};

const balanceReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BALANCE:
            return { ...state, currentlySending: true }
        case FETCH_BALANCE_SUCCEEDED:
            return {
                ...state, currentlySending: false, balance: action.result
            }
        case FETCH_BALANCE_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default balanceReducer;