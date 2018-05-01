//react redux
import { connect } from 'react-redux';
import CookingDetailComponent from "../../components/Cooking/CookingDetailComponent";

// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchCookingFavouriteAction } from "../../actions/actionCooking";

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
        onfetchCookingfavourite: (action) => {
            dispatch(fetchCookingFavouriteAction(action))
        },
    }
};

const CookingDetailContainer = connect(mapStateToProps, mapDispatchToProps)(CookingDetailComponent);
export default CookingDetailContainer;