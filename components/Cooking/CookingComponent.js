import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Spinner, Text, ScrollableTab, TabHeading, Tabs, Tab, StyleProvider, getTheme, View} from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import { isUndefined, filter, concat, isEmpty } from "lodash";

// Component
import HeaderComponent from "../Config/HeaderComponent";
import CookingFlatListItem from "./CookingFlatListItem";

import { styles, deviceHeight } from "../../assets/css/style";
import { babyTab } from "../../assets/css/custom_theme.js";

class CookingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            page: 20
        };
        this.props.onfetchNetConnected();
    }
    componentWillMount() {
        this.props.onfetchCooking();
        this.props.onfetchCookingHint();
    }

    _onCookfavourite = (id, is_favourite) => {
        param = { id, is_favourite }
        this.props.onfetchCookingfavourite(param);
    }
    _onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        this.props.onfetchCooking();
    }

    render() {
        const top = - (deviceHeight * 0.2);

        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Nấu Ăn"}
                    heights={0.2}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 1.5 }]}>
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
                                        <Text>Tất Cả</Text>
                                    </TabHeading>
                                }
                            >
                                <FlatList
                                    style={styles.PregnancyFlatList}
                                    data={this.props.cooking.all}
                                    renderItem={({ item, index }) =>
                                        <CookingFlatListItem
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
                                style={[styles.wrapper, styles.fl1]}
                                heading={
                                    <TabHeading style={[styles.fl1, { minWidth: 150 }]}>
                                        <Text>Gợi ý hôm nay</Text>
                                    </TabHeading>
                                }
                            >
                                <FlatList
                                    style={styles.PregnancyFlatList}
                                    data={this.props.cooking.hint}
                                    renderItem={({ item, index }) =>
                                        <CookingFlatListItem
                                            {...item}
                                            itemIndex={index}
                                            navigations={this.props.navigation}
                                            parentFlatList={this}
                                        />}
                                    keyExtractor={item => item._id}
                                />
                            </Tab>
                            <Tab
                                style={[styles.wrapper, styles.fl1]}
                                heading={
                                    <TabHeading style={[styles.fl1, { minWidth: 150 }]}>
                                        <Text>Món yêu Thích</Text>
                                    </TabHeading>
                                }
                            >
                                <FlatList
                                    style={[styles.PregnancyFlatList, styles.fl1]}
                                    data={this.props.cooking.favourite}
                                    renderItem={({ item, index }) =>
                                        <CookingFlatListItem
                                            {...item}
                                            itemIndex={index}
                                            navigations={this.props.navigation}
                                            parentFlatList={this}
                                        />}
                                    keyExtractor={item => item._id}
                                />
                            </Tab>
                        </Tabs>
                    </StyleProvider>
                </Grid>
            </Container>
        );

    }
}

export default CookingComponent;