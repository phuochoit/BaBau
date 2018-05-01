import { FETCH_COOKING, FETCH_COOKING_FAVOURITE, FETCH_COOKING_SUCCEEDED, FETCH_COOKING_FAVOURITE_SUCCEEDED, FETCH_COOKING_FAILED, FETCH_COOKING_HINT, FETCH_COOKING_HINT_SUCCEEDED, FETCH_COOKING_BY_SEARCH_TERM, FETCH_COOKING_BY_SEARCH_TERM_SUCCEEDED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest, call } from "redux-saga/effects";
import { random } from "lodash";
import Realm from "../databases/allSchemas";
import { COOKINGSHEMA } from "../values/schemaName";

function* fetchCookingSaga(action) {
    try {
        let allCooking = yield Realm.objects(COOKINGSHEMA);
        let favouriteCooking = allCooking.filtered('is_favourite = 1');
        result = {
            all: allCooking,
            favourite: favouriteCooking,
        }
        yield put({ type: FETCH_COOKING_SUCCEEDED, result })
    } catch (error) {
        yield put({ type: FETCH_COOKING_FAILED, error });
    }
}

function* fetchCookingHintSaga(action) {
    try {
        let allCooking = yield Realm.objects(COOKINGSHEMA);
        let hintCooking = [];
        for (let index = 0; index < 5; index++) {
            ran = random(allCooking.length);
            hintCooking[index] = allCooking[ran];
        }
        result = {
            hint: hintCooking,
        }
        yield put({ type: FETCH_COOKING_HINT_SUCCEEDED, result })
    } catch (error) {
        yield put({ type: FETCH_COOKING_FAILED, error });
    }
}

function* fetchCookingFavouriteSaga(action) {
    try {
        Realm.write(() => {
            let updatingCooking = Realm.objectForPrimaryKey(COOKINGSHEMA, action.action.id);
            updatingCooking.is_favourite = (action.action.is_favourite === 0) ? 1 : 0;

        });
        yield put({ type: FETCH_COOKING_FAVOURITE_SUCCEEDED, result: action.action })
        yield call(fetchCookingSaga);
    } catch (error) {
        yield put({ type: FETCH_COOKING_FAILED, error });
    }
}



function* fetchCookingSearchTermSaga(action) {
    try {
        let cookingTerm = yield Realm.objects(COOKINGSHEMA).filtered("searchTerm CONTAINS '" + action.action + "'");
        yield put({ type: FETCH_COOKING_BY_SEARCH_TERM_SUCCEEDED, result: cookingTerm })
    } catch (error) {
        yield put({ type: FETCH_COOKING_FAILED, error });
    }
}

export function* watchFetchCookingSaga() {
    yield takeLatest(FETCH_COOKING, fetchCookingSaga);
}
export function* watchFetchCookingHintSaga() {
    yield takeLatest(FETCH_COOKING_HINT, fetchCookingHintSaga);
}
export function* watchFetchCookingFavouriteSaga() {
    yield takeLatest(FETCH_COOKING_FAVOURITE, fetchCookingFavouriteSaga);
}
export function* watchFetchCookingSearchTermSaga() {
    yield takeLatest(FETCH_COOKING_BY_SEARCH_TERM, fetchCookingSearchTermSaga);
}
