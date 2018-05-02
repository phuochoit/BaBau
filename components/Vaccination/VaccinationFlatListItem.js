import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, Title, Icon } from "native-base";
import { Col, Grid } from 'react-native-easy-grid';
import { upperFirst } from "lodash";
//style
import { styles } from "../../assets/css/style";
class VaccinationFlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onShowButton = this._onShowButton.bind(this);
    }

    _onShowButton() {
        const { description, name } = this.props;
        this.props.parentFlatList.refs.vaccinationmodal.showVaccinationModal({
            description, name
        });
    }

    render() {

        const { _id, itemIndex, navigationParams, navigations, description, name } = this.props;
        return (
            <Grid key={itemIndex} style={[styles.PregnancyFlatListItem_wrapper, { height: 70 }]}>
                <Col style={[styles.PregnancyFlatListItem_Left, styles.jccaic, styles.bg_color10]}>
                    <Text style={[styles.PregnancyFlatListItem_Lefttitle, styles.csfontF]}>{_id}</Text>
                </Col>
                <Col style={[styles.PregnancyFlatListItem_Right, styles.jccaic]}>
                    <Grid style={styles.jccaic}>
                        <Col>
                            <Title onPress={this._onShowButton} style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, { textAlign: 'left' }]}>{upperFirst(name)}</Title>
                        </Col>
                    </Grid>
                </Col>
            </Grid>
        );
    }
}

export default VaccinationFlatListItem;


