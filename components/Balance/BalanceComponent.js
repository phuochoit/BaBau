import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Text, Content } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
// Component
import HeaderComponent from "../Config/HeaderComponent";
import BalanceFlatListItem from "./BalanceFlatListItem";
//styles
import { styles, deviceHeight } from "../../assets/css/style";

class BalanceComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount = () => {
        this.props.onfetchBalance();
    };

    render() {
        const top = - (deviceHeight * 0.2);
        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Cân Nặng"}
                    heights={0.2}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 2 }]}>
                    <Content>
                        <Row style={styles.position_relative}>
                            <FlatList
                                style={styles.PregnancyFlatList}
                                data={this.props.balance}
                                renderItem={({ item, index }) =>
                                    <BalanceFlatListItem
                                        {...item}
                                        itemIndex={index}
                                        navigations={this.props.navigation}
                                    />}
                                keyExtractor={item => item._id}
                            />
                        </Row>
                    </Content>
                </Grid>
            </Container>
        );
    }
}

export default BalanceComponent;


