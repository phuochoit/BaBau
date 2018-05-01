import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Text, Tabs, Tab, StyleProvider, getTheme, ScrollableTab, TabHeading } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import { isUndefined, filter, concat, isEmpty } from "lodash";

// Component
import HeaderComponent from "../Config/HeaderComponent";
import BabyNameFlatListItem from "./BabyNameFlatListItem";
import BabyNameModal from "./BabyNameModal";
//styles
import { styles, deviceHeight } from "../../assets/css/style";
import { babyTab } from "../../assets/css/custom_theme.js";
class BabyNameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listBoys: [],
            listGirl: [],
            page: 0,
            refreshing: false
        };
        this._onRefresh = this._onRefresh.bind(this);
        this.props.onfetchNetConnected();
    }
    componentWillMount() {
        this.fetchBabyName();
    }
    fetchBabyName = () => {
        this.props.onfetchBabyName();
        this.setState({
            refreshing: false
        });
    }

    _onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        this.fetchBabyName();
    }
    _onBabyNamefavourite = (id, is_favourite) => {
        param = { id, is_favourite }
        this.props.onfetchBabyNamefavourite(param);
    }
    render() {
        const top = - (deviceHeight * 0.2);
        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Gợi Ý Đặt Tên"}
                    heights={0.2}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 2 }]}>
                    <Content>
                        <Row style={styles.position_relative}>
                            <StyleProvider style={getTheme(babyTab)}>
                                <Tabs
                                    style={styles.fl1}
                                    initialPage={0}
                                    locked={true}
                                    tabContainerStyle={{ elevation: 0 }}
                                    renderTabBar={() => <ScrollableTab style={styles.bg_transparent} />}
                                >
                                    <Tab
                                        style={[styles.wrapper, styles.fl1]}
                                        heading={
                                            <TabHeading style={[styles.fl1, { minWidth: 150 }]}>
                                                <Text>Bé trai</Text>
                                            </TabHeading>
                                        }
                                        textStyle={styles.BabyNameTabTextStyle}
                                        activeTextStyle={styles.BabyNameTabActiveTextStyle}
                                    >

                                        <FlatList
                                            style={styles.PregnancyFlatList}
                                            data={this.props.babyName.boy}
                                            renderItem={({ item, index }) =>
                                                <BabyNameFlatListItem
                                                    {...item}
                                                    itemIndex={index}
                                                    navigations={this.props.navigation}
                                                    parentFlatList={this}
                                                />}
                                            keyExtractor={item => item._id}
                                            onRefresh={this._onRefresh}
                                            refreshing={this.state.refreshing}
                                        />
                                    </Tab>
                                    <Tab
                                        heading={
                                            <TabHeading style={[styles.fl1, { minWidth: 150 }]}>
                                                <Text>Bé gái</Text>
                                            </TabHeading>
                                        }
                                        textStyle={styles.BabyNameTabTextStyle}
                                        style={[styles.wrapper, styles.fl1]}
                                        activeTextStyle={styles.BabyNameTabActiveTextStyle}>
                                        <FlatList
                                            style={styles.PregnancyFlatList}
                                            data={this.props.babyName.girl}
                                            renderItem={({ item, index }) =>
                                                <BabyNameFlatListItem
                                                    {...item}
                                                    itemIndex={index}
                                                    navigations={this.props.navigation}
                                                    parentFlatList={this}
                                                />}
                                            keyExtractor={item => item._id}
                                            onRefresh={this._onRefresh}
                                            refreshing={this.state.refreshing}
                                        />
                                    </Tab>
                                    <Tab
                                        heading={
                                            <TabHeading style={[styles.fl1, { minWidth: 150 }]}>
                                                <Text>Tên yêu thích</Text>
                                            </TabHeading>
                                        }
                                        textStyle={styles.BabyNameTabTextStyle}
                                        style={[styles.wrapper, styles.fl1]}
                                        activeTextStyle={styles.BabyNameTabActiveTextStyle}
                                    >
                                        <FlatList
                                            style={styles.PregnancyFlatList}
                                            data={this.props.babyName.favourite}
                                            renderItem={({ item, index }) =>
                                                <BabyNameFlatListItem
                                                    {...item}
                                                    itemIndex={index}
                                                    navigations={this.props.navigation}
                                                    parentFlatList={this}
                                                />}
                                            keyExtractor={item => item._id}
                                            onRefresh={this._onRefresh}
                                            refreshing={this.state.refreshing}
                                        />
                                    </Tab>
                                </Tabs>
                            </StyleProvider>
                        </Row>
                    </Content>
                </Grid>
                <BabyNameModal ref={'babyModal'} parentFlatList={this}>

                </BabyNameModal>
            </Container>
        );

    }
}

export default BabyNameComponent;


