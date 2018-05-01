import React, { Component } from 'react';
import { FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
import { Container, Content, Spinner, Text, ActionSheet } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import LinearGradient from "react-native-linear-gradient";
import { isUndefined } from "lodash";
//style
import { styles, deviceHeight } from "../../assets/css/style";
//Component
import HeaderComponent from "../Config/HeaderComponent";
import HomeFlatListItem from "./HomeFlatListItem";
import HomeUserModal from "./HomeUserModal";
// api 
import { list } from "../../values/Api";
import { DUEDATECALCULATOR, DUEDATE } from "../../values/screenName";
const buttons = ["Chi tiết", "Sửa ngày dự sinh", "Tuổi thai là gì", "Hủy bỏ"];
var cancel_index = 3;

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: []
        }
        this.props.onfetchNetConnected();
        this._onShowMore = this._onShowMore.bind(this);
        this._getUserData();
    }
    _onShowMore = async () => {
        ActionSheet.show(
            {
                options: buttons,
                cancelButtonIndex: cancel_index,
                title: "Nhiều hơn"
            },
            buttonIndex => {
                if (buttonIndex == 0) {
                    this.refs.userModal.showUserModal({
                        param: this.state.user
                    });
                } else if (buttonIndex == 1) {
                    this.props.navigation.navigate(DUEDATECALCULATOR, { params: 'EDITDUEDATE' });
                } else if (buttonIndex == 2) {
                    this.props.navigation.navigate(DUEDATE);
                }
            }
        )
    }
    _getUserData = async () => {
        const user = await AsyncStorage.getItem('@calculatoreScreen');
        this.setState({
            user: JSON.parse(user)
        })
    }
    render() {
        const { user } = this.state;
        const top = - (deviceHeight * 0.2);
        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Bà Bầu"}
                    heights={0.2}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 2 }]} >
                    <Content padder>
                        <Row style={[styles.fl1, styles.wrapperContentHeader]}>
                            <Grid style={[styles.wrapperContentBox]}>
                                <Row style={[styles.fl1, styles.ContentBoxHeaderLeft]}>
                                    <Col style={styles.fl3}>
                                        <Text style={[styles.csfontF, styles.ContentBoxH3, styles.txt_fontcolor1]}>Tổng Quan Thai kỳ</Text>
                                    </Col>
                                    <Col style={styles.fl1}>
                                        <TouchableOpacity onPress={this._onShowMore}>
                                            <Text style={[styles.ContentBoxHeaderRightText, styles.txt_color5, styles.csfontF]}>Nhiều hơn</Text>
                                        </TouchableOpacity>
                                    </Col>
                                </Row>
                                <Row style={[styles.fl2, styles.jccaic]}>
                                    <Col style={styles.jccaic}>
                                        <Text style={[styles.txt_contentBoxContent, styles.csfontF, styles.txt_fontcolor2]}>Thai Kỳ</Text>
                                        <Text style={[styles.csfontF, styles.txt_fontcolor1, styles.H1_contentBoxContentH1]}>{user.progressDate} %</Text>
                                    </Col>
                                    <Col style={styles.jccaic}>
                                        <Text style={[styles.txt_contentBoxContent, styles.csfontF, styles.txt_fontcolor2]}>Tuần</Text>
                                        <Text style={[styles.csfontF, styles.txt_fontcolor1, styles.H1_contentBoxContentH1]}>{user.ageWeeksDate}</Text>
                                    </Col>
                                    <Col style={styles.jccaic}>
                                        <Text style={[styles.txt_contentBoxContent, styles.csfontF, styles.txt_fontcolor2]}>Ngày</Text>
                                        <Text style={[styles.csfontF, styles.txt_fontcolor1, styles.H1_contentBoxContentH1]}>{user.ageDaysDate}</Text>
                                    </Col>
                                    <Col style={styles.jccaic}>
                                        <Text style={[styles.txt_contentBoxContent, styles.csfontF, styles.txt_fontcolor2]}>Còn Lại</Text>
                                        <Text style={[styles.csfontF, styles.txt_fontcolor1, styles.H1_contentBoxContentH1]}>{user.remainingDate}</Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </Row>
                        <Row style={[styles.wrapperContentContent, styles.fl3]}>
                            <FlatList
                                style={styles.HomeFlatList}
                                data={list}
                                renderItem={({ item, index }) =>
                                    <HomeFlatListItem
                                        {...item}
                                        itemIndex={index}
                                        navigations={this.props.navigation}
                                    />}
                                horizontal={false}
                                numColumns={2}
                                keyExtractor={item => item._id}
                            />
                        </Row>
                    </Content>
                </Grid>
                <HomeUserModal ref={'userModal'} parentFlatList={this} />
            </Container>
        );
    }
}

export default HomeComponent;
