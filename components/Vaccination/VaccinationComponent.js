import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Container, Spinner, Text, Content } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import { isUndefined, filter, concat, isEmpty } from "lodash";


// Component
import HeaderComponent from "../Config/HeaderComponent";
import VaccinationFlatListItem from "./VaccinationFlatListItem";
import VaccinationModal from "./VaccinationModal";
//styles
import { styles, deviceHeight } from "../../assets/css/style";

class VaccinationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props.onfetchNetConnected();
    }
    componentWillMount() {
        this.props.onfetchVaccination();
    }
    render() {
        const top = - (deviceHeight * 0.2);
        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Tiêm Phòng"}
                    heights={0.2}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 2 }]}>
                    <Content>
                        <Row style={styles.position_relative}>
                            <FlatList
                                style={styles.PregnancyFlatList}
                                data={this.props.vaccination}
                                renderItem={({ item, index }) =>
                                    <VaccinationFlatListItem
                                        {...item}
                                        itemIndex={index}
                                        navigations={this.props.navigation}
                                        parentFlatList={this}
                                    />}
                                keyExtractor={item => item._id}
                            />
                        </Row>
                    </Content>
                </Grid>

                <VaccinationModal ref={'vaccinationmodal'} parentFlatList={this} />
            </Container>
        );

    }
}

export default VaccinationComponent;


