import { FETCH_DRINK, FETCH_DRINK_SUCCEEDED, FETCH_DRINK_FAILED } from "../actions/actionsTypes";
import { filter } from "lodash";

const initialState = {
    error: '',
    currentlySending: false,
    drink: {
        good: [],
        notgood: [],
    }
};

const drinkReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DRINK:
            return { ...state, currentlySending: true }
        case FETCH_DRINK_SUCCEEDED:
            return {
                ...state, currentlySending: false, drink: {
                    good: filter(action.result, function (v) {
                        return (v.advise == 8 || v.advise == 5 || v.advise == 6 || v.advise == 7 || v.advise == 9)
                    }),
                    notgood: filter(action.result, function (v) {
                        return (v.advise == 2 || v.advise == 1 || v.advise == 3 || v.advise == 4)
                    })
                }
            }
        case FETCH_DRINK_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default drinkReducer;