import React, { Component } from 'react';
import { AsyncStorage, Text, StyleSheet, View, ImageBackground, StatusBar } from 'react-native';
import AppIntro from 'react-native-app-intro';

//style
import { colorstatusBarProps } from "../../assets/css/style";
// Component
import { DUEDATECALCULATOR } from "../../values/screenName";

class WellcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.doneBtnHandle = this.doneBtnHandle.bind(this);
    }

    doneBtnHandle = async () => {
        try {
            await AsyncStorage.setItem('@wellcomeScreen', 'wellcome');
            this.props.navigation.navigate(DUEDATECALCULATOR);
        } catch (error) {
            // Error saving data
            console.log('error', error);
        }
    }

    render() {
        return (
            <View style={{flex:1 }}>
                <StatusBar
                    backgroundColor={colorstatusBarProps}
                    barStyle="light-content"
                />
                <AppIntro
                    onDoneBtnClick={this.doneBtnHandle}
                    nextBtnLabel={""}
                    showSkipButton={false}
                    dotColor={'rgba(255,255,255,1)'}
                    activeDotColor={'#7882FF'}
                    rightTextColor={'#7882FF'}
                    customStyles={{
                        dotStyle: { width: 15, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 },
                        nextButtonText: {
                            fontSize: 15,
                            fontWeight: 'normal'
                        },
                        full: {
                            borderRadius: 15,
                            borderColor: '#7882FF',
                            borderWidth: 1,
                            borderStyle: 'solid',
                            paddingHorizontal: 15,
                            paddingVertical: 5,
                            marginTop: 10,
                        }
                    }}
                    defaultIndex={0}
                    showDoneButton={true}
                    doneBtnLabel={"Trải nghiệm ngay"}
                >

                    <ImageBackground
                        source={require('../../assets/images/welcome/step-1.jpg')}
                        style={{ flex: 1 }}
                        resizeMode="cover"
                    >
                        <View style={[styles.slide]}>
                            <Text style={styles.text}>Thông tin cần thiết cho bà bầu trong toàn bộ thai kì</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/images/welcome/step-2.jpg')}
                        style={{ flex: 1 }}
                        resizeMode="stretch"
                    >
                        <View style={[styles.slide]}>
                            <Text style={styles.text}>Trợ lý ảo luôn bên bạn hàng ngày để gợi ý những việc cần làm, món ăn ngon</Text>
                        </View>
                    </ImageBackground>
                    <ImageBackground
                        source={require('../../assets/images/welcome/step-3.jpg')}
                        style={{ flex: 1, justifyContent: 'center', }}
                        resizeMode="stretch"
                    >
                        <View style={[styles.slide]}>
                            <Text style={styles.text}>Nhật ký giúp bạn lưu giữ nhưng kỉ niệm đẹp của mẹ trong toàn bộ thai kì</Text>
                        </View>
                    </ImageBackground>
                </AppIntro>
            </View>
        );

    }
}


const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    text: {
        color: '#7882FF',
        fontFamily: 'SourceSansPro',
        fontSize: 20,
        textAlign: 'center'
    },
});
export default WellcomeComponent;