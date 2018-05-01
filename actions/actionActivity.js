import { FETCH_ACTIVITY, FETCH_ACTIVITY_SUCCEEDED, FETCH_ACTIVITY_FAILED } from "./actionsTypes";

export function fetchActivityction() {
    return {
        type: FETCH_ACTIVITY,
    }
}
//action send by redux-saga
function fetchSuccessActivityAction(result) {
    return {
        type: FETCH_ACTIVITY_SUCCEEDED,
        result
    }
}

function fetchFaileActivityAction(error) {
    return {
        type: FETCH_ACTIVITY_FAILED,
        error: error
    }
}