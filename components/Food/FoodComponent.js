import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Text, Tabs, Tab, StyleProvider, getTheme } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
// Component
import HeaderComponent from "../Config/HeaderComponent";
import FoodFlatListItem from "./FoodFlatListItem";
//styles
import { styles, deviceHeight } from "../../assets/css/style";
// custom_theme
import { babyTab } from "../../assets/css/custom_theme.js";
class FoodComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false
        };
        this.props.onfetchNetConnected();
        this._onRefresh = this._onRefresh.bind(this);
    }
    componentDidMount() {
        this.props.onfetchFood();
    }
    _onRefresh = () => {
        this.setState({
            refreshing: true,
        });
        this.props.onfetchFood();
    }

    render() {
        const { params } = this.props.navigation.state;
        const top = - (deviceHeight * 0.2);

        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Thực Phẩm"}
                    heights={0.2}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 1.5 }]}>
                    <StyleProvider style={getTheme(babyTab)}>
                        <Tabs
                            initialPage={0}
                            locked={true}
                            tabContainerStyle={{ elevation: 0 }}
                        >
                            <Tab
                                heading="Nên Ăn"
                                textStyle={styles.BabyNameTabTextStyle}
                                style={[styles.wrapper]}
                                activeTextStyle={styles.BabyNameTabActiveTextStyle}
                            >

                                <FlatList
                                    style={styles.PregnancyFlatList}
                                    data={this.props.food.good}
                                    renderItem={({ item, index }) =>
                                        <FoodFlatListItem
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
                                heading="Không Nên Ăn"
                                textStyle={styles.BabyNameTabTextStyle}
                                style={styles.wrapper}
                                activeTextStyle={styles.BabyNameTabActiveTextStyle}>
                                <FlatList
                                    style={styles.PregnancyFlatList}
                                    data={this.props.food.notgood}
                                    renderItem={({ item, index }) =>
                                        <FoodFlatListItem
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
                </Grid>
            </Container>
        );

    }
}

export default FoodComponent;