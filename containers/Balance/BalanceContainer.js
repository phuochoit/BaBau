//react redux
import { connect } from 'react-redux';

import BalanceComponent from "../../components/Balance/BalanceComponent";
// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchBalanceAction } from "../../actions/actionBalance";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        balance: state.balance.balance
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchBalance: () => {
            dispatch(fetchBalanceAction())
        },
    }
};

const BalanceContainer = connect(mapStateToProps, mapDispatchToProps)(BalanceComponent);
export default BalanceContainer;