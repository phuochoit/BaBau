import { FETCH_VACCINATION, FETCH_VACCINATION_SUCCEEDED, FETCH_VACCINATION_FAILED } from "./actionsTypes";

export function fetchVaccinationAction() {
    return {
        type: FETCH_VACCINATION,
    }
}

//action send by redux-saga
function fetchSuccessVaccinationAction(result) {
    return {
        type: FETCH_VACCINATION_SUCCEEDED,
        result
    }
}

function fetchFaileVaccinationAction(error) {
    return {
        type: FETCH_VACCINATION_FAILED,
        error: error
    }
}