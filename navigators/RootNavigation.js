import React, { Component } from "react";
import { Root } from "native-base";
import { StackNavigator,SwitchNavigator } from "react-navigation";
// screenName
// import { AGENDA, BABYNAME, COOKING, HOME, NOTE, PREGNANCY, STORY, WELLCOME, DUEDATECALCULATOR, PREGNANCYDETAIL, STORYDETAIL, COOKINGDETAIL, FOOD, VACCINATION, BALANCE, DRINK, DRINKDETAIL, FOODDETAIL, UPDATEAGENDA, DETAILAGENDA, ADDAGENDA, UPDATENOTE, ADDNOTE, DETAILNOTE } from "../values/screenName";

// component
import AuthLoadingScreen from "../AuthLoadingScreen";
import AppStack from "./AppStack";
import IntroStack from "./IntroStack";


const AppNavigator = SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Intro: IntroStack
    }, {
        initialRouteName: 'AuthLoading',
        headerMode: "none"
    });


export default () =>
    <Root>
        <AppNavigator />
    </Root>;