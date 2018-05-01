import React, { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Spinner, Text, Icon, View, Segment, Button } from "native-base";
import { isUndefined, isEmpty } from "lodash";

import { styles, deviceHeight } from "../../assets/css/style";

import { Row, Grid, Col } from 'react-native-easy-grid';
// Component
import HeaderComponent from "../Config/HeaderComponent";

//Query
import { listByQuery, DeleteByQuery } from "../../databases/allSchemas";
//screenName
import { ADDAGENDA, UPDATEAGENDA, AGENDA } from "../../values/screenName";
class AgendaDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mileStone: []
        };
        this._onLoadMileStone();
    }

    _onLoadMileStone = () => {
        let query = `SELECT * FROM MileStone AS M WHERE _id = ${this.props.navigation.state.params.params.milestone}`;
        listByQuery(query).then((mileStone) => {
            this.setState({
                mileStone,
            });
        }).catch((error) => {
            this.setState({
                list: [],
            });
        });
    }

    render() {
        const { params } = this.props.navigation.state;
        if (isUndefined(params)) {
            return <Spinner color='green' />
        }
        const top = - (deviceHeight * 0.07 - 43);
        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Chi tiết Nhật Ký"}
                    heights={0.07}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Content padder>
                    <Grid>
                        {(!isEmpty(this.state.mileStone)) ?
                            <Row style={{ height: 40, justifyContent: 'flex-start', alignItems: 'center', alignContent: 'center' }}>
                                <Col style={{ flex: 1, marginRight: 10 }}><Text>Ngày đáng nhớ:</Text></Col>
                                <Col style={{ flex: 2 }}><Text>{this.state.mileStone["0"].name}</Text></Col>
                            </Row>
                            : null}
                        <Row>
                            <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_color5, styles.csfontF]}>{params.params.content}</Text>
                        </Row>
                    </Grid>
                </Content>

            </Container>
        );

    }
}

export default AgendaDetailComponent;