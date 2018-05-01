import { FETCH_BALANCE, FETCH_BALANCE_SUCCEEDED, FETCH_BALANCE_FAILED } from "./actionsTypes";

export function fetchBalanceAction() {
    return {
        type: FETCH_BALANCE,
    }
}
//action send by redux-saga
function fetchSuccessBalanceAction(result) {
    return {
        type: FETCH_BALANCE_SUCCEEDED,
        result
    }
}

function fetchFaileBalanceAction(error) {
    return {
        type: FETCH_BALANCE_FAILED,
        error: error
    }
}