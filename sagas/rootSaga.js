// import redux-saga
import { all, fork } from "redux-saga/effects";

import { watchFetchConnected } from "./connectedSaga";
import { watchFetchPregnancySaga } from "./pregnancySaga";
import { watchFetchCookingSaga, watchFetchCookingHintSaga, watchFetchCookingFavouriteSaga, watchFetchCookingSearchTermSaga } from "./cookingSaga";
import { watchFetchFoodSaga } from "./foodSaga";
import { watchFetchDrinkSaga } from "./drinkSaga";
import { watchFetchVaccinationSaga } from "./vaccinationSaga";
import { watchFetchBalanceSaga } from "./balanceSaga";

export default function* rootSaga() {
    yield all([
        fork(watchFetchConnected),
        fork(watchFetchPregnancySaga),
        fork(watchFetchCookingSaga),
        fork(watchFetchCookingFavouriteSaga),
        fork(watchFetchCookingSearchTermSaga),
        fork(watchFetchCookingHintSaga),
        fork(watchFetchFoodSaga),
        fork(watchFetchDrinkSaga),
        fork(watchFetchVaccinationSaga),
        fork(watchFetchBalanceSaga),
    ]);
}