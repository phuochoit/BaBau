import { FETCH_VACCINATION, FETCH_VACCINATION_SUCCEEDED, FETCH_VACCINATION_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { VACCINATIONSHEMA } from "../values/schemaName";

function* fetchVaccinationSaga(action) {
    try {
        let result = [];
        let allVaccination = yield Realm.objects(VACCINATIONSHEMA);
        yield put({ type: FETCH_VACCINATION_SUCCEEDED, result: allVaccination })
    } catch (error) {
        yield put({ type: FETCH_VACCINATION_FAILED, error });
    }
}

export function* watchFetchVaccinationSaga() {
    yield takeLatest(FETCH_VACCINATION, fetchVaccinationSaga);
}