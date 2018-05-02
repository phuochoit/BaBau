import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Title } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';

//screenName
import { ACTIVITYDETAIL } from "../../values/screenName";
//style
import { styles } from "../../assets/css/style";
// /Functions
import { trimStringToLength } from "../../values/Functions";

export default PregnancyFlatListItem = props => {
    const { _id, name, itemIndex, navigations, advice, h1, p1, h2, p2, h3, p3 } = props;
    _onTouchable = () => {
        navigations.navigate(ACTIVITYDETAIL, {
            detail: { _id, name, advice, h1, p1, h2, p2, h3, p3 }
        });
    }
    return (
        <Grid key={itemIndex} style={[styles.PregnancyFlatListItem_wrapper, { height: 80
}]}>
            <Col style={[styles.PregnancyFlatListItem_Left, styles.jccaic, styles.bg_color13]}>
                <Text style={[styles.PregnancyFlatListItem_Lefttitle, styles.csfontF]}>{itemIndex + 1}</Text>
            </Col>
            <Col style={[styles.PregnancyFlatListItem_Right]}>
                <TouchableOpacity
                    onPress={this._onTouchable}
                >
                    <Title style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{name}</Title>
                </TouchableOpacity>
                <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF]}>
                    {trimStringToLength(advice, 65)}
                </Text>
            </Col>
        </Grid>
    )
}
