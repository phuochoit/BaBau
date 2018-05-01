import { FETCH_FOOD, FETCH_FOOD_SUCCEEDED, FETCH_FOOD_FAILED } from "./actionsTypes";

export function fetchFoodAction() {
    return {
        type: FETCH_FOOD,
    }
}

//action send by redux-saga
function fetchSuccessFoodAction(result) {
    return {
        type: FETCH_FOOD_SUCCEEDED,
        result
    }
}

function fetchFaileFoodAction(error) {
    return {
        type: FETCH_FOOD_FAILED,
        error: error
    }
}