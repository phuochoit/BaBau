//react redux
import { connect } from 'react-redux';
import AgendaComponent from "../../components/Agenda/AgendaComponent";

// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchAgendaAction, fetchDeleteAgendaAction } from "../../actions/actionAgenda";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        agenda: state.agenda.agenda
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchAgenda: () => {
            dispatch(fetchAgendaAction())
        },
        onfetchDeleteAgenda: (action) => {
            dispatch(fetchDeleteAgendaAction(action))
        },
    }
};

const AgendaContainer = connect(mapStateToProps, mapDispatchToProps)(AgendaComponent);
export default AgendaContainer;