import { FETCH_MILESTONE, FETCH_MILESTONE_SUCCEEDED, FETCH_MILESTONE_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { MILESTONESHEMA } from "../values/schemaName";

function* fetchMilestoneSaga() {
    try {
        let allMilestone = yield Realm.objects(MILESTONESHEMA).sorted('name', false);
        yield put({ type: FETCH_MILESTONE_SUCCEEDED, result: allMilestone })
    } catch (error) {
        yield put({ type: FETCH_MILESTONE_FAILED, error });
    }
}

export function* watchFetchMilestoneSaga() {
    yield takeLatest(FETCH_MILESTONE, fetchMilestoneSaga);
}