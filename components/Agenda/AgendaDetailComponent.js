import React, { Component } from 'react';
import { } from 'react-native';
import { Container, Content, Text, Thumbnail, View } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import { isEmpty } from "lodash";

// header
import HeaderComponent from "../Config/HeaderComponent";
//styles
import { styles, deviceHeight } from "../../assets/css/style";

class AgendaDetailComponent extends Component {
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
                    title={"Chi tiết nhật ký"}
                    heights={0.5}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperGridContent, { marginTop: top / 1.2, backgroundColor: '#fff', marginHorizontal: 10, borderRadius: 15, paddingHorizontal: 10 }]}>
                    <Row style={[{ flex: 0, paddingVertical: 5, marginVertical: 5}]}>
                        <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL, { fontWeight: '500' }]}>{params.params.name}</Text>
                    </Row>
                    {(!isEmpty(params.params.milestone)) ?
                        <Row style={[styles.row_mileStone]}>
                            <Col styles={[styles.fl1, styles.mgR]}>
                                <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL, { fontWeight: '500' }]}>Ngày đáng nhớ</Text>
                            </Col>
                            <Col style={styles.fl2}>
                                <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{params.params.milestone[0].name}</Text>
                            </Col>
                        </Row>
                        : null}
                    <Row style={[styles.mgV, styles.fl1]}>
                        <Content>
                            <View>
                                <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL, { fontWeight: '500' }]}>Nội dung:</Text>
                            </View>
                            <View>
                                <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{params.params.content}</Text>
                            </View>
                        </Content>
                    </Row>
                </Grid>
            </Container>
        );
    }
}
export default AgendaDetailComponent;
