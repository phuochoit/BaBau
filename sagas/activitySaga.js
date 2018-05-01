import { FETCH_ACTIVITY, FETCH_ACTIVITY_SUCCEEDED, FETCH_ACTIVITY_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { ACTIVITYSHEMA } from "../values/schemaName";

function* fetchActivitySaga() {
    try {
        let allActivity = yield Realm.objects(ACTIVITYSHEMA).sorted('name', false);
        yield put({ type: FETCH_ACTIVITY_SUCCEEDED, result: allActivity })
    } catch (error) {
        yield put({ type: FETCH_ACTIVITY_FAILED, error });
    }
}

export function* watchFetchActivitySaga() {
    yield takeLatest(FETCH_ACTIVITY, fetchActivitySaga);
}