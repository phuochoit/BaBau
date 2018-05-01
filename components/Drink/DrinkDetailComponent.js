import React, { Component } from 'react';
import {FlatList } from 'react-native';
import { Container, Content, Spinner, Text, Thumbnail, View } from "native-base";
import { Row, Grid, Col } from 'react-native-easy-grid';
import { isUndefined, isEmpty } from "lodash";

// header
import HeaderComponent from "../Config/HeaderComponent";
import CookingFlatListItem from "../Cooking/CookingFlatListItem";
//styles
import { styles, deviceHeight } from "../../assets/css/style";
// Function
import { change_alias } from "../../values/Functions";

class FoodDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentWillMount = () => {
        const { params } = this.props.navigation.state;
        this.props.onfetchCookingSearchTerm(params.detail.name);
    };
    _onCookfavourite = (id, is_favourite) => {
        param = { id, is_favourite }
        this.props.onfetchCookingfavourite(param);
    }
    render() {
       
        const { params } = this.props.navigation.state;
        const top = - (deviceHeight * 0.5 - 50);

        return (
            <Container style={[styles.wrapper, { flex: 1 }]}>
                <HeaderComponent
                    title={params.detail.name}
                    heights={0.5}
                    hasBackButton={true}
                    navigation={this.props.navigation}
                />
                <Grid style={[styles.wrapperContent, { top: top, marginBottom: top + 10 }]}>
                    <Row style={[styles.PregnancydetaiboxContent,styles.mgH,{ marginTop: 0}]}>
                        <Content>
                            <View style={[styles.mgH,styles.mgV]}>
                                <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF, styles.txt_alignC, {fontSize: 27}]}>{params.detail.advise_name}</Text>

                                <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF, styles.txt_alignL, {fontSize: 17}]}>{params.detail.advice}</Text>
                                {(!isEmpty(params.detail.h1)) ? <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF, styles.txt_alignL, styles.mgT]}>{params.detail.h1}</Text> : null}
                                {(!isEmpty(params.detail.p1)) ? <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF, styles.pdL, styles.mgT,styles.txt_contentBoxContent]}>{params.detail.p1}</Text> : null}
                                {(!isEmpty(params.detail.h2)) ? <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF, styles.txt_alignL, styles.mgT]}>{params.detail.h2}</Text> : null}
                                {(!isEmpty(params.detail.p2)) ? <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF,  styles.pdL, styles.mgT,styles.txt_contentBoxContent]}>{params.detail.p2}</Text> : null}
                                {(!isEmpty(params.detail.h3)) ? <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF, styles.txt_alignL, styles.mgT]}>{params.detail.h3}</Text> : null}
                                {(!isEmpty(params.detail.p3)) ? <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor1, styles.csfontF,  styles.pdL, styles.mgT,styles.txt_contentBoxContent]}>{params.detail.p3}</Text> : null}
                            </View>
                            {(!isEmpty(this.props.cooking)) ?
                                <View>
                                    <Text style={[styles.PregnancyFlatListItem_RightTitle, styles.txt_fontcolor4, styles.csfontF, styles.txt_alignL,  styles.pdL]} >Các món ăn liên quan</Text>
                                    <FlatList
                                        style={styles.PregnancyFlatList}
                                        data={this.props.cooking}
                                        renderItem={({ item, index }) =>
                                            <CookingFlatListItem
                                                {...item}
                                                itemIndex={index}
                                                navigationParams={params}
                                                navigations={this.props.navigation}
                                                parentFlatList={this}
                                            />}
                                        keyExtractor={item => item._id}
                                    />
                                </View>
                            : null }
                        </Content>
                    </Row>
                </Grid>
            </Container>
        );

    }
}
export default FoodDetailComponent;
