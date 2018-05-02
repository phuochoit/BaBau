import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Text, Title, Icon, Thumbnail } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';
import { isUndefined, upperCase, upperFirst } from "lodash";

//style
import { styles } from "../../assets/css/style";
import { COOKINGDETAIL } from "../../values/screenName";
import { trimStringToLength } from "../../values/Functions";
class CookingFlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: (this.props.is_favourite == 0) ? false : true
        };

    }
    _onfavourite = () => {
        this.setState({
            favourite: !this.state.favourite
        });
        this.props.parentFlatList._onCookfavourite(this.props._id, this.props.is_favourite);
    }

    _onDetailButton = () => {
        const { navigations, name, description, image, ingredient, prepare, cook, eat, advice, receip_yield, cook_time, is_favourite, _id } = this.props;

        navigations.navigate(COOKINGDETAIL, {
            detail: { _id, name, description, image, ingredient, prepare, cook, eat, advice, receip_yield, cook_time, is_favourite }
        });
    }
    render() {
        const { itemIndex, navigations, _id, name, description, image, ingredient, prepare, cook, eat, advice, receip_yield, cook_time, is_favourite } = this.props;
        return (
            <Grid key={itemIndex} style={[styles.PregnancyFlatListItem_wrapper]}>
                <Col style={[styles.PregnancyFlatListItem_Left, styles.jccaic, styles.position_relative]}>
                    <Image source={{ uri: image }} style={styles.full_image} />
                </Col>
                <Col style={[styles.PregnancyFlatListItem_Right, styles.jccaic]}>
                    <Grid style={styles.jccaic}>
                        <Col>
                            <Title onPress={this._onDetailButton} style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, { textAlign: 'left' }]}>{upperFirst(name)}</Title>
                            <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF]}>
                                {trimStringToLength(description, 65)}
                            </Text>
                        </Col>
                        <Col style={{ flex: 0.2 }} >
                            <Icon
                                onPress={this._onfavourite.bind(this)}
                                name={(this.props.is_favourite == 0) ? 'ios-heart-outline' : 'ios-heart'}
                                style={[styles.HeaderIcon, { color: 'red' }]} />
                        </Col>
                    </Grid>
                </Col>
            </Grid>
        );
    }
}

export default CookingFlatListItem;


