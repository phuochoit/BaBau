import { FETCH_FOOD, FETCH_FOOD_SUCCEEDED, FETCH_FOOD_FAILED } from "../actions/actionsTypes";
import { filter } from "lodash";

const initialState = {
    error: '',
    currentlySending: false,
    food: {
        good: [],
        notgood: [],
    }
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FOOD:
            return { ...state, currentlySending: true }
        case FETCH_FOOD_SUCCEEDED:
            return {
                ...state, currentlySending: false, food: {
                    good: filter(action.result, function (v) {
                        return (v.advise == 5 || v.advise == 6 || v.advise == 7 || v.advise == 9)
                    }),
                    notgood: filter(action.result, function (v) {
                        return (v.advise == 1 || v.advise == 3 || v.advise == 4)
                    })
                }
            }
        case FETCH_FOOD_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default foodReducer;