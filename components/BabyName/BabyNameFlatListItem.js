import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Title, Icon } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';
import { upperCase, upperFirst } from "lodash";

//style
import { styles } from "../../assets/css/style";
//Functions
import { trimStringToLength } from "../../values/Functions";
class BabyNameFlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: (this.props.is_favourite == 0) ? false : true
        };
        this._onShowButton = this._onShowButton.bind(this);
    }
    _onfavourite = () => {
        this.setState({
            favourite: !this.state.favourite
        });
        
        this.props.parentFlatList._onBabyNamefavourite(this.props._id, this.props.is_favourite);
    }
    _onShowButton() {
        const {description, name } = this.props;
        this.props.parentFlatList.refs.babyModal.showBabyModal({
            description, name
        });
    }

    render() {

        const { bletter, _id, itemIndex, navigationParams, navigations, description, name, sex } = this.props;
        return (
            <Grid key={itemIndex} style={[styles.PregnancyFlatListItem_wrapper, { height: 60 }]}>
                <Col style={[styles.PregnancyFlatListItem_Left, styles.jccaic, styles.bg_color7]}>
                    <Text style={[styles.PregnancyFlatListItem_Lefttitle, styles.csfontF]}>{upperCase(bletter)}</Text>
                </Col>
                <Col style={[styles.PregnancyFlatListItem_Right, styles.jccaic]}>
                    <Grid style={styles.jccaic}>
                        <Col>
                            <Title onPress={this._onShowButton} style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{upperFirst(name)}</Title>
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

export default BabyNameFlatListItem;


