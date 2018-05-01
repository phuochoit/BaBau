//react redux
import { connect } from 'react-redux';
import AddAgendaComponent from "../../components/Agenda/AddAgendaComponent";

// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchInsertAgendaAction } from "../../actions/actionAgenda";
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
        onfetchInsertAgenda: (action) => {
            dispatch(fetchInsertAgendaAction(action))
        },
        onfetchMileStone: () => {
            dispatch(fetchMileStoneAction())
        },
    }
};

const AddAgendaContainer = connect(mapStateToProps, mapDispatchToProps)(AddAgendaComponent);
export default AddAgendaContainer;