import React from 'react'
import { ImageBackground, View } from 'react-native';

export default Splash = () => {
    return (

        <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center', }}>
            <ImageBackground
                source={require('./assets/images/Splashscreen.jpg')}
                style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                resizeMode="cover"
            />
        </View>
    )
}
