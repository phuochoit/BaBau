//react redux
import { connect } from 'react-redux';

import DrinkDetailComponent from "../../components/Drink/DrinkDetailComponent";
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

const DrinkDetailContainer = connect(mapStateToProps, mapDispatchToProps)(DrinkDetailComponent);
export default DrinkDetailContainer;