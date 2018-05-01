import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content, Tabs, Text, Tab, ScrollableTab, TabHeading, getTheme, StyleProvider } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import { isUndefined, concat, isEmpty } from "lodash";

// Component
import HeaderComponent from "../Config/HeaderComponent";
import StoryFlatListItem from "./StoryFlatListItem";

//styles
import { styles, deviceHeight } from "../../assets/css/style";
import { babyTab } from "../../assets/css/custom_theme.js";

class StoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            page: 0,
            refreshing: false
        };
        this._onEndReached = this._onEndReached.bind(this);
        this._onRefresh = this._onRefresh.bind(this);

        this.props.onfetchNetConnected();
    }
    componentWillMount() {
        this._onfetchStory();
        this._onfetchStoryFavourite();
    }
    _onfetchStoryFavourite = () => {
        this.props.onfetchStoryFavourite();
        this.setState({
            refreshing: false
        })
    }
    _onfetchStory = () => {
        this.props.onfetchStory();
        this.setState({
            page: 20,
            refreshing: false
        })
    }
    _onRefreshFavourite = ()  => {
        this.setState({
            refreshing: true,
        });
        this._onfetchStoryFavourite();
    }
    _onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        this._onfetchStory();
    }
    _onEndReached = () => {
        this.props.onfetchStoryMore(this.state.page);
        this.setState({
            page: this.state.page + 20,
        })
    }
    _onUpdattingStoryFavourite = (id, is_favourite) => {
        param = { id, is_favourite }
        this.props.onUpdattingStoryFavourite(param);
    }
    render() {
        const top = - (deviceHeight * 0.2);
        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Đọc Truyện"}
                    heights={0.2}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 2 }]}>
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
                                            <Text>Tất Cả</Text>
                                        </TabHeading>
                                    }
                                    textStyle={styles.BabyNameTabTextStyle}
                                    activeTextStyle={styles.BabyNameTabActiveTextStyle}
                                >
                                    <FlatList
                                        style={styles.PregnancyFlatList}
                                        data={this.props.story.all}
                                        renderItem={({ item, index }) =>
                                            <StoryFlatListItem
                                                {...item}
                                                itemIndex={index}
                                                navigations={this.props.navigation}
                                                parentFlatList={this}
                                            />}
                                        onEndReachedThreshold={0.1}
                                        onEndReached={this._onEndReached}
                                        keyExtractor={item => item._id}
                                        onRefresh={this._onRefresh}
                                        refreshing={this.state.refreshing}
                                    />
                                </Tab>
                                <Tab
                                    heading={
                                        <TabHeading style={[styles.fl1, { minWidth: 150 }]}>
                                            <Text>Truyện yêu thích</Text>
                                        </TabHeading>
                                    }
                                    textStyle={styles.BabyNameTabTextStyle}
                                    style={[styles.wrapper, styles.fl1]}
                                    activeTextStyle={styles.BabyNameTabActiveTextStyle}>
                                    <FlatList
                                        style={styles.PregnancyFlatList}
                                        data={this.props.story.favourite}
                                        renderItem={({ item, index }) =>
                                            <StoryFlatListItem
                                                {...item}
                                                itemIndex={index}
                                                navigations={this.props.navigation}
                                                parentFlatList={this}
                                            />}
                                        keyExtractor={item => item._id}
                                        onRefresh={this._onRefreshFavourite}
                                        refreshing={this.state.refreshing}
                                    />
                                </Tab>
                            </Tabs>
                        </StyleProvider>
                    </Row>
                </Grid>
            </Container>
        );

    }
}

export default StoryComponent;