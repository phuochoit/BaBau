//react redux
import { connect } from 'react-redux';

import Home from "../../components/Home/HomeComponent";
// action
import { fetchNetConnected } from "../../actions/actionConnected";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
    }
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;