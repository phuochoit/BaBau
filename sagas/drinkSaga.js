import { FETCH_DRINK, FETCH_DRINK_SUCCEEDED, FETCH_DRINK_FAILED  } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { FOODSHEMA } from "../values/schemaName";

function* fetchDrinkSaga(action) {
    try {
        let result = [];
        let allDrink= yield Realm.objects(FOODSHEMA).filtered('status = 1');
        yield put({ type: FETCH_DRINK_SUCCEEDED, result: allDrink })
    } catch (error) {
        yield put({ type: FETCH_DRINK_FAILED, error });
    }
}

export function* watchFetchDrinkSaga() {
    yield takeLatest(FETCH_DRINK, fetchDrinkSaga);
}