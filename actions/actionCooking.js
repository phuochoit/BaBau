import {
    FETCH_COOKING, FETCH_COOKING_FAVOURITE, FETCH_COOKING_SUCCEEDED, FETCH_COOKING_FAVOURITE_SUCCEEDED, FETCH_COOKING_FAILED, FETCH_COOKING_HINT, FETCH_COOKING_HINT_SUCCEEDED, FETCH_COOKING_BY_SEARCH_TERM, FETCH_COOKING_BY_SEARCH_TERM_SUCCEEDED
} from "./actionsTypes";

export function fetchCookingAction() {
    return {
        type: FETCH_COOKING,
    }
}

export function fetchCookingHintAction() {
    return {
        type: FETCH_COOKING_HINT,
    }
}

export function fetchCookingFavouriteAction(action) {
    return {
        type: FETCH_COOKING_FAVOURITE,
        action
    }
}

export function fetchCookingSearchTermAction(action) {
    return {
        type: FETCH_COOKING_BY_SEARCH_TERM,
        action
    }
}

//action send by redux-saga
function fetchSuccessCookingAction(result) {
    return {
        type: FETCH_COOKING_SUCCEEDED,
        result
    }
}
function fetchSuccessCookingHintAction(result) {
    return {
        type: FETCH_COOKING_HINT_SUCCEEDED,
        result
    }
}
function fetchSuccessCookingSearchTermAction(result) {
    return {
        type: FETCH_COOKING_BY_SEARCH_TERM_SUCCEEDED,
        result
    }
}
function fetchSuccessCookingFavouriteAction(result) {
    return {
        type: FETCH_COOKING_FAVOURITE_SUCCEEDED,
        result
    }
}
function fetchFaileCookingAction(error) {
    return {
        type: FETCH_PREGNANCY_FAILED,
        error: error
    }
}