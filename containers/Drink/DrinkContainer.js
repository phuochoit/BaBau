//react redux
import { connect } from 'react-redux';

import DrinkComponent from "../../components/Drink/DrinkComponent";
// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchDrinkAction } from "../../actions/actionDrink";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        drink: state.drink.drink
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchDrink: () => {
            dispatch(fetchDrinkAction())
        },
    }
};

const DrinkContainer = connect(mapStateToProps, mapDispatchToProps)(DrinkComponent);
export default DrinkContainer;