import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';

import { WELLCOME, DUEDATECALCULATOR } from "./values/screenName";
class AuthLoadingScreen extends Component {
    constructor(props) {
        super(props);
        // AsyncStorage.clear();
        this._bootstrapAsync();
    }
    componentWillMount() {
    }
    _bootstrapAsync = async () => {
        let screen = '';
        try {
            const wellcomeScreen = await AsyncStorage.getItem('@wellcomeScreen');
            if (wellcomeScreen == null) {
                screen = WELLCOME;
            } else {
                const calculatoreScreen = await AsyncStorage.getItem('@calculatoreScreen');
                if (calculatoreScreen == null) {
                    screen = DUEDATECALCULATOR;
                }
            }
            this.props.navigation.navigate(screen ? screen : 'App');
        } catch (error) {
            console.log('error', error);
        }
    }
    // Render any loading content that you like here
    render() {
        return null;
    }
}

export default AuthLoadingScreen;