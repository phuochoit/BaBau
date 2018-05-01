import { FETCH_FOOD, FETCH_FOOD_SUCCEEDED, FETCH_FOOD_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { FOODSHEMA } from "../values/schemaName";

function* fetchFoodSaga(action) {
    try {
        let result = [];
        let allFood = yield Realm.objects(FOODSHEMA).filtered('status = 0');
        yield put({ type: FETCH_FOOD_SUCCEEDED, result: allFood })
    } catch (error) {
        yield put({ type: FETCH_FOOD_FAILED, error });
    }
}

export function* watchFetchFoodSaga() {
    yield takeLatest(FETCH_FOOD, fetchFoodSaga);
}