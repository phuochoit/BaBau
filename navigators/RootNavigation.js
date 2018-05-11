import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { SwitchNavigator } from "react-navigation";
import { Root, View } from "native-base";
import { BannerAdFooter } from "../components/Config/BannerComponents";
// component
import AuthLoadingScreen from "../AuthLoadingScreen";
import AppStack from "./AppStack";
import IntroStack from "./IntroStack";


const AppSwitchNavigator = SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Intro: IntroStack
    }, {
        initialRouteName: 'AuthLoading',
        headerMode: "none"
    });


class AppNavigator extends Component {
    constructor(props) {
        super(props);
        this._bootstrapAsync();
        this.state = {
            screen: 'App'
        };
    }
    _bootstrapAsync = async () => {
        try {
            const calculatoreScreen = await AsyncStorage.getItem('@calculatoreScreen');
            if (calculatoreScreen == null) {
                this.setState({
                    screen: 'Intro'
                })
            }
        } catch (error) { }
    }
    render() {

        return (
            <Root >
                <View style={{ flex: 1 }}>
                    <AppSwitchNavigator />
                    {this.state.screen == 'App' ?
                        <BannerAdFooter />
                        : null}
                </View>
            </Root>
        );
    }
}

export default AppNavigator;

