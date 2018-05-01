import { FETCH_ACTIVITY, FETCH_ACTIVITY_SUCCEEDED, FETCH_ACTIVITY_FAILED } from "../actions/actionsTypes";

const initialState = {
    error: '',
    currentlySending: false,
    activity: []
};

const activityReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_ACTIVITY:
            return { ...state, currentlySending: true }
        case FETCH_ACTIVITY_SUCCEEDED:
            return { ...state, currentlySending: false, activity: action.result }
        case FETCH_ACTIVITY_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default activityReducer;