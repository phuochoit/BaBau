import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Title } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';
//screenName
import { PREGNANCYDETAIL } from "../../values/screenName";
//style
import { styles } from "../../assets/css/style";
//Functions
import { trimStringToLength } from "../../values/Functions";

export default PregnancyFlatListItem = props => {
    const { overall_baby, _id, itemIndex, navigationParams, navigations, overall_mom, baby_health, mom_health, Tip, Examination } = props;
    _onTouchable = () => {
        navigations.navigate(PREGNANCYDETAIL, {
            detail: { _id, overall_baby, overall_mom, mom_health, baby_health, Tip, Examination }
        });
    }
    return (
        <Grid key={itemIndex} style={styles.PregnancyFlatListItem_wrapper}>
            <Col style={[styles.PregnancyFlatListItem_Left, styles.jccaic, styles.bg_color6]}>
                <Text style={[styles.PregnancyFlatListItem_Lefttitle, styles.csfontF]}>Tuần {_id}</Text>
            </Col>
            <Col style={[styles.PregnancyFlatListItem_Right]}>
                <TouchableOpacity
                    onPress={this._onTouchable}
                >
                    <Title style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{trimStringToLength(overall_baby, 50)}</Title>
                </TouchableOpacity>
                <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF]}>
                    {trimStringToLength(baby_health, 65)}
                </Text>
            </Col>
        </Grid>
    )
}
