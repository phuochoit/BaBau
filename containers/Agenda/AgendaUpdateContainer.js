//react redux
import { connect } from 'react-redux';
import ChangeAgendaComponent from "../../components/Agenda/ChangeAgendaComponent";

// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchUpdateAgendaAction } from "../../actions/actionAgenda";
import { fetchMileStoneAction } from "../../actions/actionMileStone";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        milestone: state.milestone.milestone
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchUpdateAgenda: (action) => {
            dispatch(fetchUpdateAgendaAction(action))
        },
        onfetchMileStone: () => {
            dispatch(fetchMileStoneAction())
        },
    }
};

const AgendaUpdateContainer = connect(mapStateToProps, mapDispatchToProps)(ChangeAgendaComponent);
export default AgendaUpdateContainer;