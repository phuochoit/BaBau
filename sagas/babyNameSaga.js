import { FETCH_BABYNAME, FETCH_BABYNAME_SUCCEEDED, FETCH_BABYNAME_FAILED, FETCH_BABYNAME_FAVOURITE} from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest, call } from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { BABYNAMESHEMA } from "../values/schemaName";

function* fetchBabyNameSaga(action) {
    try {
        let allBabyName = yield Realm.objects(BABYNAMESHEMA).sorted('bletter', false);
        yield put({ type: FETCH_BABYNAME_SUCCEEDED, result: allBabyName })
    } catch (error) {
        yield put({ type: FETCH_BABYNAME_FAILED, error });
    }
}

function* fetchBabyNameFavouriteSaga(action) {
    try {
        Realm.write(() => {
            let updatingBabyName = Realm.objectForPrimaryKey(BABYNAMESHEMA, action.action.id);
            updatingBabyName.is_favourite = (action.action.is_favourite === 0) ? 1 : 0;

        });
        yield call(fetchBabyNameSaga);
    } catch (error) {
        yield put({ type: FETCH_BABYNAME_FAILED, error });
    }
}

export function* watchFetchBabyNameFavouriteSaga() {
    yield takeLatest(FETCH_BABYNAME_FAVOURITE, fetchBabyNameFavouriteSaga);
}

export function* watchFetchBabyNameSaga() {
    yield takeLatest(FETCH_BABYNAME, fetchBabyNameSaga);
}