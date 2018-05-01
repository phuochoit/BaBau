import { FETCH_MILESTONE, FETCH_MILESTONE_SUCCEEDED, FETCH_MILESTONE_FAILED } from "./actionsTypes";

export function fetchMileStoneAction() {
    return {
        type: FETCH_MILESTONE,
    }
}
//action send by redux-saga
function fetchSuccessMileStoneAction(result) {
    return {
        type: FETCH_MILESTONE_SUCCEEDED,
        result
    }
}

function fetchFaileMileStoneAction(error) {
    return {
        type: FETCH_MILESTONE_FAILED,
        error: error
    }
}