import { FETCH_STORY, FETCH_STORY_MORE, FETCH_STORY_FAVOURITE, UPDATING_STORY_FAVOURITE, FETCH_STORY_SUCCEEDED, FETCH_STORY_MORE_SUCCEEDED, FETCH_STORY_FAVOURITE_SUCCEEDED, UPDATING_STORY_FAVOURITE_SUCCEEDED, FETCH_STORY_FAILED } from "./actionsTypes";

export function fetchStoryAction() {
    return {
        type: FETCH_STORY,
    }
}

export function fetchStoryFavouriteAction() {
    return {
        type: FETCH_STORY_FAVOURITE,
    }
}

export function fetchStoryMoreAction(action) {
    return {
        type: FETCH_STORY_MORE,
        action
    }
}

export function updattingStoryFavouriteAction(action) {
    return {
        type: UPDATING_STORY_FAVOURITE,
        action
    }
}


//action send by redux-saga
function fetchSuccessStoryAction(result) {
    return {
        type: FETCH_STORY_SUCCEEDED,
        result
    }
}

function fetchSuccessStoryMoreAction(result) {
    return {
        type: FETCH_STORY_MORE_SUCCEEDED,
        result
    }
}

function fetchSuccessStoryFavouriteAction(result) {
    return {
        type: FETCH_STORY_FAVOURITE_SUCCEEDED,
        result
    }
}

function updattingSuccessStoryFavouriteAction(result) {
    return {
        type: UPDATING_STORY_FAVOURITE_SUCCEEDED,
        result
    }
}
function fetchFailehStoryAction(error) {
    return {
        type: FETCH_STORY_FAILED,
        error: error
    }
}