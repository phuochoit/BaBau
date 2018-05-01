import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

import { Text, Thumbnail } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';
// function
import { get_image } from "../../values/Functions";
// style
import { styles } from "../../assets/css/style";

export default HomeFlatListItem = props => {
    const { name, image, navigation, navigations, navigationParams } = props;
    _onTouchable = () => {
        navigations.navigate(navigation);
    }
    return (
        <Grid style={[styles.HomeFlatListItem_wrapper]}>
            <Col style={styles.jccaic}>
                <TouchableOpacity onPress={this._onTouchable} style={styles.jccaic}>
                    <Thumbnail square large source={get_image(image)} style={styles.HomeFlatListItem_Thumbnail} />
                    <Text style={[styles.csfontF, styles.HomeFlatListItem_Title, styles.txt_fontcolor1]}>{name}</Text>
                </TouchableOpacity>
            </Col>
        </Grid>
    );
}

