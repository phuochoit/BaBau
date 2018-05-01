import { FETCH_VACCINATION, FETCH_VACCINATION_SUCCEEDED, FETCH_VACCINATION_FAILED } from "../actions/actionsTypes";
import { filter } from "lodash";

const initialState = {
    error: '',
    currentlySending: false,
    vaccination: []
};

const vaccinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VACCINATION:
            return { ...state, currentlySending: true }
        case FETCH_VACCINATION_SUCCEEDED:
            return {
                ...state, currentlySending: false, vaccination: action.result
            }
        case FETCH_VACCINATION_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default vaccinationReducer;