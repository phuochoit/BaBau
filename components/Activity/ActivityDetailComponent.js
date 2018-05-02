import React, { Component } from 'react';
import {  } from 'react-native';
import { Container, Content,  Text, Thumbnail } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import {  isNull } from "lodash";

// header
import HeaderComponent from "../Config/HeaderComponent";
//styles
import { styles, deviceHeight } from "../../assets/css/style";

class ActivityDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { params } = this.props.navigation.state;
        const top = - (deviceHeight * 0.5);
        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={params.detail.name}
                    heights={0.5}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 1.2 }]}>
                    <Content>
                        <Row style={[styles.PregnancyContenr]}>
                            <Grid style={styles.PregnancyContenrBox}>
                                <Row style={styles.PregnancyContenrBoxHeader}>
                                    <Col />
                                    <Col style={[styles.PregnancyContenrHeaderBoxZi2, styles.fl1, styles.bg_color13, styles.jccaic]}>
                                        <Thumbnail source={require('../../assets/images/ic_note.png')} />
                                    </Col>
                                    <Col />
                                </Row>
                                <Row style={styles.PregnancydetaiboxContent}>
                                    <Grid style={[styles.mgH, styles.mgb]}>
                                        <Row style={styles.PregnancydetaiHeaderBoxImg}>
                                            <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{params.detail.advice}</Text>
                                        </Row>

                                        <Row style={styles.mgV}>
                                            <Grid>
                                                {(!isNull(params.detail.h1)) ?
                                                    <Row>
                                                        <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF]}>{params.detail.h1}</Text>
                                                    </Row>
                                                    : null}
                                                {(!isNull(params.detail.p1)) ?
                                                    <Row>
                                                        <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, { paddingLeft: 10 }]}>{params.detail.p1}</Text>
                                                    </Row>
                                                    : null}
                                            </Grid>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Grid>
                                                {(!isNull(params.detail.h2)) ?
                                                    <Row>
                                                        <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF]}>{params.detail.h2}</Text>
                                                    </Row>
                                                    : null}
                                                {(!isNull(params.detail.p2)) ?
                                                    <Row>
                                                        <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, { paddingLeft: 10 }]}>{params.detail.p2}</Text>
                                                    </Row>
                                                    : null}
                                            </Grid>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Grid>
                                                {(!isNull(params.detail.h3)) ?
                                                    <Row>
                                                        <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF]}>{params.detail.h3}</Text>
                                                    </Row>
                                                    : null}
                                                {(!isNull(params.detail.p3)) ?
                                                    <Row>
                                                        <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, { paddingLeft: 10 }]}>{params.detail.p3}</Text>
                                                    </Row>
                                                    : null}
                                            </Grid>
                                        </Row>
                                    </Grid>
                                </Row>
                            </Grid>
                        </Row>
                    </Content>
                </Grid>
            </Container>
        );
    }
}
export default ActivityDetailComponent;
