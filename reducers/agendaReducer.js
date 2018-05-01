import { FETCH_AGENDA, FETCH_AGENDA_SUCCEEDED, FETCH_UPDATE_AGENDA, FETCH_UPDATE_AGENDA_SUCCEEDED, FETCH_INSERT_AGENDA, FETCH_INSERT_AGENDA_SUCCEEDED, FETCH_DELETE_AGENDA, FETCH_DELETE_AGENDA_SUCCEEDED, FETCH_AGENDA_FAILED} from "../actions/actionsTypes";

const initialState = {
    error: '',
    currentlySending: false,
    agenda: []
};

const agendaReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AGENDA:
            return { ...state, currentlySending: true }
        case FETCH_AGENDA_SUCCEEDED:
            return { ...state, currentlySending: false, agenda: action.result }
        case FETCH_AGENDA_FAILED:
            return { ...state, currentlySending: false, error: error }
        default:
            return state;
    }
}
export default agendaReducer;