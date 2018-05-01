import React, { Component } from 'react';
import { TouchableOpacity, Alert, Image } from 'react-native';
import { Text, Title, Icon, Thumbnail } from "native-base";
import { Col, Grid, Row } from 'react-native-easy-grid';
import { isUndefined, isEmpty, isNull } from "lodash";
import Swipeout from 'react-native-swipeout';

//style
import { styles } from "../../assets/css/style";
//Functions
import { trimStringToLength } from "../../values/Functions";
// screenName
import { UPDATEAGENDA, DETAILAGENDA } from "../../values/screenName";

class AgendaFlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };

    }

    render() {
        const { itemIndex, navigations, _id, milestone, content, is_reminder, name, status } = this.props;

        const swipeoutSetting = {
            autoClose: true,
            rowId: this.props.itemIndex,
            sectionId: 1,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: _id });
            },
            right: [
                {
                    onPress: () => {
                        navigations.navigate(DETAILAGENDA, {
                            title: 'Chi Tiết Nhật Ký',
                            params: { _id, milestone, name, content, status }
                        });
                    },
                    text: 'Xem',
                    backgroundColor: '#16A085',
                    color: '#fff',
                    underlayColor: "#16A085",
                },
                {
                    onPress: () => {
                        navigations.navigate(UPDATEAGENDA, {
                            title: 'Sửa Nhật Ký',
                            params: { _id, milestone, name, content, status }
                        });
                    },
                    text: 'Sửa',
                    backgroundColor: '#7882FF',
                    color: '#fff',
                    underlayColor: "#7882FF",
                }, {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Thông Báo',
                            'Bạn muốn xóa nhật ký!',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        this.props.parentFlatList._onDeleteAgenda(deletingRow);
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Xóa',
                    type: "delete"
                }
            ]
        }
        return (
            <Swipeout {...swipeoutSetting} style={{ flex: 1, backgroundColor: 'transparent', marginHorizontal: -10 }}>
                <Grid key={itemIndex} style={[styles.PregnancyFlatListItem_wrapper, { height: 90 }]}>
                    <Col style={[styles.PregnancyFlatListItem_Left, styles.jccaic, styles.bg_color7]}>
                        {(status == 1) ?
                            <Thumbnail small square source={require('../../assets/images/ic_milestone.png')} style={{ tintColor: '#fff' }} />
                            :
                            <Thumbnail small square source={require('../../assets/images/ic_list.png')} style={{ tintColor: '#fff' }} />
                        }
                    </Col>
                    <Col style={[styles.PregnancyFlatListItem_Right, { justifyContent: 'flex-start' }]}>
                        <Title style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{name}</Title>
                        <Text style={[styles.PregnancyFlatListItem_RightText, styles.txt_fontcolor1, styles.csfontF, styles.txt_alignL]}>{trimStringToLength(content, 65)}</Text>
                    </Col>
                </Grid>
            </Swipeout>
        );
    }
}

export default AgendaFlatListItem;


