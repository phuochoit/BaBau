import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Title, Icon, Text, Left, Header, Body, Right } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import LinearGradient from "react-native-linear-gradient";
// Component
import { styles, colorstatusBarProps, color1, LinearGradientColor1, LinearGradientColor2, deviceHeight } from "../../assets/css/style";
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onSave = this._onSave.bind(this);
    }
    _onGoBack = () => {
        this.props.navigation.goBack();
    }
    _onSave() {
        this.props.parentHeader._onSaveData();
    }
    render() {
        const { title, navigation, hasBackButton, heights, hasSaveButton, hasshowSearh } = this.props;
        let left = <Left style={styles.HeaderwrapperLeft} />
        if (hasBackButton) {
            left = (
                <Left style={styles.HeaderwrapperLeft}>
                    <Icon name="ios-arrow-back-outline" onPress={this._onGoBack} style={styles.HeaderIcon} />
                </Left>);
        }
        let right = (<Right style={styles.HeaderwrapperRight} />);
        if (!hasshowSearh) {
            <Right style={styles.HeaderwrapperRight}>
                <Icon ios='ios-search' android="ios-search" style={styles.HeaderIcon} />
            </Right>
        }
        if (hasSaveButton) {
            right = (
                <Right style={[styles.HeaderwrapperRight]}>
                    <TouchableOpacity onPress={this._onSave}>
                        <Title style={[styles.HeaderTitle, styles.csfontF]}>Lưu Lại</Title>
                    </TouchableOpacity>
                </Right>);
        }
        if (heights === 0) {
            new_heights = 'auto';
        } else {
            new_heights = deviceHeight * heights;
        }
        return (
            <LinearGradient
                style={[styles.HeaderGradient, { height: new_heights }]}
                colors={[LinearGradientColor1, LinearGradientColor2]}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.0, y: 1.0 }}
            >
                <Header
                    noShadow
                    androidStatusBarColor={colorstatusBarProps}
                    iosBarStyle={'light-content'}
                    style={{ backgroundColor: 'transparent', borderTopColor: '#fff', borderTopWidth: 1, borderStyle: 'solid' }}
                >
                    {left}
                    <Body style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Title style={[styles.HeaderTitle, styles.csfontF,]}>{title}</Title>
                    </Body>
                    {right}
                </Header>

            </LinearGradient>
        );

    }
}

export default HeaderComponent;