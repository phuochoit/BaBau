import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Container, Content, Spinner, Text, Thumbnail, Icon } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import { isUndefined, isEmpty } from "lodash";

// header
import HeaderComponent from "../Config/HeaderComponent";
//styles
import { styles, deviceHeight } from "../../assets/css/style";

class CookingDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: (this.props.navigation.state.params.detail.is_favourite == 0) ? false : true
        };
    }
    _onfavourite() {
        const { detail } = this.props.navigation.state.params;
        this.setState({
            favourite: !this.state.favourite
        });
        param = { id: detail._id, is_favourite: (this.state.favourite) ? 1 : 0 }
        this.props.onfetchCookingfavourite(param);
    }
    render() {
        const { params } = this.props.navigation.state;
        const { list } = this.state;
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
                                    <Col style={[styles.PregnancyContenrHeaderBoxZi2, styles.fl1, styles.bg_color9, styles.jccaic]}>
                                        <Thumbnail source={require('../../assets/images/ic_cook.png')} />
                                    </Col>
                                    <Col />
                                </Row>
                                <Row style={styles.PregnancydetaiboxContent}>
                                    <Grid style={[styles.mgH, styles.mgb]}>
                                        <Row style={[styles.PregnancydetaiHeaderBoxImg, styles.position_relative]}>
                                            <Thumbnail square source={{ uri: params.detail.image }}
                                                style={styles.PregnancydetailImage} />
                                            <Icon
                                                onPress={this._onfavourite.bind(this)}
                                                name={(!this.state.favourite) ? 'ios-heart-outline' : 'ios-heart'}
                                                style={styles.cooking_detail_icon_heart} />
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{params.detail.description}</Text>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{params.detail.description}</Text>

                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Col>
                                                <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF, styles.txt_alignL]}>Khẩu phần</Text>
                                            </Col>
                                            <Col>
                                                <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignR]}>{params.detail.receip_yield}</Text>
                                            </Col>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Col>
                                                <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF, styles.txt_alignL]}>Thời Gian Nấu</Text>
                                            </Col>
                                            <Col>
                                                <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignR]}>{params.detail.cook_time}</Text>
                                            </Col>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Grid>
                                                <Row>
                                                    <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF]}>Nguyên Liệu</Text>
                                                </Row>
                                                <Row>
                                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, { paddingLeft: 10 }]}>{params.detail.ingredient}</Text>
                                                </Row>
                                            </Grid>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Grid>
                                                <Row>
                                                    <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF]}>Chuẩn bị</Text>
                                                </Row>
                                                <Row>
                                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF]}>{params.detail.prepare}</Text>
                                                </Row>
                                            </Grid>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Grid>
                                                <Row>
                                                    <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF]}>Cách Nấu</Text>
                                                </Row>
                                                <Row>
                                                    <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF]}>{params.detail.cook}</Text>
                                                </Row>
                                            </Grid>
                                        </Row>
                                        <Row style={styles.mgV}>
                                            <Grid>
                                                <Row>
                                                    <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF]}>Cách Dùng</Text>
                                                </Row>
                                                <Row>
                                                    <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF]}>{params.detail.eat}</Text>
                                                </Row>
                                            </Grid>
                                        </Row>
                                        {(!isEmpty(params.detail.advice)) ?
                                            <Row style={styles.mgV}>
                                                <Grid>
                                                    <Row>
                                                        <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF]}>Mẹo</Text>
                                                    </Row>
                                                    <Row>
                                                        <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF]}>{params.detail.advice}</Text>
                                                    </Row>
                                                </Grid>
                                            </Row>
                                            : null}
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
export default CookingDetailComponent;
