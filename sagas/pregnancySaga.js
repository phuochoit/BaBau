import { FETCH_PREGNANCY, FETCH_PREGNANCY_SUCCEEDED, FETCH_PREGNANCY_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest } from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { WEEKSHEMA } from "../values/schemaName";

function* fetchPregnancySaga(action) {
    try {
        let result = [];
        let allPregnancy = yield Realm.objects(WEEKSHEMA);
        for (let i = 0; i < allPregnancy.length; i++) {
            result[i] = {
                _id: allPregnancy[i]._id,
                overall_mom: allPregnancy[i].overall_mom,
                overall_baby: allPregnancy[i].overall_baby,
                mom_health: allPregnancy[i].mom_health,
                baby_health: allPregnancy[i].baby_health,
                Tip: allPregnancy[i].Tip,
                Examination: allPregnancy[i].Examination,
            }
        }
        yield put({ type: FETCH_PREGNANCY_SUCCEEDED, result })
    } catch (error) {
        yield put({ type: FETCH_PREGNANCY_FAILED, error });
    }
}

export function* watchFetchPregnancySaga() {
    yield takeLatest(FETCH_PREGNANCY, fetchPregnancySaga);
}