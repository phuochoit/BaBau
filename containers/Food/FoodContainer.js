//react redux
import { connect } from 'react-redux';

import FoodComponent from "../../components/Food/FoodComponent";
// action
import { fetchNetConnected } from "../../actions/actionConnected";
import { fetchFoodAction } from "../../actions/actionFood";

const mapStateToProps = (state) => {
    return {
        isConnected: state.isConnected.isConnected,
        food: state.food.food
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onfetchNetConnected: () => {
            dispatch(fetchNetConnected())
        },
        onfetchFood: () => {
            dispatch(fetchFoodAction())
        },
    }
};

const FoodContainer = connect(mapStateToProps, mapDispatchToProps)(FoodComponent);
export default FoodContainer;