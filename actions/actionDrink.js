import { FETCH_DRINK, FETCH_DRINK_SUCCEEDED, FETCH_DRINK_FAILED } from "./actionsTypes";

export function fetchDrinkAction() {
    return {
        type: FETCH_DRINK,
    }
}

//action send by redux-saga
function fetchSuccessDrinkAction(result) {
    return {
        type: FETCH_DRINK_SUCCEEDED,
        result
    }
}

function fetchFaileDrinkAction(error) {
    return {
        type: FETCH_DRINK_FAILED,
        error: error
    }
}