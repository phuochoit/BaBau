import React, { Component } from 'react';
import { } from 'react-native';
import { Title, Text, View } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import Modal from "react-native-modalbox";
import { upperFirst } from "lodash";

import { styles } from "../../assets/css/style";
class HomeUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: '',
            endDate: '',
            awayDate: '',
            ageWeeksDate: '',
            ageDaysDate: '',
            remainingDate: '',
            progressDate: '',
        };

    }
    showUserModal = (params) => {
        const { param } = params;

        this.setState({
            startDate: param.startDate,
            endDate: param.endDate,
            awayDate: param.awayDate,
            ageWeeksDate: param.ageWeeksDate,
            ageDaysDate: param.ageDaysDate,
            remainingDate: param.remainingDate,
            progressDate: param.progressDate,
        });
        this.refs.Modal.open();
    }
    render() {
        return (
            <Modal
                ref={"Modal"}
                style={styles.wrapperUserModal}
                position='center'
                backdrop={true}
            >
                <Grid style={[styles.wrapperBabyModal_Grid]}>
                    <Row style={[styles.mgB, styles.fl1, styles.jccaic]}>
                        <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF]}>{upperFirst('Chi Tiết Thai Kỳ')}</Text>
                    </Row>
                    <Row style={[styles.mgB, styles.fl3]}>
                        <Grid>
                            <Row>
                                <View>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtleft_UserModal]}>Thai Kỳ:</Text>
                                </View>
                                <View style={styles.mgL}>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtright_UserModal]}>{this.state.progressDate} %</Text>
                                </View>
                            </Row>
                            <Row>
                                <View>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtleft_UserModal]}>Ngày Có thai:</Text>
                                </View>
                                <View style={styles.mgL}>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtright_UserModal]}>{this.state.startDate}</Text>
                                </View>

                            </Row>
                            <Row>
                                <View>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtleft_UserModal]}>Ngày Dự Sinh:</Text>
                                </View>
                                <View style={styles.mgL}>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtright_UserModal]}>{this.state.endDate}</Text>
                                </View>

                            </Row>
                            <Row>
                                <View>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtleft_UserModal]}>Tuổi Thai:</Text>
                                </View>
                                <View style={styles.mgL}>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtright_UserModal]}> {this.state.ageWeeksDate} Tuần - {this.state.ageDaysDate} Ngày</Text>
                                </View>
                            </Row>
                            <Row>
                                <View>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtleft_UserModal]}>Ngày Đã Trải Qua:</Text>
                                </View>
                                <View style={styles.mgL}>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtright_UserModal]}> {this.state.awayDate} Ngày</Text>
                                </View>

                            </Row>
                            <Row>
                                <View>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtleft_UserModal]}>Ngày Còn Lại:</Text>
                                </View>
                                <View style={styles.mgL}>
                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txtright_UserModal]}> {this.state.remainingDate} Ngày</Text>
                                </View>

                            </Row>
                        </Grid>
                    </Row>
                </Grid>
            </Modal>
        );
    }
}

export default HomeUserModal;