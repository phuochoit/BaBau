import { combineReducers } from "redux";

import connectedReducer from "./connectedReducer";
import pregnancyReducer from "./pregnancyReducer";
import cookingReducer from "./cookingReducer";
import foodReducer from "./foodReducer";
import drinkReducer from "./drinkReducer";
import vaccinationReducer from "./vaccinationReducer";
import balanceReducer from "./balanceReducer";

const rootReducer = combineReducers({
    isConnected: connectedReducer,
    pregnancy: pregnancyReducer,
    cooking: cookingReducer,
    food: foodReducer,
    drink: drinkReducer,
    vaccination: vaccinationReducer,
    balance: balanceReducer
});

export default rootReducer;