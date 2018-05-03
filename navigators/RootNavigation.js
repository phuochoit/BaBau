import React, { Component } from "react";
import { Root } from "native-base";
import { StackNavigator, SwitchNavigator } from "react-navigation";
import { BannerAdFooter } from "../components/Config/BannerComponents";

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
        <BannerAdFooter />
    </Root>;