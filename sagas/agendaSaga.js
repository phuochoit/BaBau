import { FETCH_AGENDA, FETCH_AGENDA_SUCCEEDED, FETCH_UPDATE_AGENDA, FETCH_UPDATE_AGENDA_SUCCEEDED, FETCH_INSERT_AGENDA, FETCH_INSERT_AGENDA_SUCCEEDED, FETCH_DELETE_AGENDA, FETCH_DELETE_AGENDA_SUCCEEDED, FETCH_AGENDA_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest, call} from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { DIARYSHEMA, MILESTONESHEMA } from "../values/schemaName";

function* fetchAgendaSaga() {
    try {
        let allAgenda = yield Realm.objects(DIARYSHEMA).sorted('_id', false);
        yield put({ type: FETCH_AGENDA_SUCCEEDED, result: allAgenda })
    } catch (error) {
        yield put({ type: FETCH_AGENDA_FAILED, error });
    }
}

function* fetchInsertAgendaSaga(action) {
    try {
        Realm.write(() => {
            Realm.create(DIARYSHEMA, action.action);
        });

    } catch (error) {
        yield put({ type: FETCH_AGENDA_FAILED, error });
    }
}

function* fetchUpdateAgendaSaga(action) {
    try {
        
        Realm.write(() => {
            let updatingAgenda = Realm.objectForPrimaryKey(DIARYSHEMA, action.action._id);
            updatingAgenda.name =  action.action.name;
            updatingAgenda.content = action.action.content;
            updatingAgenda.status = action.action.status;
            updatingAgenda.milestone = action.action.milestone;
        });

    } catch (error) {
        yield put({ type: FETCH_AGENDA_FAILED, error });
    }
}


function* fetchDeleteAgendaSaga(action) {
    try {
        Realm.write(() => {
            deletingAgenda = Realm.objectForPrimaryKey(DIARYSHEMA, action.action);
            Realm.delete(deletingAgenda);
        });
        yield call(fetchAgendaSaga);

    } catch (error) {
        yield put({ type: FETCH_AGENDA_FAILED, error });
    }
}

export function* watchFetchAgendaSaga() {
    yield takeLatest(FETCH_AGENDA, fetchAgendaSaga);
}

export function* watchFetchInsertAgendaSaga() {
    yield takeLatest(FETCH_INSERT_AGENDA, fetchInsertAgendaSaga);
}


export function* watchFetchUpdateAgendaSaga() {
    yield takeLatest(FETCH_UPDATE_AGENDA, fetchUpdateAgendaSaga);
}

export function* watchFetchDeleteAgendaSaga() {
    yield takeLatest(FETCH_DELETE_AGENDA, fetchDeleteAgendaSaga);
}
