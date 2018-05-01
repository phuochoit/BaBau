//react redux
import { connect } from 'react-redux';

import FoodDetailComponent from "../../components/Food/FoodDetailComponent";
// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchCookingSearchTermAction, fetchCookingFavouriteAction } from "../../actions/actionCooking";

const mapStateToProps = (state) => {

    return {
        isConnected: state.isConnected.isConnected,
        cooking: state.cooking.result_search
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchCookingSearchTerm: (action) => {
            dispatch(fetchCookingSearchTermAction(action))
        },
        onfetchCookingfavourite: (action) => {
            dispatch(fetchCookingFavouriteAction(action))
        },
    }
};

const FoodDetailContainer = connect(mapStateToProps, mapDispatchToProps)(FoodDetailComponent);
export default FoodDetailContainer;