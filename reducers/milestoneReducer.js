import { FETCH_MILESTONE, FETCH_MILESTONE_SUCCEEDED, FETCH_MILESTONE_FAILED } from "../actions/actionsTypes";

const initialState = {
    error: '',
    currentlySending: false,
    milestone: []
};

const milestoneReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_MILESTONE:
            return { ...state, currentlySending: true }
        case FETCH_MILESTONE_SUCCEEDED:
            return { ...state, currentlySending: false, milestone: action.result }
        case FETCH_MILESTONE_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}

export default milestoneReducer;