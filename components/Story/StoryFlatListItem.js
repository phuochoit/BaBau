import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Icon } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import { upperFirst } from "lodash";
//screenName
import { STORYDETAIL } from "../../values/screenName";
//style
import { styles } from "../../assets/css/style";
class StoryFlatListItem extends Component {
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
        this.props.parentFlatList._onUpdattingStoryFavourite(this.props._id, this.props.is_favourite);
    }
    _onShowButton = () => {
        const { title, navigations, detail, favourite } = this.props;
        navigations.navigate(STORYDETAIL, {
            detail: { title, detail }
        });
    }
    render() {
        const { title, _id, itemIndex, navigations, detail, favourite } = this.props;
        return (
            <Grid key={itemIndex} style={[styles.PregnancyFlatListItem_wrapper, { height: 60 }]}>
                <Col style={[styles.PregnancyFlatListItem_Left, styles.jccaic, styles.bg_color8]}>
                    <Text style={[styles.PregnancyFlatListItem_Lefttitle, styles.csfontF]}>{itemIndex + 1}</Text>
                </Col>
                <Col style={[styles.PregnancyFlatListItem_Right]}>
                    <Grid style={styles.jccaic}>
                        <Col>
                            <Text onPress={this._onShowButton} style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, { textAlign: 'left' }]}>{upperFirst(title)}</Text>
                        </Col>
                        <Col style={{ flex: 0.2 }} >
                            <Icon
                                onPress={this._onfavourite.bind(this)}
                                name={(!this.state.favourite) ? 'ios-heart-outline' : 'ios-heart'}
                                style={[styles.HeaderIcon, { color: 'red' }]} />
                        </Col>
                    </Grid>
                </Col>
            </Grid>
        );
    }
}

export default StoryFlatListItem;