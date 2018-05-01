import React, { Component } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Spinner, Text, Icon, View, Form, Item, Input, Textarea, ActionSheet } from "native-base";
import { isUndefined, filter, forEach, isEmpty } from "lodash";
import { Row, Grid, Col } from 'react-native-easy-grid';
// Component
import HeaderComponent from "../Config/HeaderComponent";

import { styles, deviceHeight } from "../../assets/css/style";
// query
import { listByQuery, InsertByQuery } from "../../databases/allSchemas";

//screenName
import { AGENDA } from "../../values/screenName";

class AddAgendaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            mileStone: [],
            name: '',
            content: ''
        };
        this.props.onfetchNetConnected();
        this._onShowMileStone = this._onShowMileStone.bind(this);

    }

    componentWillMount = () => {
        this.props.onfetchMileStone();
    };


    _onSaveData = () => {
        if (!isEmpty(this.state.name) || !isEmpty(this.state.content)) {

            param = {
                _id: Date.now(),
                name: this.state.name,
                content: this.state.content,
                status: (!isEmpty(this.state.mileStone)) ? 1 : 0,
                milestone: (!isEmpty(this.state.mileStone)) ? [this.state.mileStone["0"]] : []
            }
            this.props.onfetchInsertAgenda(param);
            this.props.navigation.navigate(AGENDA);

        } else {
            Alert.alert(
                'Thông Báo',
                'Tiêu đè và nội dung nhật ký không được trống!',
                [
                    { text: 'Yes', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },

                ],
                { cancelable: true }
            );
        }
    }
    _onShowMileStone = () => {
        let options = [];
        forEach(this.props.milestone, function (val, key) {
            options[key] = val.name
        })
        options[options.length] = 'Hủy bỏ';
        let cancelIndex = options.length;

        ActionSheet.show(
            {
                options: options,
                cancelButtonIndex: cancelIndex,
                title: "Ngày đáng nhớ của mẹ"
            },
            buttonIndex => {
                this.setState({
                    mileStone: filter(this.props.milestone, ['name', options[buttonIndex]])
                });
            }
        )
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={params.title}
                    heights={0}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                    parentHeader={this}
                    hasSaveButton={true}
                />
                <Content contentContainerStyle={styles.fl1} padder>
                    <Grid>
                        <Row style={styles.fl1}>
                            <Form style={[styles.fl1, { marginHorizontal: -10 }]}>
                                <Item >
                                    <Input
                                        placeholder="Tiêu Đề"
                                        onChangeText={(text) => this.setState({ name: text })}
                                        value={this.state.name}
                                    />
                                </Item>
                                <Item >
                                    <Textarea
                                        style={styles.fl1}
                                        rowSpan={10}
                                        placeholder="Bạn cảm thấy hôm nay của bản như thế nào"
                                        onChangeText={(text) => this.setState({ content: text })}
                                        value={this.state.content}
                                    />
                                </Item>
                            </Form>
                        </Row>
                        {(!isEmpty(this.state.mileStone)) ?
                            <Row style={styles.row_mileStone}>
                                <Col style={[styles.fl1, styles.mgR]}><Text>Ngày đáng nhớ:</Text></Col>
                                <Col style={styles.fl2}><Text>{this.state.mileStone["0"].name}</Text></Col>
                            </Row>
                            : null}
                        <Row style={styles.row_showMileStone}>
                            <TouchableOpacity onPress={this._onShowMileStone}>
                                <Text>Ngày Đáng Nhớ</Text>
                            </TouchableOpacity>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );

    }
}

export default AddAgendaComponent;