import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Title, Icon } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';
import { upperCase, upperFirst } from "lodash";

//style
import { styles } from "../../assets/css/style";
//screenName
import { FOODDETAIL } from "../../values/screenName";
//Functions
import { trimStringToLength } from "../../values/Functions";

class FoodFlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onShowButton = this._onShowButton.bind(this);
    }

    _onShowButton() {
        const { navigationParams, navigations, _id, name, h1, h2, h3, p1, p2, p3, advice, advise, advise_h2, advise_name } = this.props;
        navigations.navigate(FOODDETAIL, {
            detail: { _id, name, h1, h2, h3, p1, p2, p3, advice, advise, advise_name }
        });
    }

    render() {

        const { itemIndex, navigationParams, navigations, _id, name, advice } = this.props;
        return (
            <Grid key={itemIndex} style={[styles.PregnancyFlatListItem_wrapper, { height: 110 }]}>
                <Col style={[styles.PregnancyFlatListItem_Left, styles.jccaic, styles.bg_color12]}>
                    <Text style={[styles.PregnancyFlatListItem_Lefttitle, styles.csfontF]}>{itemIndex + 1}</Text>
                </Col>
                <Col style={[styles.PregnancyFlatListItem_Right, styles.jccaic]}>
                    <Grid style={styles.jccaic}>
                        <Col>
                            <TouchableOpacity onPress={this._onShowButton}>
                                <Title style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, { textAlign: 'left' }]}>{upperFirst(name)}</Title>
                            </TouchableOpacity>
                            <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF]}>
                                {trimStringToLength(advice, 65)}
                            </Text>
                        </Col>
                    </Grid>
                </Col>
            </Grid>
        );
    }
}

export default FoodFlatListItem;


