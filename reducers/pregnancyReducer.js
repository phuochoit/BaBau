import { FETCH_PREGNANCY, FETCH_PREGNANCY_SUCCEEDED, FETCH_PREGNANCY_FAILED } from "../actions/actionsTypes";

const initialState = {
    error: '',
    currentlySending: false,
    pregnancy: []
};

const pregnancyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PREGNANCY:
            return { ...state, currentlySending: true }
        case FETCH_PREGNANCY_SUCCEEDED:
            return { ...state, currentlySending: false, pregnancy: action.result }
        case FETCH_PREGNANCY_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default pregnancyReducer;