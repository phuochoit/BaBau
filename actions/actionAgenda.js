import { FETCH_AGENDA, FETCH_AGENDA_SUCCEEDED, FETCH_UPDATE_AGENDA, FETCH_UPDATE_AGENDA_SUCCEEDED, FETCH_INSERT_AGENDA, FETCH_INSERT_AGENDA_SUCCEEDED, FETCH_DELETE_AGENDA, FETCH_DELETE_AGENDA_SUCCEEDED, FETCH_AGENDA_FAILED } from "./actionsTypes";

export function fetchAgendaAction() {
    return {
        type: FETCH_AGENDA,
    }
}
export function fetchUpdateAgendaAction(action) {
    return {
        type: FETCH_UPDATE_AGENDA,
        action
    }
}
export function fetchInsertAgendaAction(action) {
    return {
        type: FETCH_INSERT_AGENDA,
        action
    }
}
export function fetchDeleteAgendaAction(action) {
    return {
        type: FETCH_DELETE_AGENDA,
        action
    }
}
//action send by redux-saga
function fetchSuccessAgendaAction(result) {
    return {
        type: FETCH_AGENDA_SUCCEEDED,
        result
    }
}
function fetchSuccessUpdateAgendaAction(result) {
    return {
        type: FETCH_UPDATE_AGENDA_SUCCEEDED,
        result
    }
}
function fetchSuccessInsertAgendaAction(result) {
    return {
        type: FETCH_INSERT_AGENDA_SUCCEEDED,
        result
    }
}
function fetchSuccessDeleteAgendaAction(result) {
    return {
        type: FETCH_DELETE_AGENDA_SUCCEEDED,
        result
    }
}

function fetchFaileAgendaAction(error) {
    return {
        type: FETCH_AGENDA_FAILED,
        error: error
    }
}