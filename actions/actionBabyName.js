import { FETCH_BABYNAME, FETCH_BABYNAME_SUCCEEDED, FETCH_BABYNAME_FAILED, FETCH_BABYNAME_FAVOURITE} from "./actionsTypes";

export function fetchBabyNameAction() {
    return {
        type: FETCH_BABYNAME,
    }
}

export function fetchBabyNameFavouriteAction(action) {
    return {
        type: FETCH_BABYNAME_FAVOURITE,
        action
    }
}

//action send by redux-saga
function fetchSuccessBabyNameAction(result) {
    return {
        type: FETCH_BABYNAME_SUCCEEDED,
        result
    }
}

function fetchFaileBabyNameAction(error) {
    return {
        type: FETCH_BABYNAME_FAILED,
        error: error
    }
}