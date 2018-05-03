import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'react-native-firebase';
const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();

class BannerAdComponet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5, justifyContent: 'center', flex: 1 }}>
                <Banner
                    size={"LARGE_BANNER"}
                    unitId={'ca-app-pub-1070789846238739/7160815396'}
                    request={request.build()}
                    onAdLoaded={() => {
                        console.log('Advert loaded');
                    }}
                    onAdFailedToLoad={(error) => {
                        console.log('====================================');
                        console.log('error-admob', error);
                        console.log('====================================');
                    }}
                />
            </View>
        );
    }
}

export default BannerAdComponet;