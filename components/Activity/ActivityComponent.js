import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Content} from "native-base";
import { Row, Grid } from 'react-native-easy-grid';

// header
import HeaderComponent from "../Config/HeaderComponent";
// Component
import ActivityFlatListItem from "./ActivityFlatListItem";
//styles
import { styles, deviceHeight } from "../../assets/css/style";

class ActivityComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount() {
        this.props.onfetchNetConnected();
    }
    componentDidMount() {
        this.props.onfetchActivity();
    }
    render() {
        const top = - (deviceHeight * 0.2);
        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Hoạt Động"}
                    heights={0.2}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 2 }]}>
                    <Content>
                        <Row style={styles.position_relative}>
                            <FlatList
                                style={styles.PregnancyFlatList}
                                data={this.props.activity}
                                renderItem={({ item, index }) =>
                                    <ActivityFlatListItem
                                        {...item}
                                        itemIndex={index}
                                        navigations={this.props.navigation}
                                    />}
                                keyExtractor={item => item._id} />
                        </Row>
                    </Content>
                </Grid>
            </Container>
        );

    }
}


export default ActivityComponent;