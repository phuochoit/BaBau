//react redux
import { connect } from 'react-redux';

import BabyNameComponent from "../../components/BabyName/BabyNameComponent";
// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchBabyNameAction, fetchBabyNameFavouriteAction} from "../../actions/actionBabyName";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        babyName: state.babyName.babyName
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchBabyName: () => {
            dispatch(fetchBabyNameAction())
        },
        onfetchBabyNamefavourite: (action) => {
            dispatch(fetchBabyNameFavouriteAction(action))
        },
        
    }
}; 

const BabyNameContainer = connect(mapStateToProps, mapDispatchToProps)(BabyNameComponent);
export default BabyNameContainer;