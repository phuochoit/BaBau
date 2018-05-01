//react redux
import { connect } from 'react-redux';
import PregnancyComponent from "../../components/Pregnancy/PregnancyComponent";

// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchPregnancyAction } from "../../actions/actionPregnancy";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        pregnancy: state.pregnancy.pregnancy
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchPregnancy: () => {
            dispatch(fetchPregnancyAction())
        },
    }
};

const PregnancyContainer = connect(mapStateToProps, mapDispatchToProps)(PregnancyComponent);
export default PregnancyContainer;