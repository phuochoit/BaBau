import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

// screenName
import { HOME, DUEDATECALCULATOR, PREGNANCY, COOKING, FOOD, DRINK, VACCINATION, BALANCE } from "../values/screenName";
//StackNavigator
import DueDateStack from "./DueDateStack";
import PregnancyStack from "./PregnancyStack";
import CookingStack from "./CookingStack";
import FoodStack from "./FoodStack";
import DrinkStack from './DrinkStack';

//containers
import HomeContainer from "../containers/Home/HomeContainer";
import VaccinationContainer from "../containers/Vaccination/VaccinationContainer";
import BalanceContainer from "../containers/Balance/BalanceContainer";

export default AppStack = StackNavigator(
    {
        HOME: {
            screen: HomeContainer
        },
        DUEDATECALCULATOR: {
            screen: DueDateStack
        },
        PREGNANCY: {
            screen: PregnancyStack
        },
        COOKING: {
            screen: CookingStack
        },
        FOOD: {
            screen: FoodStack
        },
        DRINK: {
            screen: DrinkStack
        },
        VACCINATION: {
            screen: VaccinationContainer
        },
        BALANCE: {
            screen: BalanceContainer
        },
    }, {

        headerMode: "none"
    }
);