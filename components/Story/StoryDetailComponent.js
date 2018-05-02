import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Container, Spinner, Text, Thumbnail } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
// header
import HeaderComponent from "../Config/HeaderComponent";
//styles
import { styles, deviceHeight } from "../../assets/css/style";
class StoryDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    SpinnerLoadingView() {
        return <Spinner color='green' />
    }
    render() {
        const { params } = this.props.navigation.state;

        const top = - (deviceHeight * 0.5);

        return (
            <Container style={[styles.wrapper, { flex: 1 }]}>
                <HeaderComponent
                    title={params.detail.title}
                    heights={0.5}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 1.2 }]}>
                    <Row style={[styles.PregnancydetaiboxContent, { marginTop: 0, marginHorizontal: 10 }]}>
                        <Grid style={{ marginVertical: 20 }}>
                            <Row>
                                <WebView
                                    source={{ html: params.detail.detail, baseUrl: '' }}
                                    startInLoadingState={true}
                                    scalesPageToFit={true}
                                    bounces={true}
                                    renderLoading={this.SpinnerLoadingView}
                                />
                            </Row>
                        </Grid>

                    </Row>
                </Grid>
            </Container>
        );

    }
}
export default StoryDetailComponent;
