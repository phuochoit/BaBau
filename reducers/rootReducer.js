import { combineReducers } from "redux";

import connectedReducer from "./connectedReducer";
import pregnancyReducer from "./pregnancyReducer";
import cookingReducer from "./cookingReducer";
import foodReducer from "./foodReducer";
import drinkReducer from "./drinkReducer";
import vaccinationReducer from "./vaccinationReducer";
import balanceReducer from "./balanceReducer";
import babyNameReducer from "./babyNameReducer";
import stroryReducer from "./stroryReducer";
import activityReducer from "./activityReducer";
import agendaReducer from "./agendaReducer";
import milestoneReducer from "./milestoneReducer";

const rootReducer = combineReducers({
    isConnected: connectedReducer,
    pregnancy: pregnancyReducer,
    cooking: cookingReducer,
    food: foodReducer,
    drink: drinkReducer,
    vaccination: vaccinationReducer,
    balance: balanceReducer,
    babyName: babyNameReducer,
    story: stroryReducer,
    activity: activityReducer,
    agenda: agendaReducer,
    milestone: milestoneReducer
});

export default rootReducer;