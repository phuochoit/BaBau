import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

// screenName
import * as ScreenName from "../values/screenName";

//HOME
import HomeContainer from "../containers/Home/HomeContainer";
//Cooking
import CookingContainer from "../containers/Cooking/CookingContainer";
import CookingDetailContainer from "../containers/Cooking/CookingDetailContainer";
//Drink
import DrinkContainer from "../containers/Drink/DrinkContainer";
import DrinkDetailContainer from "../containers/Drink/DrinkDetailContainer";
//DueDate
import DueDateCalculatorComponent from "../components/DueDateCalculator/DueDateCalculatorComponent";
import DueDateComponet from "../components/Config/DueDateComponet";
//Food
import FoodContainer from "../containers/Food/FoodContainer";
import FoodDetailContainer from "../containers/Food/FoodDetailContainer";
//Pregnancy
import PregnancyDetailComponent from "../components/Pregnancy/PregnancyDetailComponent";
import PregnancyContainer from "../containers/Pregnancy/PregnancyContainer";
//Vaccination
import VaccinationContainer from "../containers/Vaccination/VaccinationContainer";
//Balance
import BalanceContainer from "../containers/Balance/BalanceContainer";
//BabyName
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
import AgendaDetailComponent from "../components/Agenda/AgendaDetailComponent";

export default AppStack = StackNavigator(
    {
        //HOME
        HOME: {
            screen: HomeContainer
        },
        //DUEDATE
        DUEDATECALCULATOR: {
            screen: DueDateCalculatorComponent
        },
        DUEDATE: {
            screen: DueDateComponet
        },
        //PREGNANCY
        PREGNANCY: {
            screen: PregnancyContainer
        },
        PREGNANCYDETAIL: {
            screen: PregnancyDetailComponent
        },
        //COOKING
        COOKING: {
            screen: CookingContainer
        },
        COOKINGDETAIL: {
            screen: CookingDetailContainer
        },
        //FOOD
        FOOD: {
            screen: FoodContainer
        },
        FOODDETAIL: {
            screen: FoodDetailContainer
        },
        //DRINK
        DRINK: {
            screen: DrinkContainer
        },
        DRINKDETAIL: {
            screen: DrinkDetailContainer
        },
        //VACCINATION
        VACCINATION: {
            screen: VaccinationContainer
        },
        //BALANCE
        BALANCE: {
            screen: BalanceContainer
        },
        //BABYNAME
        BABYNAME: {
            screen: BabyNameContainer
        },
        //STORY
        STORY: {
            screen: StoryContainer
        },
        STORYDETAIL: {
            screen: StoryDetailContainer
        },
        //ACTIVITY
        ACTIVITY: {
            screen: ActivityContainer
        },
        ACTIVITYDETAIL: {
            screen: ActivityDetailComponent
        },
        //AGENDA
        AGENDA: {
            screen: AgendaContainer
        },
        ADDAGENDA: {
            screen: AgendaAddContainer
        },
        UPDATEAGENDA: {
            screen: AgendaUpdateContainer
        },
        DETAILAGENDA: {
            screen: AgendaDetailComponent
        },

    }, {

        headerMode: "none"
    }
);