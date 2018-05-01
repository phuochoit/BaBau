import { FETCH_PREGNANCY, FETCH_PREGNANCY_SUCCEEDED, FETCH_PREGNANCY_FAILED } from "./actionsTypes";

export function fetchPregnancyAction() {
    return {
        type: FETCH_PREGNANCY,
    }
}

//action send by redux-saga
function fetchSuccessPregnancyAction(result) {
    return {
        type: FETCH_PREGNANCY_SUCCEEDED,
        result
    }
}

function fetchFailePregnancyAction(error) {
    return {
        type: FETCH_PREGNANCY_FAILED,
        error: error
    }
}