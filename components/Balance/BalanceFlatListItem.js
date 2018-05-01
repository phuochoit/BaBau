import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Title, Icon, View } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';
import { isUndefined, upperCase, upperFirst } from "lodash";

//style
import { styles } from "../../assets/css/style";

class BalanceFlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { _id, week, length, weight, itemIndex, navigationParams, navigations } = this.props;
        return (
            <Grid key={itemIndex} style={[styles.PregnancyFlatListItem_wrapper, { height: 100 }]}>
                <Col style={[styles.PregnancyFlatListItem_Left, styles.jccaic, styles.bg_color11]}>
                    <Text style={[styles.PregnancyFlatListItem_Lefttitle, styles.csfontF]}>Tuần {week}</Text>
                </Col>
                <Col style={[styles.PregnancyFlatListItem_Right, styles.jccaic]}>
                    <Grid style={styles.jccaic}>
                        <Col>
                            <View style={styles.jccaic}>
                                <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.csfontF]}>Chiều Dài</Text>
                                <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.csfontF]}>{length} cm</Text>
                            </View>
                        </Col>
                        <Col>
                            <View style={styles.jccaic}>
                                <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.csfontF]}>Cân Nặng</Text>
                                <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.csfontF]}>{weight} g</Text>
                            </View>
                        </Col>
                    </Grid>
                </Col>
            </Grid>
        );
    }
}

export default BalanceFlatListItem;


