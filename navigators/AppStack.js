import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

// screenName
import { HOME, DUEDATECALCULATOR, PREGNANCY, COOKING, FOOD, DRINK, VACCINATION, BALANCE, BABYNAME, STORY, STORYDETAIL, ACTIVITY, ACTIVITYDETAIL, AGENDA, ADDAGENDA, UPDATEAGENDA } from "../values/screenName";
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
import BabyNameContainer from "../containers/BabyName/BabyNameContainer";
//Story
import StoryContainer from "../containers/Story/StoryContainer";
import StoryDetailContainer from "../containers/Story/StoryDetailContainer";
//ACTIVITY
import ActivityContainer from "../containers/Activity/ActivityContainer";
import ActivityDetailComponent from "../components/Activity/ActivityDetailComponent";

// Agenda
import AgendaContainer from "../containers/Agenda/AgendaContainer";
import AgendaAddContainer from "../containers/Agenda/AgendaAddContainer";
import AgendaUpdateContainer from "../containers/Agenda/AgendaUpdateContainer";

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
        BABYNAME: {
            screen: BabyNameContainer
        },
        STORY: {
            screen: StoryContainer
        },
        STORYDETAIL: {
            screen: StoryDetailContainer
        },
        ACTIVITY: {
            screen: ActivityContainer
        },
        ACTIVITYDETAIL: {
            screen: ActivityDetailComponent
        },
        AGENDA: {
            screen: AgendaContainer
        },
        ADDAGENDA: {
            screen: AgendaAddContainer
        },
        UPDATEAGENDA: {
            screen: AgendaUpdateContainer
        },
        
        
    }, {

        headerMode: "none"
    }
);