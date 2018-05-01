import { FETCH_BALANCE, FETCH_BALANCE_SUCCEEDED, FETCH_BALANCE_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { BALANCESHEMA } from "../values/schemaName";

function* fetchBalanceSaga(action) {
    try {
        let result = [];
        let allBalance = yield Realm.objects(BALANCESHEMA);
        yield put({ type: FETCH_BALANCE_SUCCEEDED, result: allBalance })
    } catch (error) {
        yield put({ type: FETCH_BALANCE_FAILED, error });
    }
}

export function* watchFetchBalanceSaga() {
    yield takeLatest(FETCH_BALANCE, fetchBalanceSaga);
}