import React, { Component } from 'react';
import { Container, Content, Text, Thumbnail } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import { isEmpty, map } from "lodash";
// header
import HeaderComponent from "../Config/HeaderComponent";
//styles
import { styles, deviceHeight, deviceWidth } from "../../assets/css/style";
//Functions
import { get_imageWeeks } from "../../values/Functions";

class PregnancyDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { detail } = this.props.navigation.state.params;
        const { list } = this.state;
        const top = - (deviceHeight * 0.5);
        let tip = <Row />
        let examination = <Row />
        if (!isEmpty(detail.Tip)) {
            tip =
                <Row style={styles.mgV}>
                    <Col style={[styles.jccaic, styles.PregnancyDetail_Left]}>
                        <Thumbnail small source={require('../../assets/images/ic_tip.png')} />
                    </Col>
                    <Col>
                        {map(detail.Tip, (val, key) => (
                            <Grid>
                                <Row>
                                    <Text style={[styles.csfontF, styles.PregnancyDetail_Text, styles.fontcolor3]}>{isEmpty(val.content) ? null : ` - ${val.content}`}</Text>
                                </Row>
                            </Grid>
                        ))}
                    </Col>
                </Row>;
        }

        if (!isEmpty(detail.Examination)) {
            examination =
                <Row style={styles.mgV}>
                    <Col style={[styles.jccaic, styles.PregnancyDetail_Left]}>
                        <Thumbnail small source={require('../../assets/images/ic_examination.png')} />
                    </Col>
                    <Col>
                        {map(detail.Examination, (val, key) => (
                            <Grid>
                                <Row>
                                    <Text style={[styles.csfontF, styles.PregnancyDetail_Text, styles.fontcolor3]}>{isEmpty(val.name) ? null : ` - ${val.name}`}</Text>
                                </Row>
                                <Row>
                                    <Text style={[styles.csfontF, styles.PregnancyDetail_Text, styles.fontcolor3]}>{isEmpty(val.content) ? null : ` + ${val.content}`}</Text>
                                </Row>
                            </Grid>
                        ))}
                    </Col>
                </Row>;
        }

        return (
            <Container style={styles.wrapper}>
                <HeaderComponent
                    title={"Chi Tiết Thai Kỳ"}
                    heights={0.5}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 1.2 }]}>
                    <Content >
                        <Row style={[styles.PregnancyContenr]}>
                            <Grid style={styles.PregnancyContenrBox}>
                                <Row style={styles.PregnancyContenrBoxHeader}>
                                    <Col />
                                    <Col style={[styles.PregnancyContenrHeaderBoxZi2, styles.fl1, styles.bg_color6, styles.jccaic]}>
                                        <Text style={[styles.csfontF, styles.PregnancyContenrHeaderBoxZi2_Text]}>Tuần {detail._id}</Text>
                                    </Col>
                                    <Col />
                                </Row>
                                <Row style={styles.PregnancydetaiboxContent}>
                                    <Grid style={[styles.mgH, styles.mgb]}>
                                        <Row style={styles.PregnancydetaiHeaderBoxImg}>
                                            <Thumbnail square source={get_imageWeeks(detail._id)}
                                                style={styles.PregnancydetailImage} />

                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF]}>{detail.overall_baby}</Text>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Col style={[styles.jccaic, styles.PregnancyDetail_Left]}>
                                                <Thumbnail small source={require('../../assets/images/ic_mom.png')} />
                                            </Col>
                                            <Col>
                                                <Text style={[styles.csfontF, styles.PregnancyDetail_Text, styles.fontcolor3]}>{detail.overall_mom}</Text>
                                                <Text style={[styles.csfontF, styles.PregnancyDetail_Text, styles.fontcolor3]}>{detail.mom_health}</Text>
                                            </Col>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Col style={[styles.jccaic, styles.PregnancyDetail_Left]}>
                                                <Thumbnail small source={require('../../assets/images/ic_baby.png')} />
                                            </Col>
                                            <Col>
                                                <Text style={[styles.csfontF, styles.PregnancyDetail_Text, styles.fontcolor3]}>{detail.baby_health}</Text>
                                            </Col>
                                        </Row>
                                        {examination}
                                        {tip}
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


export default PregnancyDetailComponent;