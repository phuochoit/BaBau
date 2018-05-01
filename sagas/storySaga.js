import { FETCH_STORY, FETCH_STORY_MORE, FETCH_STORY_FAVOURITE, UPDATING_STORY_FAVOURITE, FETCH_STORY_SUCCEEDED, FETCH_STORY_MORE_SUCCEEDED, FETCH_STORY_FAVOURITE_SUCCEEDED, UPDATING_STORY_FAVOURITE_SUCCEEDED, FETCH_STORY_FAILED } from "../actions/actionsTypes";
// import redux-saga
import { put, takeLatest, call } from "redux-saga/effects";
import Realm from "../databases/allSchemas";
import { STORYSHEMA } from "../values/schemaName";

function* fetchStorySaga() {
    try {
        let allStory = yield Realm.objects(STORYSHEMA).sorted('title', false).slice(0,50);
        yield put({ type: FETCH_STORY_SUCCEEDED, result: allStory })
    } catch (error) {
        yield put({ type: FETCH_STORY_FAILED, error });
    }
}

function* fetchStoryFavouriteSaga() {
    try {
        let allFavourite = yield Realm.objects(STORYSHEMA).filtered('is_favourite = 1').sorted('title', false);
        yield put({ type: FETCH_STORY_FAVOURITE_SUCCEEDED, result: allFavourite })
    } catch (error) {
        yield put({ type: FETCH_STORY_FAILED, error });
    }
}


function* fetchStoryMoreSaga(action) {
    try {
        
        let allStory = yield Realm.objects(STORYSHEMA).sorted('_id', false).slice(20, action.action + 20);
        yield put({ type: FETCH_STORY_MORE_SUCCEEDED, result: allStory })
    } catch (error) {
        yield put({ type: FETCH_STORY_FAILED, error });
    }
}

function* fetchUpdatingStoryFavouriteSaga(action) {
    try {
        Realm.write(() => {
            let updatingStory = Realm.objectForPrimaryKey(STORYSHEMA, action.action.id);
            updatingStory.is_favourite = (action.action.is_favourite === 0) ? 1 : 0;
        });
        yield put({ type: UPDATING_STORY_FAVOURITE_SUCCEEDED, result: action.action })
        yield call(fetchStoryFavouriteSaga);
    } catch (error) {
        yield put({ type: FETCH_STORY_FAILED, error });
    }
}

export function* watchFetchStorySaga() {
    yield takeLatest(FETCH_STORY, fetchStorySaga);
}

export function* watchFetchStoryMoreSaga() {
    yield takeLatest(FETCH_STORY_MORE, fetchStoryMoreSaga);
}

export function* watchFetchStoryFavouriteSaga() {
    yield takeLatest(FETCH_STORY_FAVOURITE, fetchStoryFavouriteSaga);
}

export function* watchFetchUpdatingStoryFavouriteSaga() {
    yield takeLatest(UPDATING_STORY_FAVOURITE, fetchUpdatingStoryFavouriteSaga);
}
