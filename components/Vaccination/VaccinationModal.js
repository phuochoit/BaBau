import React, { Component } from 'react';
import { } from 'react-native';
import { Title, Text } from "native-base";
import { Row, Grid } from 'react-native-easy-grid';
import Modal from "react-native-modalbox";
import { isEmpty, upperFirst} from "lodash";

import { styles } from "../../assets/css/style";
class VaccinationModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: ''
        };

    }
    showVaccinationModal = (param) => {
        this.setState({
            name: param.name,
            description: param.description,
        });
        this.refs.Modal.open();
    }
    render() {
        return (
            <Modal
                ref={"Modal"}
                style={styles.wrapperBabyModal}
                position='center'
                backdrop={true}
            >
                <Grid style={[styles.wrapperBabyModal_Grid]}>
                    <Row style={[styles.mgB, styles.fl1,styles.jccaic]}>
                        <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, { textAlign: 'center' }]}>{upperFirst(this.state.name)}</Text>
                    </Row>
                    <Row style={[styles.mgB, styles.fl3]}>
                        <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF]}>{this.state.description}</Text>
                    </Row>
                </Grid>

            </Modal>
        );
    }
}

export default VaccinationModal;