import React, { Component } from 'react';
import { View, Picker, TouchableOpacity, ImageBackground, Text, Alert, AsyncStorage } from 'react-native';
import { isEmpty, isNumber, isUndefined } from "lodash";
import DatePicker from 'react-native-datepicker';
import LinearGradient from "react-native-linear-gradient";
// Header
import HeaderComponent from "../Config/HeaderComponent";
// DueDateCalculator
import { getDueDateCalculator, getCurrentDayAndFormat, pregnancyminusDays } from "../../values/DueDateCalculator";
// style
import { stylesForm, deviceWidth, styles, LinearGradientColor1, LinearGradientColor2, color1, colorstatusBarProps } from "../../assets/css/style";
// functions
import { getNowDate } from "../../values/Functions";
// screenName
import { HOME, DUEDATE } from "../../values/screenName";
const toDay = getNowDate();

class DueDateCalculatorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
            date: toDay.year + '-' + toDay.month + '-' + toDay.day,
            week_gestation_age: '',
            day_gestation_age: '',
            paramDate: {
                startDate: '',
                endDate: '',
                awayDate: '',
                ageWeeksDate: '',
                ageDaysDate: '',
                remainingDate: '',
                progressDate: '',
            },
            duedateshowBox: false,
            pregnancyAgeshowBox: false,
            pregnantshowBox: false,
            cyclicalEndshowBox: false,
        };
    }
    _onSaveData = async () => {
        let due_date = this.state.paramDate;
        if (!isEmpty(due_date.endDate)) {
            await AsyncStorage.setItem('@calculatoreScreen', JSON.stringify(due_date));

            this.props.navigation.navigate('HOME');
        } else {
            Alert.alert('Thông báo', 'Vui lòng lựa chọn ngày dự sinh.');
        }

    }
    _duedateTouchable() {
        this.setState({
            date: toDay.year + '-' + toDay.month + '-' + toDay.day,
            paramDate: {
                startDate: '',
                endDate: '',
                awayDate: '',
                ageWeeksDate: '',
                ageDaysDate: '',
                remainingDate: '',
                progressDate: '',
            },
            duedateshowBox: !this.state.duedateshowBox,
            pregnancyAgeshowBox: false,
            cyclicalEndshowBox: false,
            pregnantshowBox: false
        });
    }
    _pregnancyAgeTouchable() {
        this.setState({
            week_gestation_age: '',
            day_gestation_age: '',
            paramDate: {
                startDate: '',
                endDate: '',
                awayDate: '',
                ageWeeksDate: '',
                ageDaysDate: '',
                remainingDate: '',
                progressDate: '',
            },
            pregnancyAgeshowBox: !this.state.pregnancyAgeshowBox,
            duedateshowBox: false,
            cyclicalEndshowBox: false,
            pregnantshowBox: false
        });
    }
    _cyclicalEndTouchable() {
        this.setState({
            date: toDay.year + '-' + toDay.month + '-' + toDay.day,
            paramDate: {
                startDate: '',
                endDate: '',
                awayDate: '',
                ageWeeksDate: '',
                ageDaysDate: '',
                remainingDate: '',
                progressDate: '',
            },

            cyclicalEndshowBox: !this.state.cyclicalEndshowBox,
            duedateshowBox: false,
            pregnancyAgeshowBox: false,
            pregnantshowBox: false
        });
    }
    _pregnantTouchable() {
        this.setState({
            date: toDay.year + '-' + toDay.month + '-' + toDay.day,
            paramDate: {
                startDate: '',
                endDate: '',
                awayDate: '',
                ageWeeksDate: '',
                ageDaysDate: '',
                remainingDate: '',
                progressDate: '',
            },

            pregnantshowBox: !this.state.pregnantshowBox,
            duedateshowBox: false,
            pregnancyAgeshowBox: false,
            cyclicalEndshowBox: false
        });
    }
    _duedateonDateChange(date) {
        reusltParam = getDueDateCalculator({
            date: date,
            option: 1
        });
        this.setState({
            date: date,
            paramDate: {
                startDate: reusltParam.startDate,
                endDate: reusltParam.endDate,
                awayDate: reusltParam.awayDate,
                ageWeeksDate: reusltParam.ageWeeksDate,
                ageDaysDate: reusltParam.ageDaysDate,
                remainingDate: reusltParam.remainingDate,
                progressDate: reusltParam.progressDate,
            }
        });
    }
    _pregnancyAgeonValueChange(week, day) {
        if (isNumber(week) && isNumber(day)) {
            reusltParam = getDueDateCalculator({
                date: { week, day },
                option: 2
            });
            this.setState({
                week_gestation_age: week,
                day_gestation_age: day,
                paramDate: {
                    startDate: reusltParam.startDate,
                    endDate: reusltParam.endDate,
                    awayDate: reusltParam.awayDate,
                    ageWeeksDate: reusltParam.ageWeeksDate,
                    ageDaysDate: reusltParam.ageDaysDate,
                    remainingDate: reusltParam.remainingDate,
                    progressDate: reusltParam.progressDate,
                },
            });
        } else {
            this.setState({
                week_gestation_age: week,
                day_gestation_age: day,
                paramDate: {
                    startDate: '',
                    endDate: '',
                    awayDate: '',
                    ageWeeksDate: '',
                    ageDaysDate: '',
                    remainingDate: '',
                    progressDate: '',
                },
            });
        }
    }
    _cyclicalEndOnDateChange(date) {
        reusltParam = getDueDateCalculator({
            date: date,
            option: 3
        });
        this.setState({
            date: date,
            paramDate: {
                startDate: reusltParam.startDate,
                endDate: reusltParam.endDate,
                awayDate: reusltParam.awayDate,
                ageWeeksDate: reusltParam.ageWeeksDate,
                ageDaysDate: reusltParam.ageDaysDate,
                remainingDate: reusltParam.remainingDate,
                progressDate: reusltParam.progressDate,
            }
        });
    }
    _pregnantOnDateChange(date) {
        reusltParam = getDueDateCalculator({
            date: date,
            option: 4
        });
        this.setState({
            date: date,
            paramDate: {
                startDate: reusltParam.startDate,
                endDate: reusltParam.endDate,
                awayDate: reusltParam.awayDate,
                ageWeeksDate: reusltParam.ageWeeksDate,
                ageDaysDate: reusltParam.ageDaysDate,
                remainingDate: reusltParam.remainingDate,
                progressDate: reusltParam.progressDate,
            }
        });
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    _onDueDate() {
        this.props.navigation.navigate(DUEDATE);
    }
    render() {
        const { duedateshowBox, paramDate, week_gestation_age, day_gestation_age, pregnancyAgeshowBox, cyclicalEndshowBox, pregnantshowBox } = this.state;
        let week = [];
        for (let index = 0; index <= 40; index++) {
            week[index] = `Tuần ` + index;

        }
        let day = [];
        for (let index = 0; index <= 6; index++) {
            day[index] = `Ngày ` + index;

        }
        let dueDate = '';
        if (!isEmpty(paramDate.endDate)) {
            dueDate = 'Tuổi Thai hiện tại là ' + paramDate.ageWeeksDate + ' tuần ' + paramDate.ageDaysDate + ' ngày. Ngày dự sinh là ' + paramDate.endDate;
        }
        const minDatePicker = pregnancyminusDays(280);
        return (
            <View style={[styles.wrapper, styles.fl1]}>
                <HeaderComponent
                    title={"Tính ngày dự sinh"}
                    heights={0}
                    navigation={this.props.navigation}
                    hasSaveButton={true}
                    parentHeader={this}
                    hasBackButton={(!isUndefined(this.props.navigation.state.params) && this.props.navigation.state.params.params == 'EDITDUEDATE') ? true : false}
                />
                <ImageBackground
                    source={require('../../assets/images/welcome/step-3.jpg')}
                    style={[stylesForm.wrapperBackground,]}
                    resizeMode="cover"
                >
                    <View style={[stylesForm.wrapperForm]}>
                        <View style={[stylesForm.formHeader]}>
                            <Text style={stylesForm.formHeaderTitle}>Giúp bạn tính tuổi thai.</Text>
                            <Text style={stylesForm.formHeaderdueDateTitle}>{dueDate}</Text>
                        </View>
                        <View style={stylesForm.formContent}>
                            <View style={[stylesForm.formContentBox]}>
                                <TouchableOpacity onPress={this._duedateTouchable.bind(this)}>
                                    <Text style={[stylesForm.formContentBoxTitle]}>Tôi Biết Ngày Dự Sinh</Text>
                                </TouchableOpacity>
                                <View style={[stylesForm.formContentBoxContent, { display: (!duedateshowBox) ? 'none' : 'flex' }]}>
                                    <DatePicker
                                        style={[stylesForm.DatePickerBox]}
                                        customStyles={{
                                            dateInput: {
                                                borderTopWidth: 0,
                                                borderLeftWidth: 0,
                                                borderRightWidth: 0,
                                                borderBottomColor: colorstatusBarProps,
                                                fontFamily: 'SourceSansPro',
                                            },
                                            dateText: {
                                                fontSize: 18,
                                            }
                                        }}
                                        minDate={minDatePicker}
                                        date={this.state.date}
                                        showIcon={false}
                                        mode="date"
                                        placeholder="Ngày Dự Sinh"
                                        format="YYYY-MM-DD"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        onDateChange={(date) => {
                                            this._duedateonDateChange(date);
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={[stylesForm.formContentBox]}>
                                <TouchableOpacity onPress={this._pregnancyAgeTouchable.bind(this)}>
                                    <Text style={[stylesForm.formContentBoxTitle]}>Tôi Biết Tuổi Thai</Text>
                                </TouchableOpacity>

                                <View style={[stylesForm.formContentBoxContent, { display: (!pregnancyAgeshowBox) ? 'none' : 'flex', flexDirection: 'row', height: 50 }]}>
                                    <Picker
                                        style={stylesForm.PickerBoxRight}
                                        textStyle={{ fontSize: 14 }}
                                        mode="dropdown"
                                        selectedValue={week_gestation_age}
                                        onValueChange={(itemValue, itemIndex) => {
                                            this._pregnancyAgeonValueChange(itemValue, day_gestation_age);
                                        }}>
                                        <Picker.Item label='-- Tuần --' value='' />
                                        {week.map((key, item) => <Picker.Item label={key} value={item} />)}
                                    </Picker>
                                    <Picker
                                        style={stylesForm.PickerBoxLeft}
                                        mode="dropdown"
                                        textStyle={{ fontSize: 14 }}
                                        selectedValue={day_gestation_age}
                                        onValueChange={(itemValue, itemIndex) => {
                                            this._pregnancyAgeonValueChange(week_gestation_age, itemValue);
                                        }}>

                                        <Picker.Item label='-- Ngày --' value='' />
                                        {day.map((key, item) => <Picker.Item label={key} value={item} />)}
                                    </Picker>
                                </View>
                            </View>
                            <View style={[stylesForm.formContentBox]}>
                                <TouchableOpacity onPress={this._cyclicalEndTouchable.bind(this)}>
                                    <Text style={[stylesForm.formContentBoxTitle]}>Tính Theo Chu kỳ kinh Cuối</Text>
                                </TouchableOpacity>
                                <View style={[stylesForm.formContentBoxContent, { display: (!cyclicalEndshowBox) ? 'none' : 'flex' }]}>
                                    <DatePicker
                                        style={[stylesForm.DatePickerBox]}
                                        customStyles={{
                                            dateInput: {
                                                borderTopWidth: 0,
                                                borderLeftWidth: 0,
                                                borderRightWidth: 0,
                                                borderBottomColor: colorstatusBarProps,
                                            },
                                            dateText: {
                                                fontSize: 18,
                                            }
                                        }}
                                        date={this.state.date}
                                        minDate={minDatePicker}
                                        showIcon={false}
                                        mode="date"
                                        placeholder="Ngày kinh Cuối"
                                        format="YYYY-MM-DD"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        onDateChange={(date) => {
                                            this._cyclicalEndOnDateChange(date);
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={[stylesForm.formContentBox]}>
                                <TouchableOpacity onPress={this._pregnantTouchable.bind(this)}>
                                    <Text style={[stylesForm.formContentBoxTitle]}>Tôi Biết Ngày Thụ Thai</Text>
                                </TouchableOpacity>
                                <View style={[stylesForm.formContentBoxContent, { display: (!pregnantshowBox) ? 'none' : 'flex' }]}>
                                    <DatePicker
                                        style={[stylesForm.DatePickerBox]}
                                        customStyles={[{
                                            dateInput: {
                                                borderTopWidth: 0,
                                                borderLeftWidth: 0,
                                                borderRightWidth: 0,
                                                borderBottomColor: colorstatusBarProps,
                                                fontFamily: 'SourceSansPro',
                                            },
                                            dateText: {
                                                fontSize: 18,
                                                fontFamily: 'SourceSansPro',
                                            }
                                        }]}
                                        date={this.state.date}
                                        minDate={minDatePicker}
                                        showIcon={false}
                                        mode="date"
                                        placeholder="Ngày thụ thai"
                                        format="YYYY-MM-DD"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        onDateChange={(date) => {
                                            this._pregnantOnDateChange(date);
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={stylesForm.formFooter}>
                            <TouchableOpacity onPress={this._onDueDate.bind(this)}>
                                <Text style={stylesForm.formFooterTitle}>Tuổi thai là gì?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View >
        );
    }
}
export default DueDateCalculatorComponent;