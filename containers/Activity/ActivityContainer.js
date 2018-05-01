//react redux
import { connect } from 'react-redux';
import ActivityComponent from "../../components/Activity/ActivityComponent";

// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchActivityction } from "../../actions/actionActivity";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        activity: state.activity.activity
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchActivity: () => {
            dispatch(fetchActivityction())
        },
    }
};

const ActivityContainer = connect(mapStateToProps, mapDispatchToProps)(ActivityComponent);
export default ActivityContainer;