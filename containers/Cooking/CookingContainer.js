//react redux
import { connect } from 'react-redux';
import CookingComponent from "../../components/Cooking/CookingComponent";

// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchCookingAction, fetchCookingFavouriteAction, fetchCookingHintAction } from "../../actions/actionCooking";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        cooking: state.cooking.cooking
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchCooking: () => {
            dispatch(fetchCookingAction())
        },
        onfetchCookingHint: () => {
            dispatch(fetchCookingHintAction())
        },
        onfetchCookingfavourite: (action) => {
            dispatch(fetchCookingFavouriteAction(action))
        },
    }
};

const CookingContainer = connect(mapStateToProps, mapDispatchToProps)(CookingComponent);
export default CookingContainer;