import React, { Component } from "react";
import { StackNavigator, SwitchNavigator } from "react-navigation";
// component
import AuthLoadingScreen from "../AuthLoadingScreen";
import AppStack from "./AppStack";
import IntroStack from "./IntroStack";


export default AppNavigator = SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Intro: IntroStack
    }, {
        initialRouteName: 'AuthLoading',
        headerMode: "none"
    });